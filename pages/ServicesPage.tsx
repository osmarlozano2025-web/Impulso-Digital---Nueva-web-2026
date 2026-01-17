
import React from 'react';
import { Button } from '../components/Button';
import { ACTION_LINKS } from '../constants';
import { useBooking } from '../components/BookingModal';
import { AIInsights } from '../components/AIInsights';

export const ServicesPage: React.FC = () => {
    const { openBooking } = useBooking();

    const services = [
        {
            icon: 'psychology',
            title: 'Consultoría Estratégica en IA',
            description: 'Auditamos tu negocio para identificar oportunidades de alto impacto. No solo te decimos qué hacer, diseñamos la hoja de ruta para que suceda.',
            features: ['Auditoría de Procesos', 'Roadmap de Implementación', 'Análisis de ROI']
        },
        {
            icon: 'code',
            title: 'Desarrollo Web & Apps Inteligentes',
            description: 'Creamos plataformas digitales modernas que integran IA desde el núcleo. Interfaces premium con funcionalidades avanzadas.',
            features: ['Webs React/Next.js', 'Integración de API Gemini/OpenAI', 'Diseño UX/UI de Alto Nivel']
        },
        {
            icon: 'smart_toy',
            title: 'Chatbots & Asistentes Virtuales',
            description: 'Implementamos "Cerebros Digitales" entrenados con tu información empresarial para atender clientes 24/7 con recibir consultas.',
            features: ['Atención Omnicanal', 'Detección de Sentimientos', 'Agendamiento Automático']
        },
        {
            icon: 'rocket_launch',
            title: 'Automatización de Procesos',
            description: 'Elimina tareas repetitivas. Conectamos tus herramientas (CRM, Email, Sheets) para que trabajen solas en piloto automático.',
            features: ['Zapier/Make', 'Automatización de Marketing', 'Reportes Automáticos']
        },
        {
            icon: 'query_stats',
            title: 'Analítica Predictiva',
            description: 'Deja de mirar por el retrovisor. Usamos tus datos históricos para predecir tendencias de ventas y comportamiento de clientes.',
            features: ['Dashboard de Datos', 'Predicción de Demanda', 'Scoring de Clientes']
        },
        {
            icon: 'school',
            title: 'Capacitación Corporativa',
            description: 'Preparamos a tu equipo para la era de la IA. Talleres prácticos para que tus empleados adopten estas herramientas en su día a día.',
            features: ['Workshops In-Company', 'Prompt Engineering', 'Adopción Digital']
        }
    ];

    return (
        <div className="w-full bg-background-light">
            {/* Header */}
            <section className="relative py-20 lg:py-32 overflow-hidden">
                <div className="absolute top-0 left-1/2 -ml-[50%] w-full h-full bg-slate-50 opacity-50 z-0"></div>
                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                        Soluciones Tecnológicas
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                        Nuestros <span className="text-primary">Servicios</span>
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Combinamos estrategia de negocio con la tecnología de IA más avanzada para crear soluciones que generan resultados tangibles.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, idx) => (
                            <div key={idx} className="group p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all duration-300">
                                <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed h-[80px]">{service.description}</p>
                                <ul className="space-y-3 mb-8">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                                            <span className="material-symbols-outlined text-primary text-base">check_circle</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button onClick={openBooking} variant="outline" fullWidth className="group-hover:bg-primary group-hover:text-white group-hover:border-primary">
                                    Consultar Ahora
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-slate-50 border-t border-slate-100">
                <AIInsights variant="services" title="El Futuro de tus Servicios" className="max-w-7xl mx-auto px-4" />
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8">
                    <h2 className="text-3xl lg:text-5xl font-black">¿No encuentras lo que buscas?</h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Cada negocio es único. Agenda una llamada exploratoria y diseñemos una solución a la medida de tus necesidades específicas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button onClick={openBooking} variant="primary" className="px-8 py-4 text-lg">
                            Agendar Consultoría
                        </Button>
                        <Button href={ACTION_LINKS.WHATSAPP_SUPPORT} target="_blank" className="px-8 py-4 text-lg bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm">
                            Mensaje Directo
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
};
