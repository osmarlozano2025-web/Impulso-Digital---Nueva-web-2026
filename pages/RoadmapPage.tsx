
import React from 'react';
import { Button } from '../components/Button';
import { ACTION_LINKS } from '../constants';
import { useBooking } from '../components/BookingModal';

export const RoadmapPage: React.FC = () => {
  const { openBooking } = useBooking();

  const steps = [
    {
      phase: "Fase 01",
      title: "Diagnóstico 360",
      desc: "Auditamos tus procesos actuales para encontrar los 'cuellos de botella' donde la IA tendrá más impacto.",
      icon: "biotech"
    },
    {
      phase: "Fase 02",
      title: "Estructura Base",
      desc: "Creamos los cimientos digitales y unificamos tus fuentes de datos para alimentar a los modelos de IA.",
      icon: "architecture"
    },
    {
      phase: "Fase 03",
      title: "Activación de Cerebro",
      desc: "Desplegamos el Cerebro IA en tus canales de contacto y automatizamos el flujo de atención al cliente.",
      icon: "smart_toy"
    },
    {
      phase: "Fase 04",
      title: "Escalado Predictivo",
      desc: "Usamos los datos generados para predecir ventas y optimizar costos de manera proactiva.",
      icon: "trending_up"
    }
  ];

  return (
    <div className="bg-background-subtle min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-black text-slate-900 mb-6">Tu Escalera de Valor</h1>
          <p className="text-lg text-slate-600">El camino probado para convertir una empresa tradicional en una potencia impulsada por inteligencia artificial.</p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>

          <div className="space-y-12 lg:space-y-32">
            {steps.map((step, i) => (
              <div key={i} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-0 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <div className={`glass-card p-10 rounded-3xl border border-slate-100 shadow-xl transition-transform hover:-translate-y-2 duration-300 ${i % 2 === 0 ? 'lg:mr-16' : 'lg:ml-16'}`}>
                    <span className="text-xs font-black uppercase text-secondary tracking-widest mb-2 block">{step.phase}</span>
                    <h3 className="text-2xl font-bold mb-4 text-slate-900">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>

                <div className="relative z-10 size-16 rounded-2xl bg-primary text-white flex items-center justify-center shadow-xl shadow-primary/30">
                  <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                </div>

                <div className="flex-1 hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <Button onClick={openBooking} variant="primary" className="px-16 py-6 text-xl">
            Inicia tu Ascenso Hoy
          </Button>
        </div>
      </div>
    </div>
  );
};
