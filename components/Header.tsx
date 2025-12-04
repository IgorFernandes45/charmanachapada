import { ShoppingBag, PhoneCall, User , Instagram } from "lucide-react";
import React from 'react';

interface HeaderProps {
  onNavigateToCatalog?: () => void;
}

export function Header({ onNavigateToCatalog }: HeaderProps) {

  // 🔥 MENSAGEM PADRÃO PARA O WHATSAPP
  const message = encodeURIComponent(
    "Olá! Vim pelo site e gostaria de mais informações."
  );

  // 🔥 LINK DO WHATSAPP JÁ PREPARADO
  const whatsappLink = `https://wa.me/5561999263702?text=${message}`;

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-neutral-200 rounded-full flex items-center justify-center">
              <img
                src="/images/Page 1.webp"
                alt="Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <h1 className="tracking-[0.15em] md:tracking-[0.2em] text-neutral-900 text-xs md:text-base">
              CHARME NA CHAPADA
            </h1>
          </div>

          {/* Menu */}
          <nav className="hidden md:flex gap-8">
            <a href="#novidades" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm tracking-wider">
              NOVIDADES
            </a>

            <button
              onClick={onNavigateToCatalog}
              className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm tracking-wider"
            >
              CATÁLOGO
            </button>

            <a href="#sobre" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm tracking-wider">
              SOBRE
            </a>

            <a href="#localizacao" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm tracking-wider">
              CONTATO
            </a>
          </nav>
        </div>

        {/* Ícones à direita */}
        <div className="flex items-center gap-4 md:gap-6">

          {/* WHATSAPP DIRETO */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <PhoneCall size={18} className="md:w-5 md:h-5" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/charmenachapada?igsh=MTB4NjF1ajk1NWczag=="
            target="_blank"
            className="text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <Instagram size={20} className="md:w-5 md:h-5" />
          </a>

        </div>
      </div>
    </header>
  );
}
