
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const DetailPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
                <Link to="/" className="hover:text-primary">Inicio</Link>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <Link to="/catalog" className="hover:text-primary">Smartphones</Link>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-slate-900 dark:text-slate-100 font-medium">Nebula X1 Pro</span>
            </nav>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-7">
                    <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 aspect-square flex items-center justify-center p-8 mb-4">
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRVeb7Qh0FooW1jAN0ehjlq-TcRO0i3PKWx4yDz6Bh0IgSAto2LS30-11jt3Hi0rHwIKPqMSjkdjbTUr060HxjOiTmIpHg5aY8efqbrU9GK3Ftd02T1KWhXC2al-Qqz-UMllNbhwS2IM37a6CRyKBpUfarYNJ4skAlmIZqRhdBPN4F57ktbuWiafzl33n2jHhBCMK0qpYOD-cMyZlbNkj2OxQ0whEE94lffFQ2Su6fDkxe6XL_pOlOD96k12P-IyP8pZGo-7DDDYk" className="max-w-full h-auto" alt="Nebula X1 Pro"/>
                    </div>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-8">
                    <div>
                        <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-bold rounded uppercase tracking-wider mb-3">Recién Llegado</span>
                        <h1 className="text-4xl font-bold mb-2">Nebula X1 Pro</h1>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex items-center gap-1 text-amber-500">
                                {[...Array(4)].map((_, i) => <span key={i} className="material-symbols-outlined fill-1 text-sm">star</span>)}
                                <span className="material-symbols-outlined text-sm">star_half</span>
                                <span className="text-sm font-bold ml-1">4.8</span>
                            </div>
                            <span className="text-sm text-slate-500 underline decoration-slate-300">1,240 reseñas</span>
                        </div>
                        <div className="flex items-baseline gap-3">
                            <span className="text-3xl font-bold text-slate-900 dark:text-white">$1,199.00</span>
                            <span className="text-lg text-slate-400 line-through">$1,349.00</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div>
                            <label className="text-sm font-bold uppercase text-slate-500 mb-3 block">Color</label>
                            <div className="flex gap-3">
                                <button className="size-10 rounded-full border-2 border-primary ring-offset-2 ring-primary ring-1 bg-slate-300"></button>
                                <button className="size-10 rounded-full border-2 border-transparent bg-slate-800"></button>
                                <button className="size-10 rounded-full border-2 border-transparent bg-blue-900"></button>
                            </div>
                        </div>
                        <div>
                            <label className="text-sm font-bold uppercase text-slate-500 mb-3 block">Capacidad de Almacenamiento</label>
                            <div className="grid grid-cols-3 gap-2">
                                <button className="py-3 px-4 rounded-lg border-2 border-slate-200 dark:border-slate-800 font-bold hover:border-primary transition-colors">256GB</button>
                                <button className="py-3 px-4 rounded-lg border-2 border-primary text-primary bg-primary/5 font-bold">512GB</button>
                                <button className="py-3 px-4 rounded-lg border-2 border-slate-200 dark:border-slate-800 font-bold hover:border-primary transition-colors">1TB</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 pt-4">
                        <button onClick={() => navigate('/cart')} className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25">Comprar ahora</button>
                        <button onClick={() => navigate('/cart')} className="w-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">Añadir al carrito</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default DetailPage;
