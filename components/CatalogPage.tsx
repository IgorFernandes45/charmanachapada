import { ArrowLeft } from "lucide-react";
import React , { useState } from "react";
import { CollectionSection } from "./CollectionSection";

interface CatalogPageProps {
  onBack: () => void;
}

const collections = [
  {
    id: "inverno-2025",
    name: "Inverno 2025",
    description: "Peças aconchegantes e sofisticadas para os dias frios",
    products: [
      {
        id: 1,
        name: "Casaco Oversized",
        category: "Casacos",
        price: "R$ 1.599,00",
        image: "https://images.unsplash.com/photo-1762605135376-ae5af70a5628?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGNvYXQlMjBsdXh1cnl8ZW58MXx8fHwxNzY0NjE0Mzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 2,
        name: "Blazer Alfaiataria",
        category: "Blazers",
        price: "R$ 1.299,00",
        image: "https://images.unsplash.com/photo-1604914509335-9001944f23d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJsYXplciUyMGZhc2hpb258ZW58MXx8fHwxNzY0NjE0MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 3,
        name: "Calça Pantalona",
        category: "Calças",
        price: "R$ 679,00",
        image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHRyb3VzZXJzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjQ2MTQzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 4,
        name: "Vestido Midi Lã",
        category: "Vestidos",
        price: "R$ 899,00",
        image: "https://images.unsplash.com/photo-1756483510840-b0dda5f0dd0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZHJlc3MlMjB3b21lbnxlbnwxfHx8fDE3NjQ2MTQzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
        image: "https://images.unsplash.com/photo-1756483510840-b0dda5f0dd0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZHJlc3MlMjB3b21lbnxlbnwxfHx8fDE3NjQ2MTQzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 6,
        name: "Blusa de Seda",
        category: "Blusas",
        price: "R$ 549,00",
        image: "https://images.unsplash.com/photo-1761117228880-df2425bd70da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHNpbGslMjBibG91c2V8ZW58MXx8fHwxNzY0NjE0MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 7,
        name: "Calça Alfaiataria",
        category: "Calças",
        price: "R$ 679,00",
        image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHRyb3VzZXJzJTIwZmFzaGlvbnxlbnwxfHx8fDE3NjQ2MTQzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 8,
        name: "Blazer Clássico",
        category: "Blazers",
        price: "R$ 1.199,00",
        image: "https://images.unsplash.com/photo-1604914509335-9001944f23d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGJsYXplciUyMGZhc2hpb258ZW58MXx8fHwxNzY0NjE0MzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
        image: "https://images.unsplash.com/photo-1562182856-e39faab686d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGV2ZW5pbmclMjBkcmVzc3xlbnwxfHx8fDE3NjQ2MTQzNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 10,
        name: "Conjunto Sofisticado",
        category: "Conjuntos",
        price: "R$ 1.499,00",
        image: "https://images.unsplash.com/photo-1763628212781-7d52844cf358?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGFjY2Vzc29yaWVzJTIwbHV4dXJ5fGVufDF8fHx8MTc2NDYxNDM3OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 11,
        name: "Vestido Cocktail",
        category: "Vestidos",
        price: "R$ 1.299,00",
        image: "https://images.unsplash.com/photo-1756483510840-b0dda5f0dd0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZHJlc3MlMjB3b21lbnxlbnwxfHx8fDE3NjQ2MTQzNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      },
      {
        id: 12,
        name: "Casaco de Luxo",
        category: "Casacos",
        price: "R$ 1.799,00",
        image: "https://images.unsplash.com/photo-1762605135376-ae5af70a5628?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMGNvYXQlMjBsdXh1cnl8ZW58MXx8fHwxNzY0NjE0Mzc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
            <div className="w-8 h-8 md:w-10 md:h-10 bg-neutral-200 rounded-full flex items-center justify-center">
              <span className="text-neutral-500 text-[10px] md:text-xs">LOGO</span>
            </div>
            <h1 className="tracking-[0.2em] text-neutral-900 text-xs md:text-base">CHARME NA CHAPADA</h1>
          </div>
          
          <div className="w-16 md:w-24" /> {/* Spacer for centering */}
        </div>
      </header>

      {/* Hero do Catálogo */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6 bg-neutral-50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] md:text-sm tracking-[0.3em] text-neutral-600 mb-2 md:mb-3">PEÇAS ARTESANAIS</p>
          <h2 className="text-3xl md:text-6xl text-neutral-900 mb-4 md:mb-6">
            Nosso Catálogo
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-8 md:mb-12 text-sm md:text-base px-4">
            Cada peça é cuidadosamente confeccionada à mão em nosso atelier, com tecidos nobres e acabamento impecável
          </p>

          {/* Filtros de Coleção */}
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
            {collections.map((collection) => (
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