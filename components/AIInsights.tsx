
import React from 'react';
import { motion } from 'framer-motion';

type InsightType = {
    category: string;
    title: string;
    description: string;
    icon: string;
    color: string;
};

const DATA_VARIANTS: Record<string, InsightType[]> = {
    home: [
        {
            category: "Tendencia 2026",
            title: "Agentes Autónomos",
            description: "La IA ya no solo responde, actúa. Los agentes autónomos gestionan operaciones complejas, ventas y soporte sin intervención humana, 24/7.",
            icon: "smart_toy",
            color: "bg-purple-500"
        },
        {
            category: "Futuro Inmediato",
            title: "Hiperpersonalización",
            description: "Webs que se reescriben para cada visitante. En 2026, la experiencia de usuario es única, adaptando textos y ofertas al perfil exacto del lead.",
            icon: "psychology",
            color: "bg-blue-500"
        },
        {
            category: "Revolución Visual",
            title: "Video Generativo",
            description: "Creación de contenido audiovisual indistinguible de la realidad en tiempo real. El marketing de contenidos ha cambiado para siempre.",
            icon: "videocam",
            color: "bg-pink-500"
        },
        {
            category: "Seguridad",
            title: "Soberanía de Datos",
            description: "Tus datos entrenan tu propia IA. La privacidad y la propiedad intelectual de los modelos son el activo más valioso de las empresas modernas.",
            icon: "lock",
            color: "bg-emerald-500"
        }
    ],
    services: [
        {
            category: "Eficiencia",
            title: "Automatización 360",
            description: "Conectamos tu CRM, correo y herramientas internas. Elimina el 80% de la carga operativa manual de tu equipo.",
            icon: "settings_suggest",
            color: "bg-indigo-500"
        },
        {
            category: "Rentabilidad",
            title: "Reducción de Costos",
            description: "Implementar IA reduce costos operativos hasta un 40% en el primer año mediante la optimización de recursos.",
            icon: "trending_down",
            color: "bg-green-500"
        },
        {
            category: "Escalabilidad",
            title: "Crecimiento Sin Dolor",
            description: "Tu infraestructura tecnológica crece automáticamente con tu demanda. Sin cuellos de botella humanos.",
            icon: "rocket_launch",
            color: "bg-purple-500"
        },
        {
            category: "Tecnología",
            title: "Stack Moderno",
            description: "Usamos lo último en Next.js, Python y Modelos LLM para asegurar que tu software no nazca obsoleto.",
            icon: "code",
            color: "bg-blue-500"
        }
    ],
    cerebro: [
        {
            category: "Inteligencia Emocional",
            title: "Análisis de Sentimientos",
            description: "El bot detecta si un cliente está feliz, enojado o dudoso, y ajusta su tono para maximizar la conversión.",
            icon: "sentiment_satisfied",
            color: "bg-amber-500"
        },
        {
            category: "Memoria",
            title: "Contexto Infinito",
            description: "Recuerda conversaciones pasadas. Tu cliente nunca tendrá que repetirle la misma información dos veces.",
            icon: "history",
            color: "bg-cyan-500"
        },
        {
            category: "Omnicanal",
            title: "Presencia Total",
            description: "Un solo cerebro gestionando WhatsApp, Instagram, Web y Email simultáneamente. Coherencia absoluta.",
            icon: "hub",
            color: "bg-violet-500"
        },
        {
            category: "Seguridad",
            title: "Privacidad Avanzada",
            description: "Tus datos empresariales sensibles están protegidos y no se usan para entrenar modelos públicos.",
            icon: "verified_user",
            color: "bg-teal-500"
        }
    ]
};

interface AIInsightsProps {
    variant?: 'home' | 'services' | 'cerebro';
    limit?: number;
    className?: string;
    title?: string;
}

export const AIInsights: React.FC<AIInsightsProps> = ({ variant = 'home', limit, className = "", title = "¿Por qué IA en 2026?" }) => {
    const data = DATA_VARIANTS[variant] || DATA_VARIANTS['home'];
    const displayInsights = limit ? data.slice(0, limit) : data;

    return (
        <div className={`py-12 ${className}`}>
            <div className="mb-10 text-center">
                <h3 className="text-2xl lg:text-3xl font-black text-slate-900 tracking-tight">
                    {title}
                </h3>
                <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
                    Adelántate al futuro con las tecnologías que están redefiniendo el mercado global este año.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {displayInsights.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="group relative bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                    >
                        <div className={`absolute top-0 right-0 p-3 rounded-bl-2xl rounded-tr-2xl text-[10px] uppercase font-bold text-white tracking-wider ${item.color}`}>
                            {item.category}
                        </div>

                        <div className="flex items-start gap-4">
                            <div className={`size-12 rounded-2xl ${item.color} bg-opacity-10 flex items-center justify-center shrink-0 group-hover:bg-opacity-20 transition-colors`}>
                                <span className={`material-symbols-outlined text-2xl ${item.color.replace('bg-', 'text-')}`}>
                                    {item.icon}
                                </span>
                            </div>

                            <div>
                                <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};
