import { MapPin, Phone, Mail, Clock } from "lucide-react";
import React, { useState } from 'react';
export function Location() {
  return (
    <section id="localizacao" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] text-neutral-600 mb-3">VENHA NOS VISITAR</p>
          <h2 className="text-4xl md:text-5xl text-neutral-900 mb-4">
            Localização
          </h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Nosso atelier está de portas abertas para você conhecer de perto o trabalho artesanal
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mapa */}
          <div className="relative h-[400px] lg:h-[500px] bg-neutral-100 rounded-sm overflow-hidden">
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5097.133119626185!2d-47.515969659183305!3d-14.136432860572093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93457f7d9727192b%3A0xb73733498421fdc3!2sCHARME%20NA%20CHAPADA!5e0!3m2!1spt-BR!2sbr!4v1764934849965!5m2!1spt-BR!2sbr" 
           width="600" 
           height="450" 
           style={{ border: 0 }}
           allowFullScreen 
           loading="lazy" 
           referrerPolicy="no-referrer-when-downgrade"></iframe>
            <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm text-neutral-700">
                📍 Av. Ary Valadão Filho - Centro, Alto Paraíso de Goiás - GO, 73770-000
              </div>
            </div>
          </div>

          {/* Informações de Contato */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-neutral-900" size={20} />
                </div>
                <div>
                  <h3 className="text-neutral-900 mb-2">
                    Endereço
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Av. Ary Valadão Filho<br />
                    Centro - Alto Paraíso<br />
                    CEP: 73770-000
                  </p>
                  
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="text-neutral-900" size={20} />
                </div>
                <div>
                  <h3 className="text-neutral-900 mb-2">
                    Telefone
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    (62) 9968755-5542<br />
                    WhatsApp disponível
                  </p>
                  
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="text-neutral-900" size={20} />
                </div>
                <div>
                  <h3 className="text-neutral-900 mb-2">
                    E-mail
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    charmenachapada@icloud.com
                  </p>
                  
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-neutral-900" size={20} />
                </div>
                <div>
                  <h3 className="text-neutral-900 mb-2">
                    Horário de Atendimento
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    Segunda a Sexta: 14h às 21h<br />
                    Sábado e Domingo: 9h às 21h<br />
                    Quarta: Fechado
                  </p>
                  
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-neutral-200">
              <p className="text-neutral-600 text-sm leading-relaxed">
                <strong>Atendimento personalizado:</strong> Agende uma visita ao nosso atelier 
                para conhecer as peças de perto e receber orientações exclusivas sobre medidas e modelagem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
