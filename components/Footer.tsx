
import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, ACTION_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-background-dark text-white pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-3xl">rocket_launch</span>
              <span className="text-2xl font-black tracking-tighter">Impulso Digital</span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-xs">
              Transformando datos en crecimiento real mediante soluciones de IA estratégica a medida para cada negocio.
            </p>
            <div className="flex gap-4">
              <a 
                href={ACTION_LINKS.INSTAGRAM} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg hover:bg-secondary/20 transition-colors flex items-center justify-center"
                title="Instagram @impulsodigital.de"
              >
                <img src="https://cdn.simpleicons.org/instagram/white" className="size-5" alt="Instagram" />
              </a>
              <a 
                href={ACTION_LINKS.FACEBOOK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 transition-colors flex items-center justify-center"
                title="Facebook"
              >
                <img src="https://cdn.simpleicons.org/facebook/white" className="size-5" alt="Facebook" />
              </a>
              <a 
                href={ACTION_LINKS.WHATSAPP_SUPPORT} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-white/5 rounded-lg hover:bg-green-500/20 transition-colors flex items-center justify-center"
                title="WhatsApp"
              >
                <img src="https://cdn.simpleicons.org/whatsapp/white" className="size-5" alt="WhatsApp" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Explorar</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/cerebro" className="hover:text-white transition-colors">Cerebro IA</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/escalera" className="hover:text-white transition-colors">Ruta de Valor</Link></li>
              <li><Link to="/nosotros" className="hover:text-white transition-colors">Nuestra Visión</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Nuestras Webs</h4>
            <ul className="space-y-4 text-slate-400">
              <li>
                <a href={ACTION_LINKS.MAIN_WEB} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">language</span>
                  impulsodigital.de
                </a>
              </li>
              <li>
                <a href={ACTION_LINKS.APP_WEB} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2">
                  <span className="material-symbols-outlined text-sm">apps</span>
                  app.impulsodigital.de
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">call</span>
                <span className="text-sm">{CONTACT_INFO.PHONE}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">mail</span>
                <span className="text-sm">{CONTACT_INFO.EMAIL}</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary">location_on</span>
                <span className="text-sm">{CONTACT_INFO.LOCATION}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2025 Impulso Digital. Todos los derechos reservados. Hecho con ❤️</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacidad</a>
            <a href="#" className="hover:text-white">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
