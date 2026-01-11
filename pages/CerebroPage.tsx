
import React from 'react';
import { Button } from '../components/Button';
import { ACTION_LINKS } from '../constants';

export const CerebroPage: React.FC = () => {
  return (
    <div className="w-full">
      <section className="bg-slate-900 text-white py-24 lg:py-32 relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-5xl lg:text-7xl font-black mb-8 tracking-tighter">
            Cerebro <span className="text-primary">IA Omnicanal</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
            La inteligencia que entiende, siente y conecta con tus clientes 24/7 en cualquier plataforma.
          </p>
          <Button href={ACTION_LINKS.DEMO_IA} target="_blank" variant="secondary" className="px-12 py-5 text-xl">Solicitar Demo en Vivo</Button>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-black text-slate-900">Empatía Digital Escalamble</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Nuestro "Cerebro IA" no es un bot de respuestas fijas. Es un modelo entrenado específicamente con los datos de tu empresa para ofrecer soluciones personalizadas con detección de sentimientos.
            </p>
            <ul className="space-y-4">
              {[
                { icon: 'chat', title: 'Multicanalidad', desc: 'Atiende en Instagram, WhatsApp y Web al mismo tiempo.' },
                { icon: 'favorite', title: 'Detección de Tono', desc: 'Reconoce si un cliente está molesto o feliz y adapta la respuesta.' },
                { icon: 'sync', title: 'Sincronización de CRM', desc: 'Guarda cada interacción automáticamente en tu base de datos.' }
              ].map((item, i) => (
                <li key={i} className="flex gap-4">
                  <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
             <img src="https://picsum.photos/seed/brain/800/800" className="rounded-3xl shadow-3xl grayscale hover:grayscale-0 transition-all duration-700" alt="Brain Concept" />
          </div>
        </div>
      </section>
    </div>
  );
};
