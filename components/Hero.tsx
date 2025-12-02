import { ImageWithFallback } from "./figma/ImageWithFallback";
import React from 'react';

interface HeroProps {
  onNavigateToCatalog: () => void;
}

export function Hero({ onNavigateToCatalog }: HeroProps) {
  return (
    // 1. Seção principal: Define a altura e o preenchimento (padding) lateral/vertical
    // min-h-[80vh] para que ocupe menos que a tela cheia, mas tenha um tamanho mínimo bom.
    <section className="relative min-h-[80vh] py-12 md:py-16 flex items-center justify-center overflow-hidden bg-neutral-50">
      
      {/* Container que limita a largura do conteúdo e adiciona as "margens" em volta da imagem */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 2. Container da Imagem: Aplica o arredondamento e garante que ocupe a largura total dentro do container principal */}
        <div className="relative w-full h-[60vh] md:h-[70vh] rounded-xl overflow-hidden shadow-2xl">
          
          {/* Camada da Imagem */}
          <ImageWithFallback
            // 💡 Substitua pelo caminho da sua imagem
            src="/images/Page 61.webp" 
            alt="Modelo em vestido longo, Charme na Chapada"
            // 'object-cover' garante que a imagem preenche o container
            className="w-full h-full object-cover object-center"
          />
          
          {/* Camada de Overlay: Escurece suavemente para o texto branco */}
          <div className="absolute inset-0 bg-black/35 md:bg-black/25" />
          
          {/* 3. Conteúdo (Texto e Botão): Centralizado sobre a imagem com flexbox */}
          <div className="absolute inset-0 z-10 flex items-center justify-center text-center text-white px-6">
              
            {/* Box de Conteúdo com ajustes responsivos */}
            <div>
              <p className="text-xs md:text-sm tracking-[0.3em] mb-3 opacity-90 uppercase">NOVA COLEÇÃO</p>
              
              {/* Títulos menores no celular (sm:text-5xl) e maiores no desktop (lg:text-6xl) */}
              <h2 className="text-3xl sm:text-5xl lg:text-6xl mb-4 tracking-tight font-light drop-shadow-lg">
                Inverno 2025
              </h2>
              
              <p className="text-sm md:text-lg mb-6 max-w-xl mx-auto opacity-90 drop-shadow">
                Peças exclusivas feitas à mão com elegância atemporal e dedicação artesanal.
              </p>
              
              <button 
                onClick={onNavigateToCatalog}
                // Botão responsivo e com foco visual
                className="bg-white text-neutral-900 px-8 py-2 md:px-10 md:py-3 hover:bg-neutral-100 transition-colors tracking-widest text-xs md:text-sm uppercase font-medium shadow-xl"
              >
                EXPLORAR COLEÇÃO
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}