
import React, { useState, useRef, useEffect } from 'react';
import { getGeminiResponse } from '../services/gemini';
import { ChatMessage } from '../types';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '¡Hola! Soy el asistente de Impulso Digital. ¿En qué puedo ayudarte hoy con la IA de tu negocio?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getGeminiResponse(userMsg, messages);
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[350px] sm:w-[400px] h-[500px] bg-white rounded-3xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
          <div className="bg-primary p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="size-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">smart_toy</span>
              </div>
              <span className="font-bold">Impulso AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-lg">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
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
                    <div className="size-1.5 bg-slate-300 rounded-full"></div>
                    <div className="size-1.5 bg-slate-300 rounded-full"></div>
                    <div className="size-1.5 bg-slate-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-slate-100">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Escribe tu duda..."
                className="flex-1 bg-slate-100 border-none rounded-xl px-4 text-sm focus:ring-2 focus:ring-primary"
              />
              <button 
                onClick={handleSend}
                className="bg-primary text-white p-2 rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-50"
                disabled={isLoading}
              >
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
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
