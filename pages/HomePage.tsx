
import React from 'react';
import { Button } from '../components/Button';
import { ACTION_LINKS } from '../constants';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background-subtle py-16 lg:py-32">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 size-[600px] bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 size-[500px] bg-secondary/5 rounded-full blur-3xl"></div>
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Estrategia & IA Avanzada
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter">
                Evoluciona tu Negocio con <span className="text-primary">IA Estratégica</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                No instalamos herramientas, creamos ventajas competitivas. Transformamos tus procesos con inteligencia artificial diseñada para resultados medibles.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  href={ACTION_LINKS.CONSULTORIA_ESTRATEGICA} 
                  target="_blank" 
                  variant="secondary" 
                  className="px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-lg min-h-[56px] sm:min-h-[64px]"
                >
                  Agendar Consultoría Gratuita
                </Button>
                <Button 
                  href={ACTION_LINKS.VISITA_15_MIN} 
                  target="_blank" 
                  variant="outline" 
                  className="px-6 sm:px-8 py-4 sm:py-5 text-sm sm:text-lg min-h-[56px] sm:min-h-[64px]"
                >
                  Visita de 15 Minutos
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm font-medium text-slate-500 pt-4">
                <div className="flex -space-x-2 sm:-space-x-3">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/${i+10}/64/64`} className="size-8 sm:size-10 rounded-full border-2 border-white bg-slate-200" alt="Client" />
                  ))}
                </div>
                <p>Confían en nosotros <span className="text-slate-900 font-bold">50+ empresas</span></p>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0 px-4 sm:px-0">
              <div className="relative aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 border-4 sm:border-8 border-white">
                <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800" className="object-cover w-full h-full" alt="IA Concept" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-4 -left-0 sm:-bottom-6 sm:-left-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 sm:gap-4 animate-bounce">
                <div className="size-10 sm:size-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-xl sm:text-2xl">trending_up</span>
                </div>
                <div>
                  <p className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Eficiencia</p>
                  <p className="text-base sm:text-lg font-black text-slate-900">+45%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-white py-8 sm:py-12 border-y border-slate-50 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 flex flex-wrap justify-center gap-6 sm:gap-16 opacity-30 grayscale items-center">
          <span className="text-lg sm:text-2xl font-black">TECH-CORP</span>
          <span className="text-lg sm:text-2xl font-black">SOLUTIONS</span>
          <span className="text-lg sm:text-2xl font-black">INNOVATE</span>
          <span className="text-lg sm:text-2xl font-black">FUTURE-IA</span>
          <span className="text-lg sm:text-2xl font-black">NEXUS</span>
        </div>
      </div>

      {/* Services Highlight */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">Soluciones que Impulsan</h2>
            <p className="text-base sm:text-lg text-slate-500">Tecnología de punta aplicada a desafíos de negocio reales en el mercado actual.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="group p-6 sm:p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all duration-300">
              <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Consultoría Estratégica</h3>
              <p className="text-slate-600 leading-relaxed mb-6 sm:min-h-[80px]">Analizamos tu modelo de negocio para identificar dónde la IA generará el mayor ROI inmediato.</p>
              <Button href={ACTION_LINKS.CONSULTORIA_ESTRATEGICA} target="_blank" variant="outline" fullWidth>Saber más</Button>
            </div>

            <div className="group p-6 sm:p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-secondary/20 hover:bg-white hover:shadow-2xl transition-all duration-300">
              <div className="size-14 rounded-2xl bg-secondary/10 text-secondary flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Ecosistema de Datos</h3>
              <p className="text-slate-600 leading-relaxed mb-6 sm:min-h-[80px]">Centralizamos tu información dispersa en un cerebro inteligente que predice tendencias.</p>
              <Button href={ACTION_LINKS.DEMO_IA} target="_blank" variant="outline" fullWidth>Ver Demo</Button>
            </div>

            <div className="group p-6 sm:p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all duration-300">
              <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-3xl">code</span>
              </div>
              <h3 className="text-xl font-bold mb-4">Desarrollo Web & IA</h3>
              <p className="text-slate-600 leading-relaxed mb-6 sm:min-h-[80px]">Plataformas modernas con integraciones nativas de modelos de lenguaje avanzados.</p>
              <Button href={ACTION_LINKS.CONSULTORIA_ESTRATEGICA} target="_blank" variant="outline" fullWidth>Proyectos</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - CORRECCIÓN CRÍTICA AQUÍ */}
      <section className="py-20 sm:py-24 px-4 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg]"></div>
        <div className="mx-auto max-w-4xl text-center relative z-10 space-y-6 sm:space-y-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">¿Listo para dar el salto tecnológico?</h2>
          <p className="text-base sm:text-lg opacity-80 max-w-2xl mx-auto">Únete a las empresas que ya están ahorrando miles de horas de trabajo manual mediante procesos automatizados con IA.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Se forzó !text-primary para que el texto sea azul sobre el fondo blanco del botón */}
            <Button 
              href={ACTION_LINKS.VISITA_15_MIN} 
              target="_blank" 
              variant="outline" 
              className="px-10 py-5 text-lg sm:text-xl bg-white !text-primary hover:bg-slate-50 border-none shadow-xl min-h-[64px]"
            >
              Agendar Visita 15 Min
            </Button>
            <Button 
              href={ACTION_LINKS.WHATSAPP_SUPPORT} 
              target="_blank" 
              className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-10 py-5 text-lg sm:text-xl shadow-none min-h-[64px]"
            >
              Hablar por WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
