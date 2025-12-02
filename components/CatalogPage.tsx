import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { CollectionSection } from "./CollectionSection";

interface CatalogPageProps {
  onBack: () => void;
}

const collections = [
  {
    id: "inverno-2025",
    name: "Ano Novo 2025",
    description: "Peças aconchegantes e sofisticadas para os dias frios",
    products: [
      {
        id: 1,
        name: "Casaco Oversized",
        category: "Casacos",
        price: "R$ 1.599,00",
        images: [
          "/images/Page 5.webp" , "/images/Page 6.webp" 
        ]
      },
      {
        id: 2,
        name: "Blazer Alfaiataria",
        category: "Blazers",
        price: "R$ 1.299,00",
        images: [
          "/images/Page 7.webp" , "/images/Page 8.webp" , "/images/Page 9.webp"
        ]
      },
      {
        id: 3,
        name: "Calça Pantalona",
        category: "Calças",
        price: "R$ 679,00",
        images: [
          "/images/Page 10.webp" , "/images/Page 11.webp" , "/images/Page 12.webp"
        ]
      },
      {
        id: 4,
        name: "Vestido Midi Lã",
        category: "Vestidos",
        price: "R$ 899,00",
        images: [
          "/images/Page 13.webp" , "/images/Page 14.webp" , "/images/Page 15.webp"
        ]
      }
    ]
  },

  {
    id: "elegancia-atemporal",
    name: "Elegância Atemporal",
    description: "Peças clássicas que transcendem tendências",
    products: [
      {
        id: 5,
        name: "Vestido de Seda Midi",
        category: "Vestidos",
        price: "R$ 899,00",
        images: [
          "/images/Page 16.webp" , "/images/Page 17.webp" , "/images/Page 18.webp"
        ]
      },
      {
        id: 6,
        name: "Blusa de Seda",
        category: "Blusas",
        price: "R$ 549,00",
        images: [
          "/images/Page 19.webp" , "/images/Page 20.webp" 
        ]
      },
      {
        id: 7,
        name: "Calça Alfaiataria",
        category: "Calças",
        price: "R$ 679,00",
        images: [
          "/images/Page 21.webp" , "/images/Page 22.webp" , "/images/Page 23.webp","/images/Page 24.webp","/images/Page 25.webp"
        ]
      },
      {
        id: 8,
        name: "Blazer Clássico",
        category: "Blazers",
        price: "R$ 1.199,00",
        images: [
          "/images/Page 26.webp" , "/images/Page 27.webp" , "/images/Page 28.webp"
        ]
      }
    ]
  },

  {
    id: "festa-luxo",
    name: "Festa & Luxo",
    description: "Para ocasiões especiais e momentos inesquecíveis",
    products: [
      {
        id: 9,
        name: "Vestido de Festa Longo",
        category: "Vestidos",
        price: "R$ 1.899,00",
        images: [
          "/images/Page 29.webp" , "/images/Page 30.webp" , "/images/Page 31.webp"
        ]
      },
      {
        id: 10,
        name: "Conjunto Sofisticado",
        category: "Conjuntos",
        price: "R$ 1.499,00",
        images: [
          "/images/Page 32.webp" , "/images/Page 33.webp" , "/images/Page 34.webp"
        ]
      },
      {
        id: 11,
        name: "Vestido Cocktail",
        category: "Vestidos",
        price: "R$ 1.299,00",
        images: [
          "/images/Page 35.webp" , "/images/Page 36.webp" , "/images/Page 37.webp"
        ]
      },
      {
        id: 12,
        name: "Casaco de Luxo",
        category: "Casacos",
        price: "R$ 1.799,00",
        images: [
          "/images/Page 38.webp" , "/images/Page 39.webp" , "/images/Page 40.webp"
        ]
      },
      {
        id: 13,
        name: "Casaco de Linho",
        category: "Casacos",
        price: "R$ 1.799,00",
        images: [
          "/images/Page 41.webp" , "/images/Page 42.webp" , "/images/Page 43.webp"
        ]
      },
      {
        id: 14,
        name: "Casaco",
        category: "Casacos",
        price: "R$ 1.799,00",
        images: [
          "/images/Page 44.webp" , "/images/Page 45.webp" , "/images/Page 46.webp"
        ]
      },
      {
        id: 15,
        name: "Casaco de Luxo",
        category: "Casacos",
        price: "R$ 1.799,00",
        images: [
          "/images/Page 47.webp" , "/images/Page 48.webp" , "/images/Page 49.webp"
        ]
      },
      {
        id: 16,
        name: "Casaco de Luxo",
        category: "Casacos",
        price: "R$ 1.799,00",
        images: [
          "/images/Page 50.webp" , "/images/Page 51.webp" 
        ]
      },
      {
        id: 17,
        name: "Casaco de Luxo",
        category: "Casacos",
        price: "R$ 1.799,00",
        images: [
          "/images/Page 52.webp" , "/images/Page 53.webp" , "/images/Page 54.webp" 
        ]
      },
      {
        id: 18,
        name: "Casaco de Luxo",
        category: "Casacos",
        price: "R$ 1.799,00",
        images: [
          "/images/Page 55.webp" , "/images/Page 56.webp" , "/images/Page 57.webp" , "/images/Page 58.webp" 
        ]
      }, 
      {
        id: 19,
        name: "Casaco de Luxo",
        category: "Casacos",
        price: "R$ 1.799,00",
        images: [
          "/images/Page 59.webp" , "/images/Page 60.webp" , "/images/Page 61.webp" , "/images/Page 62.webp" , "/images/Page 63.webp" , "/images/Page 64.webp" 
        ]
      },{
        id: 20,
        name: "Casaco de Luxo",
        category: "Casacos",
        price: "R$ 1.799,00",
        images: [
          "/images/Page 65.webp" , "/images/Page 66.webp" 
        ]
      },
      {
        id: 21,
        name: "Casaco de Luxo",
        category: "Casacos",
        price: "R$ 1.799,00",
        images: [
          "/images/Page 67.webp" , "/images/Page 68.webp" 
        ]
      },
      {
        id: 22,
        name: "Casaco de Luxo",
        category: "Casacos",
        price: "R$ 1.799,00",
        images: [
          "/images/Page 69.webp" , "/images/Page 70.webp" 
        ]
      }

    ]
  }
];

