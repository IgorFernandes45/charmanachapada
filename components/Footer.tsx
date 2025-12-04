import { Instagram, Facebook, Mail } from "lucide-react";
import React, { useState } from 'react';
export function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-neutral-700 rounded-full flex items-center justify-center">
                <img
                src="/images/Page 1.webp"
                alt="Logo"
                className="w-full h-full object-cover"
              />
              </div>
              <h3 className="tracking-[0.2em]">CHARME NA CHAPADA</h3>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Moda artesanal feita à mão com elegância e dedicação.
            </p>
          </div>
          
          <div>
            <h4 className="tracking-[0.2em] text-sm mb-6">ATENDIMENTO</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://wa.me/5562996875542" target="_blank" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Contato
                </a>
              </li>
             
              <li>
                <a href="mailto:charmenachapada@icloud.com" target="_blank" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 pt-8 text-center">
          <p className="text-neutral-500 text-sm">
            © 2025 Charme na Chapada. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}