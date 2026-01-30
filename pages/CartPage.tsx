
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '../types';

const CART_ITEMS: Product[] = [
    { id: 1, name: 'iPhone 15 Pro', brand: 'Apple', price: 999, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA8piPEgygFECVD_WgyAI5OxKvT2HcU3iug6kM44rcrb2TUPHDxzXQReYZXnchJj-YBpj2AqqNAwRwn52SEJMvPEpHyweqZvQ_QKUSdOpj2yO634cqvLbCJ5uCt6lwNc2PbJRS1-5Q6WdGV_wASzE_foLag3lxobi4dfasNt6uh1EZrmor_FWIwxszTCm8gUfYyycg08hHp2f13U_8vyOhHSWxKgXGp5pkjFOdPjhaL_8kvyfp7GqZYZA9iEOzWgJMEuxONh4T649c', spec: '128GB, Natural Titanium' },
    { id: 2, name: 'Galaxy S24 Ultra', brand: 'Samsung', price: 1299, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCU7J9JPUwE-5V4_gBRSZyiTwhudY2DbTjMzN2124X7_iSnm9z5iPqhyvvvNfOHuqO_aXRXHVatup1E-MuD87eFB7VwrAEvVD5yN9XyY9tDspvHL0vgvYLmxtiPkXum7NjJlITGO5XMHLEiX06kKQjTKsjXwCZE1ah9GOLHjlmf1EBRb2AN0_g-ahFn7BqjY6A5xwVfDIrJ6Y16peJbqFShAQvnFRa7VyGjE9VutVMiN-1fqM7asTRMdRe1-5OpoTh2zpEscg617Fo', spec: '256GB, Titanium Gray' }
];

const CartPage: React.FC = () => {
    return (
        <main className="max-w-[1280px] mx-auto px-6 lg:px-10 py-8">
            <div className="flex items-center gap-2 mb-6 text-sm font-medium">
                <Link to="/" className="text-[#4c669a] dark:text-gray-400 hover:text-primary">Inicio</Link>
                <span className="material-symbols-outlined text-[#4c669a] text-[16px]">chevron_right</span>
                <span className="text-[#0d121b] dark:text-white">Carrito de Compras</span>
            </div>
            <div className="mb-10">
                <h2 className="text-4xl font-black tracking-tight mb-2">Carrito de Compras</h2>
                <p className="text-lg">Tienes <span className="font-bold text-primary">{CART_ITEMS.length} artículos</span> en tu carrito</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-4">
                    {CART_ITEMS.map((item, i) => (
                        <div key={i} className="flex items-center gap-6 bg-white dark:bg-gray-900 p-6 rounded-xl shadow-sm border border-[#e7ebf3] dark:border-gray-800">
                            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-2 size-32 flex-shrink-0">
                                <img src={item.img} className="w-full h-full object-contain" alt={item.name}/>
                            </div>
                            <div className="flex-grow">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className="text-xl font-bold">{item.name}</h3>
                                    <button className="text-gray-400 hover:text-red-500 transition-colors"><span className="material-symbols-outlined">delete</span></button>
                                </div>
                                <p className="text-gray-500 text-sm mb-4">{item.spec}</p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center bg-background-light dark:bg-gray-800 rounded-lg p-1 border border-[#e7ebf3] dark:border-gray-700">
                                        <button className="size-8 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors">-</button>
                                        <input className="w-10 text-center bg-transparent border-none focus:ring-0 text-sm font-bold" type="number" value="1" readOnly/>
                                        <button className="size-8 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors">+</button>
                                    </div>
                                    <span className="text-xl font-bold text-primary">${item.price.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="pt-6">
                        <Link to="/catalog" className="flex items-center gap-2 text-primary font-bold hover:underline">
                            <span className="material-symbols-outlined">arrow_back</span> Continuar Comprando
                        </Link>
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <div className="sticky top-24 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg border border-[#e7ebf3] dark:border-gray-800">
                        <h3 className="text-2xl font-bold mb-6">Resumen del Pedido</h3>
                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-gray-400 font-medium"><span>Subtotal</span><span className="text-black dark:text-white">$2,298.00</span></div>
                            <div className="flex justify-between text-gray-400 font-medium"><span>Envío</span><span className="text-green-600 font-bold uppercase text-sm">Gratis</span></div>
                            <div className="border-t border-[#e7ebf3] dark:border-gray-800 pt-4 flex justify-between items-center">
                                <span className="text-xl font-bold">Total</span>
                                <span className="text-2xl font-black text-primary">$2,298.00</span>
                            </div>
                        </div>
                        <button className="w-full bg-primary hover:bg-primary/90 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 shadow-xl shadow-primary/20 transition-all">
                            Proceder al Pago <span className="material-symbols-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CartPage;
