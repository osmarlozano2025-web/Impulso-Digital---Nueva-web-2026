
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Product, Brand } from '../types';

const BRANDS: Brand[] = [
    { name: 'Apple', icon: 'ios' },
    { name: 'Samsung', icon: 'smartphone' },
    { name: 'Google', icon: 'google' },
    { name: 'Xiaomi', icon: 'devices' },
    { name: 'Sony', icon: 'view_in_ar' }
];

const FEATURED_PRODUCTS: Product[] = [
    { id: 1, name: 'iPhone 15 Pro', brand: 'Apple', price: 999, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0ol9zQRI0cWVFlI6QFEIn14-orq1QoCf1styv58X4zq7Lj09R2uVaYdV9D2x5cFEUAsV-ZHVcbstuphVOJ5cUQQZwg7u9N1jJe5RYZG2fwsgioHBfhddwXEqRCiW_lcdym4Dk986jEPj3YQQHL8R84dRc0G3FLqAbcvgEKDTvQcmoXzGZmD5RikAWModnaEEWcXOtymmkYUxMptfSozRKwnG6RQ-B9Ughxsc4ubRb8FDptRLGNPLX0Z3yog99GbEBP_Ce3t3ZuF0', tag: 'HOT' },
    { id: 2, name: 'Galaxy S24 Ultra', brand: 'Samsung', price: 1199, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVjZmdsmNqx2qAGRuHPlszm8GPqSX5UoYwxOfyckHTNPL84KxPfHUqiZTM-oQGVRWHts889lW61AFfg2ltIgwrSZ-YQ3N3OlFySgd33XK-wVokeZdiQ9OIxjW3Q84zwIwfgXIU0vw-BQf6rhVLVoIacnbdujAUtFLYFx_u6ddgbe4SS3FJdCxsXe3rTceAIF2L90MhuJVOAfY8gInSxbuVSDPEGIfJqHoa_HlMP9q-PdpMkNr8m0OhMwQko5tcbe-y7GzJ9yHih14', tag: 'NUEVO' },
    { id: 3, name: 'Pixel 8 Pro', brand: 'Google', price: 899, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQG0AmkB1HgI6JfuplfkBwsp4PA8tJXAfiRnUI7P2TIodHhgIUM9Hf654Dbtaxl0YlUmsO9mHKGasv66EncUNRSZ1MQbvToXZynMbR2E1X1Pbn4-cuv8ziSfAkxxbUHUxCIZ8hU66INDSf__QdXJ3AOZiQ-DQA6sk1d5eEFPGGEobvAkpFPwxvdFnPxTBYgmh9rSGiDkcyP60Rbxbyj-I3hpyN97-6WbnzBxh2QIq8FiLxyA2WpCVMHkbfTf8_P-V81c03HvfDINI' },
    { id: 4, name: 'Xiaomi 14 Pro', brand: 'Xiaomi', price: 749, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoKrqAkXX9UTQS-6j94gJDy-uz0sVhIJZJXqKYyJ4ZekXZAyIeEPi76PN0-relVXo8GShGEd8FM3aDncIBn5YpqREhFusZUE47S-qmKCKeG0Cy2Ru-Imp5Dd5BJuAFtRvVNLqRCw0wTSweZDiBqMermHh0eheFRQxfxG5pkvMk5EHO6bDfIvOmzqFwF-Q3czES9BZ5CaL-aZXuQLheoagqsDWnuP_rOIv5iQl44bi2sw4JQTL4mlpZTrGBEtXImKwjGSW_KyU8lRw' }
];

const HomePage: React.FC = () => {
    const navigate = useNavigate();
    return (
        <main className="max-w-[1280px] mx-auto pb-20">
            <section className="px-6 lg:px-10 py-8">
                <div className="bg-white dark:bg-background-dark border border-[#e7ebf3] dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
                    <div className="flex flex-col md:flex-row min-h-[500px]">
                        <div className="flex-1 p-10 lg:p-16 flex flex-col justify-center gap-8">
                            <div className="space-y-4">
                                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full">Recién Llegado</span>
                                <h1 className="text-[#0d121b] dark:text-white text-5xl lg:text-7xl font-black leading-[1.1] tracking-tighter">
                                    El Futuro está aquí.<br/><span className="text-primary">iPhone 15 Pro.</span>
                                </h1>
                                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-[500px]">
                                    Experimenta el máximo rendimiento con el nuevo chip A17 Pro y un sistema de cámara pro forjado en titanio.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <button onClick={() => navigate('/detail')} className="px-8 h-14 bg-primary text-white rounded-lg font-bold text-lg shadow-lg shadow-primary/30 hover:scale-[1.02] transition-transform flex items-center gap-2">
                                    Comprar ahora <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                                <button className="px-8 h-14 bg-gray-100 dark:bg-gray-800 text-[#0d121b] dark:text-white rounded-lg font-bold text-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                                    Saber más
                                </button>
                            </div>
                        </div>
                        <div className="flex-1 relative min-h-[400px]">
                            <div className="absolute inset-0 bg-center bg-no-repeat bg-cover" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDdJMC54qrXW3rQT4an0iXUSZbRT3kerC3J96MzwQuEHKD-TBMAIIjobBxyCGiYs9j-QljlVIEUUTbPmhe8MQnhHdsjWP7TFyUhWv-1l5Mc-AePF6XQ2vSGmkAmwedRu3VYCHliy6sjyybmzJFT5Bp6AZtzHU63kWKoIF6oHKlrkJEeaqgPWgDSRIwUsKNbZKnFnYI7Jq0ZShrICd1bXWwpQ_MeStZ1kVvazZgJPSXNxuHGeKAIHbtP5Pc6cntNAWFIPOqPldMEt20")'}}></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 lg:px-10 py-6">
                <h2 className="text-[22px] font-bold leading-tight tracking-tight mb-6">Compra por Marca</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-4">
                    {BRANDS.map(brand => (
                        <div key={brand.name} onClick={() => navigate('/catalog')} className="flex gap-4 rounded-xl border border-[#cfd7e7] dark:border-gray-800 bg-white dark:bg-gray-800/50 p-4 items-center hover:border-primary transition-all cursor-pointer group">
                            <div className="bg-gray-100 dark:bg-gray-700 flex items-center justify-center rounded-full w-12 h-12 shrink-0 overflow-hidden">
                                <span className="material-symbols-outlined text-gray-800 dark:text-white">{brand.icon}</span>
                            </div>
                            <h2 className="text-base font-bold group-hover:text-primary">{brand.name}</h2>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-6 lg:px-10 py-10">
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight">Productos Destacados</h2>
                        <p className="text-gray-500 mt-1">Nuestros smartphones más vendidos esta semana.</p>
                    </div>
                    <Link to="/catalog" className="text-primary font-bold flex items-center gap-1 hover:underline">
                        Ver todo <span className="material-symbols-outlined text-sm">open_in_new</span>
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {FEATURED_PRODUCTS.map(product => (
                        <div key={product.id} className="group bg-white dark:bg-gray-800 border border-[#e7ebf3] dark:border-gray-700 rounded-xl p-4 hover:shadow-xl transition-all cursor-pointer flex flex-col" onClick={() => navigate('/detail')}>
                            <div className="relative aspect-square bg-gray-50 dark:bg-gray-900 rounded-lg overflow-hidden mb-4">
                                <div className="absolute inset-0 bg-center bg-no-repeat bg-contain p-6 transition-transform group-hover:scale-110" style={{backgroundImage: `url("${product.img}")`}}></div>
                                {product.tag && <span className={`absolute top-3 left-3 ${product.tag === 'HOT' ? 'bg-primary' : 'bg-green-500'} text-white text-[10px] font-bold px-2 py-1 rounded`}>{product.tag}</span>}
                            </div>
                            <div className="space-y-1 flex-1">
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">{product.brand}</p>
                                <h3 className="font-bold text-lg leading-tight">{product.name}</h3>
                                <div className="flex items-center gap-1 text-yellow-500 mb-2">
                                    {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined !text-sm fill-1">star</span>)}
                                    <span className="text-gray-400 text-xs ml-1">(128)</span>
                                </div>
                                <div className="flex items-center justify-between pt-2 mt-auto">
                                    <span className="text-2xl font-black text-primary">${product.price}</span>
                                    <button className="bg-gray-100 dark:bg-gray-700 hover:bg-primary hover:text-white p-2 rounded-lg transition-colors">
                                        <span className="material-symbols-outlined">add_shopping_cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-6 lg:px-10 py-12">
                <div className="bg-violet-100 dark:bg-violet-900/20 rounded-2xl overflow-hidden relative border border-violet-200 dark:border-violet-800/50">
                    <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-violet-200/40 dark:from-violet-800/10 to-transparent z-0"></div>
                    <div className="relative z-10 p-10 lg:p-16 flex flex-col md:flex-row items-center gap-10">
                        <div className="flex-1 space-y-6">
                            <h2 className="text-violet-950 dark:text-violet-100 text-4xl lg:text-5xl font-black tracking-tight">Renueva y Ahorra.</h2>
                            <p className="text-violet-900/70 dark:text-violet-300 text-lg lg:text-xl max-w-md">
                                Obtén hasta <span className="text-violet-950 dark:text-white font-bold underline decoration-violet-400 decoration-2 underline-offset-4">$600 de crédito</span> al entregar tu dispositivo antiguo. Es mejor para tu bolsillo y para el planeta.
                            </p>
                            <button className="bg-violet-600 text-white px-8 h-14 rounded-lg font-bold text-lg shadow-xl shadow-violet-500/20 hover:scale-105 transition-all">
                                Calcular Valor
                            </button>
                        </div>
                        <div className="flex-1 flex justify-center">
                            <div className="w-full max-w-[400px] h-64 bg-center bg-no-repeat bg-contain rounded-xl" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDXhJ3MYUxnRy9Tjno8IoABdwyPby7UfGApn04AFLqMOYQtNh-JNGr47zhwhdtE_DI0NMVdOP7VA6Q2rpCbCQjqWc7PQe6jS9ID7BQEgp2y07cHJ69uzYxWdAoL10-Ai9kVgf_wo0JDTYB5dZRKPsAa04fV8dOYGcoFb6CYZ7XjG-3jSCFvs-MZgim3I0RHSjsMGna65HPyLxrOE8-7-UV21fdYW7dBU_Wa3kcwE0BuxItfHRlWGvq4NA62tf9dN34imhOEUeKQEn8")'}}></div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
