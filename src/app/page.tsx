import Image from "next/image";
import pdfContent from "@/data/pdf-content.json";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { NavMobile } from "@/components/NavMobile";
import { PdfCard } from "@/components/PdfCard";
import logoAssociacao from "@/components/OUTROS/logoassociacao.png";
import xadrezImg from "@/components/OUTROS/XADREZ.png";
import psyPoster from "@/components/OUTROS/mete psico.png";
import cicinho from "@/components/OUTROS/cicinho.png";
import informaticaImg from "@/components/OUTROS/Design sem nome (3).png";
import logoHeader2 from "@/components/IMAGES/HEADER/logo2.png";
import otalmoImg from "@/components/IMAGES/HEADER/otalmo.png";
import fachada from "@/components/fachada.jpeg";
import inauguracao from "@/components/inauguracao.jpeg";
import { HeroSlider } from "@/components/HeroSlider";

type PdfPage = { page: number; text: string; image: string | null };

const WA_HREF =
  "https://wa.me/5562993287625?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Associa%C3%A7%C3%A3o%20Amigo%20do%20Povo.";

const pages = pdfContent.pages as PdfPage[];
const byPage = (n: number) => pages.find((p) => p.page === n);

const p = {
  capa:    byPage(1),
  sobre:   byPage(2),
  inaug:   byPage(3),
  escol1:  byPage(4),
  escol2:  byPage(5),
  expand:  byPage(6),
  info:    byPage(7),
  bomb:    byPage(8),
  hidro:   byPage(9),
  karate:  byPage(10),
  natacao: byPage(11),
  psi:     byPage(12),
  fisio:   byPage(13),
  funcio:  byPage(14),
  danca:   byPage(15),
  xadrez:  byPage(16),
  oftalmo: byPage(17),
  final:   byPage(18),
};

const activities = [
  { name: "Futebol adulto",          color: "#1d4ed8" },
  { name: "Futebol infanto-juvenil", color: "#0ea5e9" },
  { name: "Hidroginástica",          color: "#14b8a6" },
  { name: "Natação",                  color: "#6366f1" },
  { name: "Karatê",                   color: "#e11d48" },
  { name: "Xadrez",                  color: "#7c3aed" },
  { name: "Informática",             color: "#0891b2" },
  { name: "Bombeiro Mirim",          color: "#b91c1c" },
  { name: "Psicanálise",             color: "#0d9488" },
  { name: "Fisioterapia",            color: "#2563eb" },
  { name: "Funcional",               color: "#15803d" },
  { name: "Dança",                   color: "#c026d3" },
  { name: "Oftalmologia",            color: "#7e22ce" },
];

const galleryPages = pages.filter((pg) => pg.image).slice(0, 12);
const REEL_FUNCIONAL_URL = "https://www.instagram.com/reel/DXK4snEEVir/embed/";
const REEL_DANCA_URL = "https://www.instagram.com/reel/DQaWB52kQxv/embed/";

