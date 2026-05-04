"use client";

import { useState, useEffect, useCallback } from "react";
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

  const next = useCallback(() => setCurrent((i) => (i + 1) % slides.length), []);
  const prev = () => setCurrent((i) => (i === 0 ? slides.length - 1 : i - 1));

  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [next]);

  return (
    <div className="hs-root">
      <div className="hs-track">
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
              sizes="100vw"
              className="hs-img"
              priority={i === 0}
            />
            <div className="hs-caption">{s.alt}</div>
          </div>
        ))}
      </div>

      <button className="hs-arrow hs-arrow--left" onClick={prev} aria-label="Anterior">&#8592;</button>
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
