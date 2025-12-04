import React, { useState } from "react";
import { ProductCard } from "./ProductCard";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string; // ✅ adicionamos descrição
  images: string[];
}

interface Collection {
  id: string;
  name: string;
  description: string;
  products: Product[];
}

interface CollectionSectionProps {
  collection: Collection;
  isEven: boolean;
}

export function CollectionSection({ collection, isEven }: CollectionSectionProps) {
  const productsToDisplay = collection.products || [];

  // 🔥 controla qual produto tem a foto expandida
  const [expandedId, setExpandedId] = useState<number | null>(null);

  // 🔥 controla qual produto tem a descrição expandida
  const [descriptionOpenId, setDescriptionOpenId] = useState<number | null>(null);

  return (
    <section className={`py-12 px-4 ${isEven ? "bg-white" : "bg-neutral-50"}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Título da coleção */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-4xl text-neutral-900 mb-2">
            {collection.name}
          </h3>
          <p className="text-neutral-700 max-w-xl mx-auto text-base md:text-lg leading-relaxed font-light tracking-wide font-[Inter]">
          {collection.description}
          </p>
        </div>

        {/* Grid de produtos */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {productsToDisplay.map((product) => (
            <ProductCard
              key={product.id}
              product={product}

              // ---- props para controlar expand e descrição ----
              expandedId={expandedId}
              setExpandedId={setExpandedId}

              descriptionOpenId={descriptionOpenId}
              setDescriptionOpenId={setDescriptionOpenId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
