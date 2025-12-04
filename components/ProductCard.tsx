import React, { useState, useEffect } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  images: string[];
}

interface ProductCardProps {
  product: Product;
  expandedId: number | null;
  setExpandedId: React.Dispatch<React.SetStateAction<number | null>>;
  descriptionOpenId: number | null;
  setDescriptionOpenId: React.Dispatch<React.SetStateAction<number | null>>;
}

export function ProductCard({
  product,
  expandedId,
  setExpandedId,
  descriptionOpenId,
  setDescriptionOpenId,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = product.images?.length ?? 0;
  const src = total > 0 ? product.images[currentIndex] : "/images/placeholder.webp";

  const isExpanded = expandedId === product.id;

  // --- 🔥 SEMPRE QUE O CARD É EXPANDIDO, ZERA SLIDER ---
  useEffect(() => {
    if (isExpanded) setCurrentIndex(0);
  }, [isExpanded]);

  // --- PRELOAD ---
  useEffect(() => {
    if (total <= 1) return;
    const nextIndex = (currentIndex + 1) % total;
    const img = new Image();
    img.src = product.images[nextIndex];
  }, [currentIndex, total, product.images]);

  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (total > 1)
      setCurrentIndex((p) => (p === total - 1 ? 0 : p + 1));
  };

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (total > 1)
      setCurrentIndex((p) => (p === 0 ? total - 1 : p - 1));
  };

  const toggleExpand = () => {
    setExpandedId(isExpanded ? null : product.id);
  };

  // ======== BOTÃO DE WHATSAPP ========
  const message = encodeURIComponent(
    `Olá! Gostaria de saber mais sobre o produto:\n\n🛍️ *${product.name}*\n💰 *${product.price}*\n\nPode me enviar mais informações?`
  );

  const whatsappLink = `https://wa.me/5561999263702?text=${message}`;

  // --- 🔥 SAIBA MAIS: FECHA EXPANDIDO PARA NÃO BUGAR ---
  const handleSaibaMais = (e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedId(null); // <<< ESSA LINHA RESOLVE O BUG
  };

  return (
    <div className="group cursor-pointer">
      <div
          className={`relative overflow-hidden bg-white mb-3 rounded-xl transition-all duration-300 ${
    isExpanded ? "scale-[1.15] z-50 shadow-2xl" : "scale-100"
  }`}
        onClick={toggleExpand}
        style={{ aspectRatio: "3/4" }}
      >
        <ImageWithFallback
          src={src}
          alt={product.name}
          className="w-full h-full object-cover transition-opacity duration-150"
        />

        {/* Coração */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-2 right-2 bg-white/90 p-2 rounded-full z-30"
        >
          <Heart
            size={16}
            className={isFavorite ? "fill-red-500 text-red-500" : "text-neutral-700"}
          />
        </button>

        {/* Setas */}
        {total > 1 && !isExpanded && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow z-30"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow z-30"
            >
              <ChevronRight size={18} />
            </button>
          </>
        )}

        {/* Indicadores */}
        {!isExpanded && total > 1 && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-3 flex gap-2 z-30">
            {product.images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(i);
                }}
                className={`w-2 h-2 rounded-full transition ${
                  i === currentIndex
                    ? "bg-neutral-900"
                    : "bg-white/70 border border-neutral-200"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Texto */}
      <div className="text-center md:text-left">
        <p className="text-[10px] md:text-xs text-neutral-500 mb-1 tracking-[0.2em]">
          {product.category.toUpperCase()}
        </p>
        <h3 className="text-neutral-900 mb-1 text-xs md:text-base">
          {product.name}
        </h3>
        <p className="text-neutral-900 text-sm md:text-base">{product.price}</p>

        {/* ----- BOTÃO SAIBA MAIS ----- */}
        <a
          href={whatsappLink}
          target="_blank"
          onClick={handleSaibaMais}
          className="
            block w-full mt-3 py-2 rounded-full text-center text-xs md:text-sm
            border border-neutral-900
            hover:bg-neutral-900 hover:text-white
            transition-all duration-300 tracking-wider
          "
        >
          SAIBA MAIS
        </a>
      </div>
    </div>
  );
}
