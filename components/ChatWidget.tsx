
import React, { useState, useEffect } from 'react';
import { ACTION_LINKS } from '../constants';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Auto-open after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-primary p-4 text-white flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">support_agent</span>
              </div>
              <span className="font-bold">Impulso Digital - Asistente</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Content: Directly showing Whapify Bot */}
          <div className="flex-1 overflow-hidden relative bg-slate-50">
            <iframe
              src={ACTION_LINKS.WHAPIFY_BOT_URL}
              className="w-full h-full border-none"
              title="Canales de Atención"
            />
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="size-16 bg-secondary text-white rounded-full shadow-xl shadow-secondary/30 flex items-center justify-center hover:scale-105 transition-transform duration-200 active:scale-95"
      >
        <span className="material-symbols-outlined text-[32px]">{isOpen ? 'close' : 'chat'}</span>
      </button>
    </div>
  );
};
