
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import { ACTION_LINKS } from '../constants';
import { useBooking } from './BookingModal';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { openBooking } = useBooking();

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Cerebro IA', path: '/cerebro' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Escalera de Valor', path: '/escalera' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Contacto', path: '/contacto' },
  ];

  return (
    <nav className="sticky top-0 z-[100] w-full border-b border-slate-100 bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary transition-colors duration-300">
            <span className="material-symbols-outlined text-primary group-hover:text-white">rocket_launch</span>
          </div>
          <span className="text-xl font-black tracking-tighter">
            <span className="text-secondary">Impulso</span>
            <span className="text-primary ml-1">Digital</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex flex-1 justify-center gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-bold transition-colors hover:text-primary ${location.pathname === link.path ? 'text-primary' : 'text-slate-600'
                }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4 shrink-0">
          <Button onClick={openBooking} variant="primary" className="py-2.5 px-6 shadow-md shadow-primary/20">
            Reservar Cita
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top-5">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-lg font-bold text-slate-900 py-2 border-b border-slate-50"
            >
              {link.name}
            </Link>
          ))}
          <Button
            onClick={() => {
              setIsOpen(false);
              openBooking();
            }}
            fullWidth
            className="mt-4 py-4"
          >
            Agendar Consultoría
          </Button>
        </div>
      )}
    </nav>
  );
};
