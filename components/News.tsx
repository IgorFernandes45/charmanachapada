import { ImageWithFallback } from "./figma/ImageWithFallback";
import React, { useState } from 'react';
const newsItems = [
  {
    id: 1,
    title: "Coleção de Inverno 2025",
    description: "Descubra as novas peças feitas à mão que chegaram para aquecer seu inverno com muito estilo.",
    image: "https://images.unsplash.com/photo-1756792339445-386bbe85668d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwZmFzaGlvbiUyMGRlc2lnbnxlbnwxfHx8fDE3NjQ2MTQ4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Dezembro 2024"
  },
  {
    id: 2,
    title: "Tecidos Exclusivos",
    description: "Selecionamos tecidos nobres e de alta qualidade para criar peças que unem conforto e elegância.",
    image: "https://images.unsplash.com/photo-1760328715296-9714daa8a737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwaGFuZGNyYWZ0fGVufDF8fHx8MTc2NDYxNDg2NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Novembro 2024"
  },
  {
    id: 3,
    title: "Processo Artesanal",
    description: "Conheça o cuidado e a dedicação por trás de cada costura em nosso atelier.",
    image: "https://images.unsplash.com/photo-1654707636750-ab67a11b21b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduZXIlMjBzdHVkaW98ZW58MXx8fHwxNzY0NTgxMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    date: "Novembro 2024"
  }
];

export function News() {
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
          {newsItems.map((item) => (
            <article key={item.id} className="bg-white overflow-hidden group cursor-pointer">
              <div className="relative overflow-hidden aspect-[4/3]">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs tracking-[0.2em] text-neutral-500 mb-3">
                  {item.date.toUpperCase()}
                </p>
                <h3 className="text-neutral-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
                <button className="text-neutral-900 text-sm tracking-wide hover:tracking-wider transition-all">
                  LER MAIS →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
