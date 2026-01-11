
import React from 'react';
import { CONTACT_INFO, ACTION_LINKS } from '../constants';
import { Button } from '../components/Button';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl font-black text-slate-900 tracking-tighter">Hablemos de tu <span className="text-primary">Impulso</span></h1>
              <p className="text-lg text-slate-600">Estamos en Ituzaingó, Buenos Aires, listos para transformar tu negocio.</p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Teléfono</h4>
                  <p className="text-slate-600 text-lg">{CONTACT_INFO.PHONE}</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="size-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl">location_on</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Dirección</h4>
                  <p className="text-slate-600 text-lg">{CONTACT_INFO.LOCATION}</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Email</h4>
                  <p className="text-slate-600 text-lg">{CONTACT_INFO.EMAIL}</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-slate-50 rounded-3xl space-y-4">
              <h4 className="font-bold text-xl">¿Prefieres una reunión rápida?</h4>
              <p className="text-slate-500">Agenda una visita de 15 minutos en nuestro calendario directamente.</p>
              <Button href={ACTION_LINKS.VISITA_15_MIN} target="_blank" fullWidth variant="secondary">Agendar 15 Minutos</Button>
            </div>
          </div>

          <div className="glass-card p-10 rounded-3xl border border-slate-100 shadow-2xl space-y-8">
            <h3 className="text-2xl font-bold">Envíanos un mensaje</h3>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Mensaje enviado con éxito"); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Nombre</label>
                  <input type="text" className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary" placeholder="Tu nombre" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                  <input type="email" className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary" placeholder="tu@empresa.com" required />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Desafío de tu negocio</label>
                <textarea className="w-full bg-slate-100 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary" rows={4} placeholder="Cuéntanos brevemente qué buscas resolver con IA..." required></textarea>
              </div>
              <Button type="submit" fullWidth className="py-4 text-lg">Enviar Solicitud</Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
