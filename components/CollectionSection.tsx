import { ProductCard } from "./ProductCard";
// Removendo 'useState' e 'React' que não são usados neste componente
// import React, { useState } from 'react'; 
import React from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
}

interface Collection {
  id: string;
  name: string;
  description: string;
  // Alterei o tipo para incluir 'undefined' ou mantenha como 'Product[]' e adicione o fallback.
  // Vou manter como 'Product[]' e adicionar o fallback na lógica para não forçar a mudança em CatalogPage.
  products: Product[];
}

interface CollectionSectionProps {
  collection: Collection;
  isEven: boolean;
}

export function CollectionSection({ collection, isEven }: CollectionSectionProps) {
    // A CORREÇÃO DE SEGURANÇA: Usar um array vazio como fallback
    const productsToDisplay = collection.products || [];

  return (
    <section className={`py-12 px-4 ${isEven ? "bg-white" : "bg-neutral-50"}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-4xl text-neutral-900 mb-2">
            {collection.name}
          </h3>
          <p className="text-neutral-600 max-w-xl mx-auto text-sm md:text-base">
            {collection.description}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {/* Usando o array seguro 'productsToDisplay' */}
          {productsToDisplay.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}