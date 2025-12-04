import { ImageWithFallback } from "./figma/ImageWithFallback";
import React, { useState } from 'react';
import { CornerDownRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    title: "Coleção de Verão 2026",
    description: "Descubra as novas peças feitas à mão que chegaram para o verão com muito estilo.",
    fullText: "Conheça as novidades feitas à mão que acabaram de chegar — perfeitas para um verão cheio de estilo.",
    image: "/images/Page 5.webp",
    date: "Dezembro 2025"
  },
  {
    id: 2,
    title: "Tecidos Exclusivos",
    description: "Selecionamos tecidos nobres e de alta qualidade para criar peças que unem conforto e elegância.",
    fullText: "Criamos cada peça com materiais refinados e acabamento impecável, garantindo beleza, conforto e sofisticação em cada detalhe.",
    image: "https://images.unsplash.com/photo-1760328715296-9714daa8a737",
    date: "Novembro 2025"
  },
  {
    id: 3,
    title: "Processo Artesanal",
    description: "Conheça o cuidado e a dedicação por trás de cada costura em nosso atelier.",
    fullText: "Descubra a precisão e o carinho aplicados em cada costura criada em nosso atelier.",
    image: "images/image00268.jpeg",
    date: "Novembro 2025"
  }
];

export function News() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="novidades" className="py-20 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-neutral-600 mb-3">FIQUE POR DENTRO</p>
          <h2 className="text-4xl md:text-5xl text-neutral-900 mb-4">
            Novidades
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Acompanhe nossos lançamentos e descubra as histórias por trás de cada coleção artesanal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <article
                key={item.id}
                className="bg-white overflow-hidden group cursor-pointer rounded-lg transition-all shadow-sm hover:shadow-md"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      isOpen ? "scale-100" : "group-hover:scale-105"
                    }`}
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs tracking-[0.2em] text-neutral-500 mb-3">
                    {item.date.toUpperCase()}
                  </p>

                  <h3 className="text-neutral-900 mb-3 text-lg font-medium">
                    {item.title}
                  </h3>

                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Conteúdo expandido */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isOpen ? "max-h-40 mt-4" : "max-h-0"
                    }`}
                  >
                    <p className="text-neutral-600 text-sm leading-relaxed">
                      {item.fullText}
                    </p>
                  </div>

                  {/* Botão Ler Mais estilizado */}
                  <button
                    onClick={() => toggleCard(item.id)}
                    className="flex items-center gap-2 font-bold text-neutral-900 mt-4 hover:opacity-70 transition-opacity"
                  >
                    {isOpen ? "Recolher" : "Ler mais"}
                    <CornerDownRight size={18} />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
