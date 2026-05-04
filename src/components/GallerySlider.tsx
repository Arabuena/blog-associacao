"use client";

import { useState, useRef } from "react";
import Image from "next/image";

interface Slide {
  page: number;
  image: string;
  text: string;
}

export function GallerySlider({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () => setCurrent((i) => (i === 0 ? slides.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === slides.length - 1 ? 0 : i + 1));

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    touchStartX.current = null;
  };

  const slide = slides[current];

  return (
    <div
      className="t-slider"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* Imagem */}
      <div className="t-slider-img">
        <Image
          key={slide.page}
          src={slide.image}
          alt={`Página ${slide.page}`}
          width={900}
          height={560}
          className="w-full h-full object-cover t-slider-fade"
          priority
        />
      </div>

      {/* Corpo */}
      <div className="t-slider-body">
        <span className="t-slider-badge">Página {slide.page} / {slides.length}</span>
        <p className="t-slider-text">{slide.text}</p>
      </div>

      {/* Controles */}
      <div className="t-slider-controls">
        <button className="t-slider-btn" onClick={prev} aria-label="Anterior">&#8592;</button>

        <div className="t-slider-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`t-slider-dot${i === current ? " t-slider-dot--active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        <button className="t-slider-btn" onClick={next} aria-label="Próximo">&#8594;</button>
      </div>
    </div>
  );
}
