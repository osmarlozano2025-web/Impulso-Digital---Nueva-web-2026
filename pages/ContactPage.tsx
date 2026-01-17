
import React from 'react';
import emailjs from '@emailjs/browser';
import { CONTACT_INFO, ACTION_LINKS } from '../constants';
import { Button } from '../components/Button';
import { motion } from 'framer-motion';

export const ContactPage: React.FC = () => {
  const form = React.useRef<HTMLFormElement>(null);
  const [sending, setSending] = React.useState(false);
  const [success, setSuccess] = React.useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setSending(true);

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_id',
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_id',
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'public_key'
    )
      .then(() => {
        setSuccess(true);
        setSending(false);
        form.current?.reset();
        setTimeout(() => setSuccess(false), 5000);
      }, (error) => {
        console.error(error.text);
        setSending(false);
        alert('Hubo un error al enviar el mensaje. Por favor intenta por WhatsApp.');
      });
  };

  return (
    <div className="py-20 lg:py-24 bg-background-light min-h-screen">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter mb-6"
          >
            Hablemos de tu <span className="text-primary">Impulso</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg lg:text-xl text-slate-600"
          >
            Estamos listos para auditar tu negocio y diseñar tu estrategia de IA.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Column: Contact Info & Map */}
          <div className="space-y-8">
            <div className="grid gap-6">
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white shadow-sm border border-slate-100 transition-transform hover:-translate-y-1">
                <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl">call</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Llámanos</h4>
                  <p className="text-slate-600 font-medium">{CONTACT_INFO.PHONE}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white shadow-sm border border-slate-100 transition-transform hover:-translate-y-1">
                <div className="size-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Escríbenos</h4>
                  <p className="text-slate-600 font-medium">{CONTACT_INFO.EMAIL}</p>
                </div>
              </div>

              <a
                href={ACTION_LINKS.GOOGLE_MAPS_LOCATION}
                target="_blank"
                rel="noreferrer"
                className="group block relative overflow-hidden rounded-3xl border border-slate-200 shadow-md aspect-video"
              >
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800"
                  alt="Mapa Ubicación"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-colors flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full flex items-center gap-2 shadow-xl">
                    <span className="material-symbols-outlined text-red-500">location_on</span>
                    <span className="font-bold text-slate-900">Ver en Mapa</span>
                  </div>
                </div>
              </a>
            </div>

            <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">¿Por qué ahora?</h3>
              <p className="text-slate-300 relative z-10 text-sm leading-relaxed">
                El 2026 marca el punto de no retorno para la adopción de IA. Empresas que inician hoy tienen una ventaja competitiva de 18 meses sobre el mercado.
              </p>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="glass-card p-8 lg:p-12 rounded-[2.5rem] border border-slate-200/60 shadow-2xl bg-white/80 backdrop-blur-xl relative">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl"></div>

            <h3 className="text-3xl font-black text-slate-900 mb-2">Envíanos un mensaje</h3>
            <p className="text-slate-500 mb-8">Te responderemos en menos de 2 horas hábiles.</p>

            <form ref={form} className="space-y-6 relative z-10" onSubmit={sendEmail}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Nombre</label>
                  <input type="text" name="user_name" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-medium text-slate-800" placeholder="Tu nombre" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                  <input type="email" name="user_email" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-medium text-slate-800" placeholder="hola@empresa.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">¿Cómo podemos ayudarte?</label>
                <textarea name="message" className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none font-medium text-slate-800 resize-none" rows={5} placeholder="Cuéntanos sobre tu negocio..." required></textarea>
              </div>
              <Button type="submit" fullWidth className="py-5 text-lg shadow-lg shadow-primary/25" disabled={sending}>
                {sending ? 'Enviando...' : (success ? '¡Mensaje Enviado!' : 'Enviar Mensaje')}
              </Button>
              {success && <p className="text-green-600 text-center font-bold animate-pulse bg-green-50 py-2 rounded-xl">¡Gracias! Te contactaremos pronto.</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
