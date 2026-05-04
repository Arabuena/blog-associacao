import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createCanvas } from "@napi-rs/canvas";
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, "..");

const pdfPath = path.join(root, "Associação amigo do povo.pdf");
const outputImageDir = path.join(root, "public", "pdf-images");
const outputDataPath = path.join(root, "src", "data", "pdf-content.json");

const canvasFactory = {
  create(width, height) {
    const canvas = createCanvas(width, height);
    const context = canvas.getContext("2d");
    return { canvas, context };
  },
  reset(canvasAndContext, width, height) {
    canvasAndContext.canvas.width = width;
    canvasAndContext.canvas.height = height;
  },
  destroy(canvasAndContext) {
    canvasAndContext.canvas.width = 0;
    canvasAndContext.canvas.height = 0;
    canvasAndContext.canvas = null;
    canvasAndContext.context = null;
  },
};

function normalizeText(raw) {
  return raw
    .replace(/\s+/g, " ")
    .replace(/\u0000/g, "")
    .trim();
}

async function extract() {
  await mkdir(outputImageDir, { recursive: true });

  const loadingTask = getDocument(pdfPath);
  const pdf = await loadingTask.promise;
  const totalPages = pdf.numPages;

  const pages = [];
  const maxPagesToRender = Math.min(totalPages, 12);

  for (let pageNum = 1; pageNum <= totalPages; pageNum += 1) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();

    const text = normalizeText(
      textContent.items
        .map((item) => ("str" in item ? item.str : ""))
        .join(" ")
    );

    const pageInfo = {
      page: pageNum,
      text,
      image: null,
    };

    if (pageNum <= maxPagesToRender) {
      const viewport = page.getViewport({ scale: 1.6 });
      const canvasAndContext = canvasFactory.create(viewport.width, viewport.height);

      await page.render({
        canvasContext: canvasAndContext.context,
        viewport,
        canvasFactory,
      }).promise;

      const imageName = `page-${String(pageNum).padStart(2, "0")}.png`;
      const imagePath = path.join(outputImageDir, imageName);
      await writeFile(imagePath, canvasAndContext.canvas.toBuffer("image/png"));
      canvasFactory.destroy(canvasAndContext);
      pageInfo.image = `/pdf-images/${imageName}`;
    }

    pages.push(pageInfo);
  }

  const output = {
    sourceFile: "Associação amigo do povo.pdf",
    totalPages,
    extractedAt: new Date().toISOString(),
    pages,
  };

  await writeFile(outputDataPath, JSON.stringify(output, null, 2), "utf8");

  console.log(`Extracted ${totalPages} pages.`);
  console.log(`Rendered ${maxPagesToRender} preview images to public/pdf-images.`);
  console.log(`Saved text index to src/data/pdf-content.json.`);
}

extract().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
