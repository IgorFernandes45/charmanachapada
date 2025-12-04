import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Scissors, Sparkles } from "lucide-react";
import React, { useState } from 'react';
export function About() {
  return (
    <section id="sobre" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="order-2 lg:order-1">
            <p className="text-sm tracking-[0.3em] text-neutral-600 mb-3">NOSSA HISTÓRIA</p>
            <h2 className="text-4xl md:text-5xl text-neutral-900 mb-6">
              Charme na Chapada
            </h2>
            <p className="text-neutral-700 mb-6 leading-relaxed">
              A Charme na Chapada começou como um desejo: trazer para Alto Paraíso roupas que unissem elegância, qualidade e personalidade.
              Foram meses de pesquisa, estudo e seleção de peças até criar uma curadoria única, baseada em:<br />
              ✔ modelagem perfeita <br />
              ✔ acabamento refinado <br />
              ✔ estilo moderno e atemporal

            </p>
            <p className="text-neutral-700 mb-8 leading-relaxed">
              Aqui, cada coleção é escolhida como quem escreve um capítulo novo.
              Charme na Chapada é a história de um sonho que virou loja — e de uma loja que veste mulheres com verdade.
            </p>
            
            
            <div className="border-2 border-dashed border-neutral-300 rounded-lg overflow-hidden bg-neutral-50">
              <img
                src="/images/Page 1.webp"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
        
        </div>

        {/* Valores */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-neutral-900" size={28} />
            </div>
            <h3 className="text-neutral-900 mb-3 tracking-wide">
              Feito com Amor
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Cada peça é confeccionada com cuidado e dedicação, refletindo nossa paixão pelo que fazemos.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Scissors className="text-neutral-900" size={28} />
            </div>
            <h3 className="text-neutral-900 mb-3 tracking-wide">
              Artesanal
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Valorizamos técnicas tradicionais de costura e o trabalho manual que torna cada peça única.
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="text-neutral-900" size={28} />
            </div>
            <h3 className="text-neutral-900 mb-3 tracking-wide">
              Exclusividade
            </h3>
            <p className="text-neutral-600 text-sm leading-relaxed">
              Peças exclusivas e limitadas, criadas especialmente para mulheres que valorizam o diferencial.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
