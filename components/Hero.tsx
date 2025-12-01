import { ImageWithFallback } from "./figma/ImageWithFallback";
import React, { useState } from 'react';
interface HeroProps {
  onNavigateToCatalog: () => void;
}

export function Hero({ onNavigateToCatalog }: HeroProps) {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1678723357379-d87f2a0ec8ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwd29tZW58ZW58MXx8fHwxNzY0NjE0MzUwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury Fashion"
          className="w-full h-full object-cover"
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