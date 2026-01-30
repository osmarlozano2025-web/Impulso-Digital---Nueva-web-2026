
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => (
    <footer className="bg-white dark:bg-background-dark border-t border-[#e7ebf3] dark:border-gray-800 py-16 px-6 lg:px-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-1 space-y-6">
                <Logo />
                <p className="text-sm text-gray-500 leading-relaxed">
                    Tu destino móvil premium para la última tecnología. Ofrecemos dispositivos auténticos, soporte experto y envíos a todo el mundo.
                </p>
            </div>
            <div>
                <h5 className="font-bold text-lg mb-6">Tienda</h5>
                <ul className="space-y-4 text-sm text-gray-500">
                    <li><Link to="/catalog" className="hover:text-primary transition-colors">Smartphones</Link></li>
                    <li><Link to="/catalog" className="hover:text-primary transition-colors">Tablets</Link></li>
                    <li><Link to="/catalog" className="hover:text-primary transition-colors">Wearables</Link></li>
                    <li><Link to="/catalog" className="hover:text-primary transition-colors">Accesorios</Link></li>
                </ul>
            </div>
            <div>
                <h5 className="font-bold text-lg mb-6">Soporte</h5>
                <ul className="space-y-4 text-sm text-gray-500">
                    <li><a className="hover:text-primary transition-colors" href="#">Estado del pedido</a></li>
                    <li><a className="hover:text-primary transition-colors" href="#">Devoluciones y reembolsos</a></li>
                    <li><a className="hover:text-primary transition-colors" href="#">Política de envío</a></li>
                    <li><a className="hover:text-primary transition-colors" href="#">FAQ</a></li>
                </ul>
            </div>
            <div>
                <h5 className="font-bold text-lg mb-6">Mantente actualizado</h5>
                <p className="text-sm text-gray-500 mb-4">Suscríbete para acceso temprano a ofertas y nuevos lanzamientos.</p>
                <div className="flex flex-col gap-2">
                    <input className="h-10 px-4 rounded-lg bg-[#e7ebf3] dark:bg-gray-800 border-none text-sm focus:ring-1 focus:ring-primary" placeholder="Introduce tu email" type="email"/>
                    <button className="h-10 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">Suscribirse</button>
                </div>
            </div>
        </div>
        <div className="max-w-[1280px] mx-auto mt-16 pt-8 border-t border-[#e7ebf3] dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-gray-400">© 2024 Nazacelu. Todos los derechos reservados.</p>
            <div className="flex gap-6">
                <span className="material-symbols-outlined text-gray-400 hover:text-primary transition-colors cursor-pointer">social_leaderboard</span>
                <span className="material-symbols-outlined text-gray-400 hover:text-primary transition-colors cursor-pointer">alternate_email</span>
                <span className="material-symbols-outlined text-gray-400 hover:text-primary transition-colors cursor-pointer">movie</span>
            </div>
        </div>
    </footer>
);

export default Footer;
