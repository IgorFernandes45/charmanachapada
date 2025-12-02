import { ImageWithFallback } from "./figma/ImageWithFallback";
import React, { useState } from 'react';
interface HeroProps {
  onNavigateToCatalog: () => void;
}

export function Hero({ onNavigateToCatalog }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      
      <div className="relative w-full aspect-[4/3]">
      <ImageWithFallback
        src="/images/Gemini_Generated_Image_dw404sdw404sdw40.png"
        alt="Luxury Fashion"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />
      </div>
      
      <div className="relative z-10 text-center text-white px-6">
        <p className="text-sm tracking-[0.3em] mb-4 opacity-90">NOVA COLEÇÃO</p>
        <h2 className="text-5xl md:text-7xl mb-6 tracking-tight">
          Inverno 2025
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Peças exclusivas feitas à mão com elegância atemporal e dedicação artesanal
        </p>
        <button 
          onClick={onNavigateToCatalog}
          className="bg-white text-neutral-900 px-8 py-3 hover:bg-neutral-100 transition-colors tracking-wider text-sm"
        >
          EXPLORAR COLEÇÃO
        </button>
      </div>
    </section>
  );
}