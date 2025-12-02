import React, { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  images: string[];
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = product.images?.length ?? 0;
  const src = total > 0 ? product.images[currentIndex] : "/images/placeholder.webp";

  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (total <= 1) return;
    setCurrentIndex((p) => (p === total - 1 ? 0 : p + 1));
  };

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (total <= 1) return;
    setCurrentIndex((p) => (p === 0 ? total - 1 : p - 1));
  };

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-white mb-3 aspect-[3/4] rounded-xl">
        {/* imagem atual (passa string para ImageWithFallback) */}
        <ImageWithFallback
          src={src}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Botão favorito (mantive igual) */}
        <button
          onClick={(e) => { e.stopPropagation(); setIsFavorite(!isFavorite); }}
          className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 md:p-2 rounded-full opacity-100 transition-opacity z-30"
          aria-label="Favoritar"
        >
          <Heart
            size={16}
            className={isFavorite ? "fill-red-500 text-red-500" : "text-neutral-700"}
          />
        </button>

        {/* OVERLAY opcional */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />

        {/* SETAS (aparecem só se houver mais de 1 imagem) */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Imagem anterior"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md z-30"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={next}
              aria-label="Próxima imagem"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md z-30"
            >
              <ChevronRight size={18} />
            </button>

            {/* Indicador de posição (pontos) */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2 z-30">
              {product.images.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                  className={`w-2 h-2 rounded-full ${i === currentIndex ? "bg-neutral-900" : "bg-white/70 border border-neutral-200"}`}
                  aria-label={`Ir para imagem ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="text-center md:text-left">
        <p className="text-[10px] md:text-xs tracking-[0.2em] text-neutral-500 mb-1">
          {product.category.toUpperCase()}
        </p>
        <h3 className="text-neutral-900 mb-1 text-xs md:text-base">
          {product.name}
        </h3>
        <p className="text-neutral-900 text-sm md:text-base">
          {product.price}
        </p>
      </div>
    </div>
  );
}