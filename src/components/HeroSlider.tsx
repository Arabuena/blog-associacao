"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import fisio from "./OUTROS/slide/fisio22.png";
import hidro from "./OUTROS/slide/hidro.png";
import karate from "./OUTROS/slide/karate.png";
import natacao from "./OUTROS/slide/nataco.png";

const slides = [
  { src: hidro,   alt: "Hidroginástica" },
  { src: karate,  alt: "Karatê" },
  { src: natacao, alt: "Natação" },
  { src: fisio,   alt: "Fisioterapia" },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const next = useCallback(() => setCurrent((i) => (i + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((i) => (i === 0 ? slides.length - 1 : i - 1)), []);

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
      {slides.map((s, i) => (
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
        {slides.map((_, i) => (
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
