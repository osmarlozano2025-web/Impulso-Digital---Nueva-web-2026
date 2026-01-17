
import React from 'react';
import { Button } from '../components/Button';
import { ACTION_LINKS } from '../constants';
import { useBooking } from '../components/BookingModal';

export const AboutPage: React.FC = () => {
    const { openBooking } = useBooking();

    return (
        <div className="w-full bg-white">
            {/* Hero */}
            <section className="relative pt-24 pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 rounded-l-full blur-3xl"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h1 className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-none">
                            Impulsamos el <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Futuro Digital</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
                            Somos una agencia de innovación tecnológica nacida para cerrar la brecha entre las empresas tradicionales y la potencia de la Inteligencia Artificial.
                        </p>
                        <div className="flex gap-16 pt-8">
                            <div>
                                <p className="text-4xl font-black text-primary">2026</p>
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">Visión</p>
                            </div>
                            <div>
                                <p className="text-4xl font-black text-secondary">+50</p>
                                <p className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1">Proyectos</p>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                            alt="Team working"
                            className="rounded-3xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 border-8 border-white"
                        />
                        <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-in slide-in-from-bottom-5 delay-300">
                            <p className="text-slate-800 font-bold italic">"La IA no reemplazará a los humanos. Los humanos con IA reemplazarán a los que no la usen."</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-black text-slate-900 mb-6">Nuestros Pilares</h2>
                        <p className="text-lg text-slate-600">No somos solo desarrolladores, somos socios estratégicos comprometidos con tu crecimiento.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: 'Innovación Pragmática', desc: 'No usamos tecnología por moda. La aplicamos donde realmente genera retorno de inversión.', icon: 'lightbulb' },
                            { title: 'Transparencia Total', desc: 'Sin cajas negras. Te explicamos cada paso del proceso y cómo funcionan tus sistemas.', icon: 'visibility' },
                            { title: 'Velocidad de Ejecución', desc: 'El mercado no espera. Nuestros ciclos de desarrollo son ágiles para lanzar rápido.', icon: 'speed' }
                        ].map((val, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                                <div className="size-12 rounded-full bg-slate-100 text-slate-900 flex items-center justify-center mb-6">
                                    <span className="material-symbols-outlined">{val.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-4">{val.title}</h3>
                                <p className="text-slate-600">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Simple */}
            <section className="py-24 px-4 bg-white text-center">
                <h2 className="text-4xl font-black text-slate-900 mb-8">Hablemos de tu Proyecto</h2>
                <Button onClick={openBooking} variant="primary" className="px-10 py-5 text-lg">
                    Agendar una Llamada
                </Button>
            </section>
        </div>
    );
};
