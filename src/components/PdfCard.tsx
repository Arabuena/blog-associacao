"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface PdfCardProps {
  page: number;
  image: string;
  text: string;
  title?: string;
}

export function PdfCard({ page, image, text, title }: PdfCardProps) {
  const [open, setOpen] = useState(false);
  const label = title ?? `Página ${page}`;
  const excerpt = text.length > 90 ? text.slice(0, 90).trimEnd() + "…" : text;

  // Lock scroll when modal open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* COMPACT CARD */}
      <div className="t-pdf-card" onClick={() => setOpen(true)} role="button" tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}>
        <div className="t-pdf-thumb">
          <Image src={image} alt={label} width={400} height={240} className="w-full h-full object-cover" />
        </div>
        <div className="t-pdf-body">
          <span className="t-pdf-label">Página {page}</span>
          <p className="t-pdf-excerpt">{excerpt}</p>
          <span className="t-pdf-cta">Saiba mais →</span>
        </div>
      </div>

      {/* MODAL */}
      {open && (
        <div className="t-modal-backdrop" onClick={() => setOpen(false)}>
          <div className="t-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="t-modal-close" onClick={() => setOpen(false)} aria-label="Fechar">✕</button>
            <div className="t-modal-img">
              <Image src={image} alt={label} width={800} height={500} className="w-full h-full object-contain" />
            </div>
            <div className="t-modal-content">
              <span className="t-pdf-label">Página {page}</span>
              <p className="t-modal-text">{text}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
