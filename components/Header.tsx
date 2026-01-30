
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from './Logo';

interface HeaderProps {
  cartCount?: number;
}

const Header: React.FC<HeaderProps> = ({ cartCount = 0 }) => {
    const navigate = useNavigate();
    return (
        <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-solid border-[#e7ebf3] dark:border-gray-800">
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10 py-3 flex items-center justify-between whitespace-nowrap">
                <div className="flex items-center gap-8">
                    <Link to="/"><Logo /></Link>
                    <label className="hidden md:flex items-stretch min-w-[320px] h-10">
                        <div className="flex w-full items-stretch rounded-lg bg-[#e7ebf3] dark:bg-gray-800 transition-all focus-within:ring-2 focus-within:ring-primary/20">
                            <div className="flex items-center justify-center pl-4">
                                <span className="material-symbols-outlined text-[#4c669a] dark:text-gray-400">search</span>
                            </div>
                            <input className="w-full border-none bg-transparent focus:ring-0 text-sm font-normal px-3 placeholder:text-[#4c669a] dark:placeholder:text-gray-500 text-[#0d121b] dark:text-white" placeholder="Buscar celulares, fundas o cargadores..."/>
                        </div>
                    </label>
                </div>
                <div className="flex items-center gap-8">
                    <nav className="hidden lg:flex items-center gap-6">
                        <Link to="/catalog" className="text-sm font-medium hover:text-primary transition-colors">Marcas</Link>
                        <Link to="/catalog" className="text-sm font-medium hover:text-primary transition-colors">Accesorios</Link>
                        <Link to="/catalog" className="text-sm font-medium hover:text-primary transition-colors">Ofertas</Link>
                    </nav>
                    <div className="flex gap-3">
                        <button onClick={() => navigate('/cart')} className="relative flex items-center justify-center rounded-lg size-10 bg-[#e7ebf3] dark:bg-gray-800 text-[#0d121b] dark:text-white hover:bg-primary/10 transition-all">
                            <span className="material-symbols-outlined">shopping_cart</span>
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">{cartCount}</span>
                            )}
                        </button>
                        <button className="flex items-center justify-center rounded-lg size-10 bg-[#e7ebf3] dark:bg-gray-800 text-[#0d121b] dark:text-white hover:bg-primary/10 transition-all">
                            <span className="material-symbols-outlined">person</span>
                        </button>
                        <div className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-primary cursor-pointer hover:scale-110 transition-transform" style={{backgroundImage: 'url("https://picsum.photos/100/100")'}}></div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
