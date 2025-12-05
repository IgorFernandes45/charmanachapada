import { ArrowLeft } from "lucide-react";
import React, { useState } from "react";
import { CollectionSection } from "./CollectionSection";

interface CatalogPageProps {
  onBack: () => void;
}

const collections = [
  {
    id: "Vestidos",
    name: "Vestidos",
    description: "Curadoria de peças premium com caimento perfeito.",
    products: [
      {
        id: 1,
        name: "Vestido Corda",
        category: "Vestido",
        price: "R$ 998,00",
        description: "**Detalhes do Produto:**\n- Comprimento: Longo\n- Decote: Reto com detalhe franzido\n- Alças: Finas\n- Modelagem: Camadas com caimento fluido\n- Tecido: Leve e confortável\n- Estilo: Casual chic / Boho",
        images: [ "/images/image00015.jpg","/images/Page 5.webp"]
      },
      {
        id: 2,
        name: "Vestido Fluido Bordado",
        category: "Vestido",
        price: "R$ 617,00",
        description: "Vestido fluido bordado, ideal para festas e ocasiões formais.",
        images: ["/images/image00029.jpg", "/images/image00044.jpg"]
      },
      {
        id: 3,
        name: "Vestido Longo Bordado",
        category: "Vestido",
        price: "R$ 924,00",
        description: "Vestido longo bordado, sofisticado e confortável.",
        images: [ "/images/image00054.webp" , "/images/image00055.webp"]
      },
      {
        id: 4,
        name: "Vestido Peito Renda",
        category: "Vestidos",
        price: "R$ 533,00",
        description: "Vestido com detalhe em renda no peito, perfeito para eventos casuais.",
        images: ["/images/Page 13.webp", "/images/image00060.jpg"]
      },
      {
        id: 5,
        name: "Vestido Fluido Helora",
        category: "Vestidos",
        price: "R$ 1.077,00",
        description: "Vestido fluido com caimento leve e sofisticado.",
        images: ["/images/Page 29.webp", "/images/image00130.jpg", "/images/Page 31.webp"]
      },
      {
        id: 6,
        name: "Vestido Estampado Trail Of",
        category: "Vestido",
        price: "R$ 977,00",
        description: "Vestido estampado com estilo moderno e descontraído.",
        images: ["/images/Page 26.webp","/images/Page 27.webp", "/images/Page 28.webp"]
      },
      {
        id: 7,
        name: "Vestido Babado",
        category: "Vestidos",
        price: "R$ 779,90",
        description: "Vestido com babados delicados, ideal para ocasiões festivas.",
        images: ["/images/Page 32.webp", "/images/Page 33.webp", "/images/Page 34.webp"]
      },
      {
        id: 8,
        name: "Vestido Franja",
        category: "Vestidos",
        price: "R$ 972,00",
        description: "Vestido com franjas elegantes, perfeito para festas.",
        images: ["/images/image00167.jpg", "/images/Page 36.webp"]
      },
      {
        id: 9,
        name: "Vestido Novos Recomeços",
        category: "Vestido",
        price: "R$ 1.204,00",
        description: "Vestido vibrante para novos começos e momentos especiais.",
        images: ["/images/Page 41.webp", "/images/Page 42.webp", "/images/Page 43.webp"]
      },
      {
        id: 10,
        name: "Vestido Longo Oceano",
        category: "Vestidos",
        price: "R$ 1.214,00",
        description: "Vestido longo inspirado no oceano, elegante e sofisticado.",
        images: ["/images/Page 44.webp", "/images/image00192.jpg", "/images/Page 46.webp"]
      },
      {
        id: 24,
        name: "Vestido Classic Shell",
        category: "Vestidos",
        price: "R$ 302,00",
        description: "Vestido longo inspirado no oceano, elegante e sofisticado.",
        images: ["/images/image00228.jpeg", "/images/image00229.jpeg", "/images/image00235.jpeg"]
      },
      {
        id: 25,
        name: "Vestido Estampado Sweet Gar",
        category: "Vestidos",
        price: "R$ 921,00",
        description: "Vestido longo inspirado no oceano, elegante e sofisticado.",
        images: ["/images/image00003.jpg", "/images/image00009.jpg"]
      },
      {
        id: 26,
        name: "Vestido Marion",
        category: "Vestidos",
        price: "R$ 298,00",
        description: "Vestido longo inspirado no oceano, elegante e sofisticado.",
        images: ["/images/image00239.jpeg", "/images/Page 54.webp"]
      },
      {
        id: 27,
        name: "Vestido Solar",
        category: "Vestidos",
        price: "R$ 427,90",
        description: "Vestido longo inspirado no oceano, elegante e sofisticado.",
        images: [ "/images/Page 61.webp", "/images/Page 62.webp", "/images/Page 63.webp", "/images/Page 64.webp"]
      }, 
      {
        id: 28,
        name: "Vestido Camadas Mare",
        category: "Vestidos",
        price: "R$ 629,00",
        description: "Vestido longo inspirado no oceano, elegante e sofisticado.",
        images: [ "/images/Page 65.webp", "/images/Page 66.webp"]
      }
    ]
  },

  {
    id: "Calças e Cropped",
    name: "Calças e Cropped",
    description: "Peças clássicas que transcendem tendências",
    products: [
      {
        id: 18,
        name: "Calça Patalona Verano",
        category: "Calça",
        price: "R$ 899,00",
        description: "Calça pantalona confortável e elegante para qualquer ocasião.",
        images: ["/images/image00069.jpg", "/images/image00074.jpg"]
      },
      {
        id: 19,
        name: "Cropped Verano",
        category: "Cropped",
        price: "R$ 327,00",
        description: "Cropped moderno, ideal para looks casuais e despojados.",
        images: ["/images/Page 16.webp", "/images/Page 19.webp", "/images/Page 20.webp"]
      }
    ]
  },

  {
    id: "Conjuntos e Macacão",
    name: "Conjuntos e Macacão",
    description: "Para ocasiões especiais e momentos inesquecíveis",
    products: [
      {
        id: 20,
        name: "Conjunto Sea La Vie",
        category: "Conjunto",
        price: "R$ 1.045,00",
        description: "Conjunto elegante para eventos sofisticados.",
        images: ["/images/image00082.jpg", "/images/image00092.jpg", "/images/image00096.jpg"]
      },
      {
        id: 21,
        name: "Macacão Bordado",
        category: "Macacão",
        price: "R$ 842,00",
        description: "Macacão bordado, ideal para ocasiões formais.",
        images: ["/images/Page 38.webp", "/images/Page 39.webp", "/images/Page 40.webp"]
      },
      {
        id: 22,
        name: "Conjunto Karina",
        category: "Conjunto",
        price: "R$ 290,00",
        description: "Conjunto casual e confortável, perfeito para o dia a dia.",
        images: ["/images/Page 67.webp", "/images/Page 68.webp"]
      },
      {
        id: 23,
        name: "Conjunto Luisa",
        category: "Conjunto",
        price: "R$ 330,00",
        description: "Conjunto sofisticado em cores vibrantes para momentos especiais.",
        images: ["/images/Page 69.webp", "/images/Page 70.webp"]
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
            Peças de alto padrão e curadoria exclusiva.
           Cada item é escolhido com cuidado, pensando em modelagem impecável, acabamento perfeito e estilo que 
           valoriza sua essência.
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
