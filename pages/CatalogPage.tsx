
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Product } from '../types';

const CATALOG_PRODUCTS: Product[] = [
    { id: 101, name: 'iPhone 15 Pro Max', brand: 'Apple', price: 1199, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuChCgumXjtaj-ZVGPtmZQS0jWBRSdlHLDWr-xN1thu9r3myAMM2mSB4XhWlin7Nn9ceoPSq8tRo63p5GG-y3oBQYQRMiBS3kgOPThiujud1diU2b4JVBF_uMRL7dHvxD421R525o1tH0gk1PYDUkzWBDIEoiV2Lne09YFvLIzbspLj6GpLU1drvi8UJ6ECMo77lHRcCNR7i_EkNn7hpPb3gUyLT7ZcLRLnAOGniyNlVBc10sJeAuJJjkQO7xtTgVx_sQa_Uf7GmxPk' },
    { id: 102, name: 'Samsung Galaxy Z Fold 5', brand: 'Samsung', price: 1529, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBE8hpnX89i9EPxd6okGv2fm-xS67jhyundrSyvy3gI_lCisUbltI01CB64V7ylqsasCenooee6PBE3dnLkkw81U6PSDeiyMZab4WVnI0eyCShb4vYdYNgdZ3c9nIy-Xstt15VbeBeVEUnsf31-oy6RilCr0hNl-Rzt8zwY83wG2dP9x5P9fFFy3HVwtpv7ye9LTp5YS-1Hvcr81Y5BvNpaxvP8jo2TUyKtmB9yOnz5eqreyW8JKoQbVIr9Jdxr-FNCsaLwfLm4iF0' },
    { id: 103, name: 'Google Pixel 8 Pro', brand: 'Google', price: 999, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDuHlJZVHJGeA3AKtRrh-V5XVxg_qSkKBuyRp2MPmao4hBt_RX4095u6gAYd0ewGpo0w0yWtGkvGn1kaWKpZhWcK3teXhhlgfqbfmEWKUd0yaW7ubYHFVSPtM8TyXf7_GUzY7ofiSgwcR17gotbFRwLMoeEiw-vh-49HmKq7R9fDTSefRHDFPz5A6d1_be3KWMEkomvyaRgsfqrOAgaXxQlmJVKgtEJAA1VWV2EXpeNs6g0JXFnOZhJMKu499_YvAv1zvS1YNxhJZk' }
];

const CatalogPage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <main className="max-w-[1440px] mx-auto px-4 lg:px-10 py-6">
            <div className="flex items-center gap-2 mb-6 text-sm font-medium">
                <Link to="/" className="text-gray-500 hover:text-primary">Inicio</Link>
                <span className="material-symbols-outlined text-xs text-gray-400">chevron_right</span>
                <span className="text-gray-900 dark:text-gray-100">Smartphones</span>
            </div>
            <div className="flex gap-8">
                <aside className="w-64 flex-shrink-0 hidden md:block">
                    <div className="sticky top-24 bg-white dark:bg-background-dark border border-[#e7ebf3] dark:border-gray-800 rounded-xl p-6">
                        <div className="mb-6"><h1 className="text-lg font-bold">Filtros</h1></div>
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-4 font-bold text-sm uppercase tracking-wider text-gray-400">Marca</div>
                            <div className="space-y-2">
                                {['Apple', 'Samsung', 'Google', 'Xiaomi'].map(b => (
                                    <label key={b} className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary"/>
                                        <span className="text-sm group-hover:text-primary">{b}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <button className="w-full bg-primary/10 text-primary font-bold py-2 rounded-lg hover:bg-primary hover:text-white transition-all">Limpiar Filtros</button>
                    </div>
                </aside>
                <section className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
                        <div>
                            <h2 className="text-3xl font-black tracking-tight mb-1">Todos los Smartphones</h2>
                            <p className="text-gray-500">Mostrando 124 modelos</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="bg-white dark:bg-gray-800 p-1 rounded-lg border border-[#e7ebf3] dark:border-gray-700 flex">
                                <button className="p-2 bg-primary/10 text-primary rounded-md"><span className="material-symbols-outlined">grid_view</span></button>
                                <button className="p-2 text-gray-400 hover:text-primary"><span className="material-symbols-outlined">list</span></button>
                            </div>
                            <button className="flex items-center justify-between px-4 py-2.5 bg-white dark:bg-gray-800 border border-[#e7ebf3] dark:border-gray-700 rounded-lg text-sm font-bold shadow-sm">
                                <span>Ordenar por: Más nuevos</span>
                                <span className="material-symbols-outlined">expand_more</span>
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {CATALOG_PRODUCTS.map((p) => (
                            <div key={p.id} className="group bg-white dark:bg-background-dark border border-[#e7ebf3] dark:border-gray-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col" onClick={() => navigate('/detail')}>
                                <div className="relative aspect-[4/5] bg-gray-50 dark:bg-gray-900 overflow-hidden">
                                    <img className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500" src={p.img} alt={p.name}/>
                                    <button className="absolute top-4 right-4 p-2 bg-white/80 dark:bg-black/40 backdrop-blur rounded-full text-gray-400 hover:text-red-500 transition-colors">
                                        <span className="material-symbols-outlined text-xl">favorite</span>
                                    </button>
                                </div>
                                <div className="p-5 flex-1 flex flex-col">
                                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">{p.name}</h3>
                                    <div className="mt-auto flex items-center justify-between">
                                        <span className="text-2xl font-black text-primary">${p.price}</span>
                                        <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-blue-700 transition-colors">
                                            <span className="material-symbols-outlined text-lg">add_shopping_cart</span> Añadir
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default CatalogPage;
