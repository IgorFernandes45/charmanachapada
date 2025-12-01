import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart } from "lucide-react";
import React, { useState } from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-white mb-3 aspect-[3/4]">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <button 
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm p-1.5 md:p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart 
            size={16} 
            className={isFavorite ? "fill-red-500 text-red-500" : "text-neutral-700"} 
          />
        </button>
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
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