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
              Cada peça que criamos é única e especial, feita à mão com dedicação e amor pelos detalhes. 
              Nossa missão é trazer elegância e sofisticação através do trabalho artesanal, valorizando 
              técnicas tradicionais de costura e a qualidade dos tecidos selecionados.
            </p>
            <p className="text-neutral-700 mb-8 leading-relaxed">
              Acreditamos que a verdadeira moda é aquela que conta uma história, que carrega a essência 
              de quem a cria. Por isso, cada costura, cada acabamento, é pensado para criar peças que 
              transcendem tendências e se tornam atemporais.
            </p>
            
            {/* Espaço para Logo da Marca */}
            <div className="border-2 border-dashed border-neutral-300 rounded-lg p-8 flex items-center justify-center bg-neutral-50">
              <div className="text-center">
                <div className="w-24 h-24 bg-neutral-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-neutral-500">LOGO</span>
                </div>
                <p className="text-sm text-neutral-500">Espaço para sua logomarca</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1761076605434-6bb40eb91334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHNld2luZyUyMGZhYnJpY3xlbnwxfHx8fDE3NjQ2MTQ4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Trabalho Artesanal"
              className="w-full h-[600px] object-cover rounded-sm"
            />
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
