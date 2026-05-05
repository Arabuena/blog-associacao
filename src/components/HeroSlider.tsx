"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import fisio from "./OUTROS/slide/fisio22.png";
import hidro from "./OUTROS/slide/hidro.png";
import karate from "./OUTROS/slide/karate.png";
import natacao from "./OUTROS/slide/nataco.png";

import hidroMobile    from "./OUTROS/slide-mobile/Hidro.jpeg";
import informatica    from "./OUTROS/slide-mobile/informatica.jpeg";
import natacaoMobile  from "./OUTROS/slide-mobile/natacao.jpg";
import psicanalise    from "./OUTROS/slide-mobile/psicanalise.jpeg";
import whatsapp       from "./OUTROS/slide-mobile/WhatsApp Image 2026-05-04 at 09.01.06.jpeg";

const slides = [
  { src: hidro,   alt: "Hidroginástica" },
  { src: karate,  alt: "Karatê" },
  { src: natacao, alt: "Natação" },
  { src: fisio,   alt: "Fisioterapia" },
];

const slidesMobile = [
  { src: hidroMobile,   alt: "Hidroginástica" },
  { src: informatica,   alt: "Informática" },
  { src: natacaoMobile, alt: "Natação" },
  { src: psicanalise,   alt: "Psicanálise" },
  { src: whatsapp,      alt: "Atividade" },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 600px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
      setCurrent(0);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const activeSlides = isMobile ? slidesMobile : slides;

  const next = useCallback(() => setCurrent((i) => (i + 1) % activeSlides.length), [activeSlides.length]);
  const prev = useCallback(() => setCurrent((i) => (i === 0 ? activeSlides.length - 1 : i - 1)), [activeSlides.length]);

  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  const onTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) next();
    else if (diff < -40) prev();
    touchStartX.current = null;
  };

  return (
    <div className="hs-root" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
      {activeSlides.map((s, i) => (
        <div
          key={i}
          className={`hs-slide${i === current ? " hs-slide--active" : ""}`}
          aria-hidden={i !== current}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            sizes="(max-width:600px) 100vw, 860px"
            className="hs-img"
            priority={i === 0}
          />
          <div className="hs-caption">{s.alt}</div>
        </div>
      ))}

      <button className="hs-arrow hs-arrow--left"  onClick={prev} aria-label="Anterior">&#8592;</button>
      <button className="hs-arrow hs-arrow--right" onClick={next} aria-label="Próximo">&#8594;</button>

      <div className="hs-dots">
        {activeSlides.map((_, i) => (
          <button
            key={i}
            className={`hs-dot${i === current ? " hs-dot--on" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
