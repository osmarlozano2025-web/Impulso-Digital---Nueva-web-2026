
import React, { createContext, useContext, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ACTION_LINKS } from '../constants';

interface BookingContextType {
    openBooking: () => void;
    closeBooking: () => void;
    isOpen: boolean;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openBooking = () => setIsOpen(true);
    const closeBooking = () => setIsOpen(false);

    return (
        <BookingContext.Provider value={{ openBooking, closeBooking, isOpen }}>
            {children}
            <BookingModal isOpen={isOpen} onClose={closeBooking} />
        </BookingContext.Provider>
    );
};

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within a BookingProvider');
    }
    return context;
};

const BookingModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="relative w-full max-w-5xl h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
                    >
                        <div className="flex items-center justify-between p-4 border-b border-slate-100 shrink-0">
                            <div className="flex items-center gap-3 ml-2">
                                <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined text-xl">calendar_today</span>
                                </div>
                                <span className="font-bold text-slate-900">Reserva tu Consultoría Estratégica</span>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                                aria-label="Cerrar"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="flex-1 bg-slate-50 relative">
                            <iframe
                                src={ACTION_LINKS.BOOKING_URL}
                                className="w-full h-full border-none"
                                title="Agenda tu reunión"
                            />
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