export default function Home() {
  return (
    <div className="t-shell">

      {/* NAV */}
      <nav className="t-nav">
        <div className="t-nav-inner">
          <span className="t-nav-brand">Associação Amigo do Povo</span>
          <div className="t-nav-links">
            <a href="#sobre">Sobre</a>
            <a href="#inauguracao">Inauguração</a>
            <a href="#atividades">Atividades</a>
            <a href="#galeria">Galeria</a>
            <a href="#contato">Contato</a>
          </div>
          <WhatsAppButton href={WA_HREF} label="WhatsApp" className="t-nav-wpp t-btn-solid" />
          <NavMobile />
        </div>
      </nav>

      {/* HERO */}
      <section className="t-hero">
        <div className="t-hero-inner">
          <div className="t-hero-text">
            <span className="t-badge">Portfólio Social 2023-2026</span>
            <h1 className="t-hero-h1">
              Fazer o bem<br /><em>transforma tudo.</em>
            </h1>
            <p className="t-hero-sub">
              A cada dia, a Associação Amigo do Povo fortalece seu papel social
              ampliando seu alcance e impactando positivamente inúmeras pessoas.
            </p>
            <div className="t-hero-btns">
              <WhatsAppButton href={WA_HREF} label="Falar pelo WhatsApp" className="t-btn-solid" />
              <a className="t-btn-ghost" href="#sobre">Saiba mais</a>
            </div>
          </div>
          <div className="t-hero-visual">
            <Image
              src={logoHeader2}
              alt="Logo da Associação Amigo do Povo"
              className="t-hero-logo"
              priority
            />
          </div>
          <div className="t-metrics">
            <div className="t-metric-card"><strong>3+</strong><span>anos de atuação</span></div>
            <div className="t-metric-card"><strong>13</strong><span>frentes ativas</span></div>
          </div>
        </div>
      </section>

      {/* SLIDE DE ATIVIDADES */}
      <div style={{ padding: "2rem 1.5rem", background: "var(--white)" }}>
        <HeroSlider />
      </div>

      {/* SOBRE */}
      <section id="sobre" className="t-section t-section-lightblue">
        <div className="t-section-inner">
          <div className="t-sobre-grid">
            <div className="t-sobre-text">
              <p className="t-label">Quem somos</p>
              <h2 className="t-h2">Nossa história e missão</h2>
              <p className="t-body">{p.sobre?.text}</p>
              <p className="t-body">{p.expand?.text}</p>
              <div style={{ marginTop: "0.5rem" }}>
                <a className="t-btn-solid" href="#atividades">Conhecer atividades</a>
              </div>
            </div>
            <div className="t-card t-sobre-reel-card">
              <div className="t-sobre-reel-clip">
                <Image
                  src={fachada}
                  alt="Fachada da Associação Amigo do Povo"
                  fill
                  style={{ objectFit: "cover", borderRadius: "0.75rem" }}
                  sizes="(max-width:600px) 100vw, 420px"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INAUGURACAO */}
      <section id="inauguracao" className="t-section">
        <div className="t-section-inner">
          <div className="t-section-head">
            <p className="t-label">Marco histórico</p>
            <h2 className="t-h2">Inauguração da Associação</h2>
            <p className="t-body" style={{ maxWidth: "62ch" }}>{p.inaug?.text}</p>
          </div>
          <div style={{ marginTop: "2rem", borderRadius: "1rem", overflow: "hidden", maxWidth: "860px", margin: "2rem auto 0" }}>
            <Image
              src={inauguracao}
              alt="Inauguração da Associação Amigo do Povo"
              width={1200}
              height={800}
              style={{ width: "100%", height: "auto", display: "block" }}
              priority
            />
          </div>
        </div>
      </section>

      {/* ESCOLINHA */}
      <section className="t-section t-section-blue" id="atividades">
        <div className="t-section-inner">
          <div className="t-section-head">
            <p className="t-label t-label-white">Esporte &amp; Inclusão</p>
            <h2 className="t-h2" style={{ color: "#fff" }}>Escolinha de Futebol</h2>
          </div>
          <div className="t-sobre-grid">
            <div className="t-card" style={{ padding: 0, overflow: "hidden" }}>
              {p.escol1?.image && (
                <Image src={p.escol1.image} alt="Escolinha de futebol" width={800} height={540} className="w-full h-full object-cover" style={{ display: "block" }} />
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className="t-card">
                <p className="t-label" style={{ marginBottom: "0.5rem" }}>Futebol adulto &amp; infanto-juvenil</p>
                <p className="t-body">{p.escol1?.text}</p>
              </div>
              <div className="t-card" style={{ padding: 0, overflow: "hidden" }}>
                {p.escol2?.image && (
                  <Image src={p.escol2.image} alt="Escolinha de futebol 2" width={800} height={400} className="w-full h-full object-cover" style={{ display: "block" }} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODALIDADES */}
      <section className="t-section t-section-lightblue">
        <div className="t-section-inner">
          <div className="t-section-head">
            <p className="t-label">Tudo que oferecemos</p>
            <h2 className="t-h2">Modalidades em funcionamento</h2>
            <p className="t-body" style={{ maxWidth: "62ch" }}>{p.expand?.text}</p>
          </div>
          <div className="t-activities-grid">
            {activities.map((a) => (
              <span
                key={a.name}
                className="t-activity-chip"
                style={{ background: a.color + "22", borderColor: a.color + "44", color: a.color, border: "1px solid" }}
              >
                <span className="t-activity-dot" style={{ background: a.color }} />
                {a.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* INFORMATICA */}
      <section className="t-section">
        <div className="t-section-inner">
          <div className="t-act-card">
            <div className="t-act-header">
              <p className="t-label">Educação Digital</p>
              <h2 className="t-h2">Aulas de Informática</h2>
              <p className="t-body">{p.info?.text}</p>
            </div>
            <div className="t-act-photos-2">
              {p.info?.image && (
                <div className="t-act-photo">
                  <Image src={p.info.image} alt="Aulas de informática" width={700} height={480} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="t-act-photo">
                <Image src={informaticaImg} alt="Material de informática" width={700} height={480} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOMBEIRO MIRIM */}
      <section className="t-section t-section-blue">
        <div className="t-section-inner">
          <div className="t-act-card" style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.15)" }}>
            <div className="t-act-header">
              <p className="t-label t-label-white">Cidadania &amp; Segurança</p>
              <h2 className="t-h2" style={{ color: "#fff" }}>Bombeiro Mirim</h2>
              <p className="t-body" style={{ color: "rgba(255,255,255,0.8)" }}>{p.bomb?.text}</p>
            </div>
            {p.bomb?.image && (
              <div className="t-act-photo-wide">
                <Image src={p.bomb.image} alt="Bombeiro Mirim" width={1200} height={600} className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* HIDROGINASTICA */}
      <section className="t-section">
        <div className="t-section-inner">
          <div className="t-act-card">
            <div className="t-act-header">
              <p className="t-label">Saúde &amp; Bem-estar</p>
              <h2 className="t-h2">Hidroginástica</h2>
              <p className="t-body">{p.hidro?.text}</p>
            </div>
            {p.hidro?.image && (
              <div className="t-act-photo-wide">
                <Image src={p.hidro.image} alt="Hidroginástica" width={1200} height={600} className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* KARATE */}
      <section className="t-section t-section-lightblue">
        <div className="t-section-inner">
          <div className="t-act-card">
            <div className="t-act-header">
              <p className="t-label">Artes Marciais</p>
              <h2 className="t-h2">Karatê</h2>
              <p className="t-body">{p.karate?.text}</p>
            </div>
            <div className="t-act-photos-2">
              {p.karate?.image && (
                <div className="t-act-photo">
                  <Image src={p.karate.image} alt="Karatê" width={700} height={480} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="t-act-photo">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1772633227234530%2F&show_text=false&width=267&t=0"
                  className="t-social-embed-frame"
                  title="Reel Karatê Associação Amigo do Povo"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NATACAO */}
      <section className="t-section">
        <div className="t-section-inner">
          <div className="t-act-card">
            <div className="t-act-header">
              <p className="t-label">Esporte Aquático</p>
              <h2 className="t-h2">Natação</h2>
              <p className="t-body">{p.natacao?.text}</p>
            </div>
            {p.natacao?.image && (
              <div className="t-act-photo-wide">
                <Image src={p.natacao.image} alt="Natação" width={1200} height={600} className="w-full h-full object-cover" />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PSICANALISE */}
      <section className="t-section t-section-blue">
        <div className="t-section-inner">
          <div className="t-cards-grid">
            <div className="t-act-card" style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.15)" }}>
              <p className="t-label t-label-white">Saúde Mental</p>
              <h2 className="t-h2" style={{ color: "#fff" }}>Atendimento Psicanalítico</h2>
              <p className="t-body" style={{ color: "rgba(255,255,255,0.8)" }}>{p.psi?.text}</p>
              {p.psi?.image && (
                <div className="t-act-photo" style={{ marginTop: "1rem" }}>
                  <Image src={p.psi.image} alt="Psicanálise" width={700} height={480} className="w-full h-full object-cover" />
                </div>
              )}
            </div>
            <div className="t-act-card" style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.15)", padding: "1.2rem", justifyContent: "center" }}>
              <Image
                src={psyPoster}
                alt="Cartaz atendimento em psicanálise"
                width={700}
                height={900}
                className="w-full h-auto object-contain"
                style={{ maxWidth: "360px", margin: "0 auto" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* FISIOTERAPIA + FUNCIONAL */}
      <section className="t-section">
        <div className="t-section-inner">
          <div className="t-cards-grid">
            <div className="t-act-card">
              <p className="t-label">Reabilitação</p>
              <h2 className="t-h2">Fisioterapia</h2>
              <p className="t-body">{p.fisio?.text}</p>
              <div className="t-act-reel-clip" style={{ marginTop: "1rem" }}>
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1360567668951330%2F&show_text=false&width=267&t=0"
                  className="t-social-embed-frame"
                  title="Reel Fisioterapia Associação Amigo do Povo"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="t-act-card">
              <p className="t-label">Condicionamento</p>
              <h2 className="t-h2">Funcional</h2>
              <p className="t-body">{p.funcio?.text}</p>
              <div className="t-act-reel-clip" style={{ marginTop: "1rem" }}>
                <iframe
                  src={REEL_FUNCIONAL_URL}
                  className="t-act-reel-frame"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  title="Reel Funcional Associação Amigo do Povo"
                  scrolling="no"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* XADREZ */}
      <section className="t-section t-section-lightblue">
        <div className="t-section-inner">
          <div className="t-act-card">
            <div className="t-act-header">
              <p className="t-label">Estratégia &amp; Raciocínio</p>
              <h2 className="t-h2">Xadrez</h2>
              <p className="t-body">{p.xadrez?.text}</p>
            </div>
            <div className="t-act-photo-wide">
              <Image src={xadrezImg} alt="Xadrez" width={1200} height={600} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* DANCA + OFTALMOLOGIA */}
      <section className="t-section">
        <div className="t-section-inner">
          <div className="t-cards-grid">
            <div className="t-act-card">
              <p className="t-label">Arte &amp; Expressão</p>
              <h2 className="t-h2">Dança</h2>
              <div className="t-act-reel-clip" style={{ marginTop: "1rem" }}>
                <iframe
                  src={REEL_DANCA_URL}
                  className="t-act-reel-frame"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  title="Reel Dança Associação Amigo do Povo"
                  scrolling="no"
                />
              </div>
            </div>
            <div className="t-act-card">
              <p className="t-label">Saúde Visual</p>
              <h2 className="t-h2">Oftalmologia</h2>
              <p className="t-body">{p.oftalmo?.text}</p>
              <p className="t-body" style={{ marginTop: "0.6rem" }}>
                Exames de vista realizados periodicamente para a comunidade, com acesso gratuito a consultas e indicacao de tratamento.
              </p>
              <div className="t-act-photo" style={{ marginTop: "1rem" }}>
                <Image src={otalmoImg} alt="Atendimento oftalmológico" width={700} height={480} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERIA */}
      <section id="galeria" className="t-section t-section-blue">
        <div className="t-section-inner">
          <div className="t-section-head">
            <p className="t-label t-label-white">Registros oficiais</p>
            <h2 className="t-h2" style={{ color: "#fff" }}>Galeria do portfólio</h2>
          </div>
          <div className="t-gallery">
            {galleryPages.map((item) => (
              <PdfCard
                key={item.page}
                page={item.page}
                image={item.image!}
                text={item.text ?? ""}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="t-section t-section-cta">
        <div className="t-section-inner">
          <div className="t-cta-grid">
            <div className="t-cta-info">
              <p className="t-label t-label-white">Mensagem final</p>
              <h2 className="t-h2" style={{ color: "#fff" }}>
                Fazer o bem<br />transforma tudo.
              </h2>
              <p className="t-body" style={{ color: "rgba(255,255,255,0.8)" }}>{p.final?.text}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "0.5rem" }}>
                <WhatsAppButton href={WA_HREF} label="Falar pelo WhatsApp" className="t-btn-solid" />
                <a className="t-btn-ghost" href="#sobre">Saiba mais</a>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div className="t-cta-stat"><strong>Endereço</strong><span>Av. São Bernardo 2, Qd 89 Lt 15 - Setor São Bernardo</span></div>
              <div className="t-cta-stat"><strong>Telefone</strong><span>(62) 99328-7625</span></div>
              <div className="t-cta-stat"><strong>E-mail</strong><span>amigodopovoassociacao@gmail.com</span></div>
              <div className="t-cta-stat"><strong>CNPJ</strong><span>62.768.212/0001-70</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="t-footer">
        <div className="t-footer-inner">
          <Image src={logoAssociacao} alt="Logo Associação Amigo do Povo" width={80} height={80} className="t-footer-logo" />
          <p className="t-footer-name">Associação Amigo do Povo</p>
          <p className="t-footer-copy">CNPJ 62.768.212/0001-70 · Av. São Bernardo 2, Qd 89 Lt 15, Setor São Bernardo</p>
          <p className="t-footer-copy">(62) 99328-7625 · amigodopovoassociacao@gmail.com</p>
          <p style={{ color: "rgba(255,255,255,0.28)", fontSize: "0.75rem", marginTop: "0.3rem" }}>
            © {new Date().getFullYear()} · Todos os direitos reservados
          </p>
        </div>
      </footer>

    </div>
  );
}
