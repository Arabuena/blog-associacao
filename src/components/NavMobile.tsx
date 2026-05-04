"use client";
import { useState } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const WA_HREF =
  "https://wa.me/5562993287625?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20a%20Associa%C3%A7%C3%A3o%20Amigo%20do%20Povo.";

const links = [
  { href: "#sobre",       label: "Sobre" },
  { href: "#inauguracao", label: "Inauguração" },
  { href: "#atividades",  label: "Atividades" },
  { href: "#galeria",     label: "Galeria" },
  { href: "#contato",     label: "Contato" },
];

export function NavMobile() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button — only visible on mobile */}
      <button
        className="t-nav-hamburger"
        aria-label="Abrir menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        style={{ display: "flex" }}
      >
        <span className={`t-ham-line ${open ? "t-ham-open-1" : ""}`} />
        <span className={`t-ham-line ${open ? "t-ham-open-2" : ""}`} />
        <span className={`t-ham-line ${open ? "t-ham-open-3" : ""}`} />
      </button>

      {/* Drawer */}
      {open && (
        <div className="t-nav-drawer" onClick={() => setOpen(false)}>
          <div className="t-nav-drawer-inner" onClick={(e) => e.stopPropagation()}>
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <WhatsAppButton href={WA_HREF} label="Falar pelo WhatsApp" className="t-btn-solid t-drawer-wpp" />
          </div>
        </div>
      )}
    </>
  );
}
