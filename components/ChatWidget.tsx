
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/gemini';
import { ChatMessage } from '../types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<'menu' | 'gemini' | 'whapify'>('menu');

  // Gemini State
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! Soy el asistente de Impulso Digital. ¿En qué puedo ayudarte hoy con la IA de tu negocio?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [suggestedQuestions, setSuggestedQuestions] = useState([
    "¿Qué servicios ofrecen?",
    "Quiero agendar una visita",
    "Precios de consultoría"
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, view]); // Actualizar scroll al cambiar vista

  // Auto-open after 7 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  const handleSend = async (text?: string) => {
    const userMsg = text || input;
    if (!userMsg.trim() || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);
    setSuggestedQuestions([]);

    const response = await getGeminiResponse(userMsg, messages);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">

          {/* Header */}
          <div className="bg-primary p-4 text-white flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              {view !== 'menu' && (
                <button onClick={() => setView('menu')} className="hover:bg-white/10 p-1 rounded-full -ml-2 mr-1">
                  <span className="material-symbols-outlined text-lg">arrow_back</span>
                </button>
              )}
              <div className="size-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">{view === 'whapify' ? 'forum' : 'smart_toy'}</span>
              </div>
              <span className="font-bold">
                {view === 'menu' ? 'Centro de Ayuda' : (view === 'whapify' ? 'Canales Humanos' : 'Impulso AI')}
              </span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden relative bg-slate-50">

            {/* VISTA: MENU */}
            {view === 'menu' && (
              <div className="p-6 h-full flex flex-col justify-center gap-4 animate-in fade-in zoom-in-95">
                <p className="text-center text-slate-600 mb-4">¿Cómo prefieres comunicarte hoy?</p>

                <button
                  onClick={() => setView('gemini')}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:border-primary/50 hover:shadow-lg transition-all group text-left"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined">psychology</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 leading-tight">Cerebro IA</h4>
                      <div className="flex items-center gap-1">
                        <span className="size-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs text-slate-500">Online ahora</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 pl-14">Respuestas instantáneas sobre nuestros servicios las 24hs.</p>
                </button>

                <button
                  onClick={() => setView('whapify')}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:border-secondary/50 hover:shadow-lg transition-all group text-left"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-10 rounded-full bg-secondary/10 text-secondary flex items-center justify-center group-hover:bg-secondary group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined">support_agent</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 leading-tight">Atención Humana</h4>
                      <span className="text-xs text-slate-500">WhatsApp, Telegram, etc.</span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-500 pl-14">Habla con nuestro equipo por tu canal favorito.</p>
                </button>
              </div>
            )}

            {/* VISTA: GEMINI (IA) */}
            {view === 'gemini' && (
              <div className="flex flex-col h-full animate-in slide-in-from-right-10">
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg, i) => (
                    <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                          ? 'bg-primary text-white rounded-tr-none'
                          : 'bg-white border border-slate-100 text-slate-700 rounded-tl-none shadow-sm'
                        }`}>
                        {msg.text}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none animate-pulse">
                        <div className="flex gap-1">
                          <div className="size-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                          <div className="size-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                          <div className="size-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                <div className="p-4 bg-white border-t border-slate-100 shrink-0">
                  {suggestedQuestions.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {suggestedQuestions.map((q, i) => (
                        <button
                          key={i}
                          onClick={() => handleSend(q)}
                          className="text-xs bg-slate-100 hover:bg-primary/10 hover:text-primary text-slate-600 px-3 py-1.5 rounded-full transition-colors border border-slate-200"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Escribe aquí..."
                      className="flex-1 bg-slate-100 border-none rounded-xl px-4 text-sm focus:ring-2 focus:ring-primary"
                    />
                    <button
                      onClick={() => handleSend()}
                      className="bg-primary text-white p-2 rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50"
                      disabled={isLoading}
                    >
                      <span className="material-symbols-outlined">send</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* VISTA: WHAPIFY (IFRAME) */}
            {view === 'whapify' && (
              <iframe
                src="https://ap.whapify.ai/bots/6195639/l/1761776914607"
                className="w-full h-full border-none animate-in slide-in-from-right-10"
                title="Canales de Atención"
              />
            )}

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