export function CatalogPage({ onBack }: CatalogPageProps) {
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);

  const filteredCollections = selectedCollection
    ? collections.filter(c => c.id === selectedCollection)
    : collections;

  return (
    <div className="min-h-screen bg-white">
      {/* Header do Catálogo */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft size={18} />
            <span className="text-xs md:text-sm tracking-wider">VOLTAR</span>
          </button>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="W-8 h-8 md:w-10 md:h-10 bg-neutral-200 rounded-full flex items-center justify-center">
              <img
                src="/images/Page 1.webp"
                alt="Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="tracking-[0.2em] text-neutral-900 text-xs md:text-base">
              CHARME NA CHAPADA
            </h1>
          </div>

          <div className="w-16 md:w-24" />
        </div>
      </header>

      {/* Hero */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] md:text-sm tracking-[0.3em] text-neutral-600 mb-2 md:mb-3">
            PEÇAS ARTESANAIS
          </p>
          <h2 className="text-3xl md:text-6xl text-neutral-900 mb-4 md:mb-6">
            Nosso Catálogo
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base px-4">
            Cada peça é cuidadosamente confeccionada à mão em nosso atelier, com tecidos nobres e acabamento impecável
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            <button
              onClick={() => setSelectedCollection(null)}
              className={`px-4 md:px-6 py-2 transition-all tracking-wider text-xs md:text-sm ${
                selectedCollection === null
                  ? "bg-neutral-900 text-white"
                  : "bg-white text-neutral-600 hover:bg-neutral-100"
              }`}
            >
              TODAS
            </button>

            {collections.map(collection => (
              <button
                key={collection.id}
                onClick={() => setSelectedCollection(collection.id)}
                className={`px-4 md:px-6 py-2 transition-all tracking-wider text-xs md:text-sm ${
                  selectedCollection === collection.id
                    ? "bg-neutral-900 text-white"
                    : "bg-white text-neutral-600 hover:bg-neutral-100"
                }`}
              >
                {collection.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Coleções */}
      <div className="pb-20">
        {filteredCollections.map((collection, index) => (
          <CollectionSection
            key={collection.id}
            collection={collection}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
