import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Inicio', path: '/' },
        { name: 'Automatización', path: '/automatizacion' },
        { name: 'Webs', path: '/webs' },
        { name: 'Ads', path: '/ads' },
        { name: 'Casos', path: '/casos' },
        { name: 'Nosotros', path: '/nosotros' },
    ];

    return (
        <nav style={{
            backgroundColor: 'var(--color-bg-light)',
            color: 'var(--color-primary-dark)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            boxShadow: 'var(--shadow-md)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '1rem',
                paddingBottom: '1rem'
            }}>
                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="/logo-full.png" alt="Impulso Digital" style={{ height: '50px', objectFit: 'contain' }} />
                </Link>

                {/* Desktop Menu */}
                <div style={{ display: 'none', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            style={{ fontSize: '0.95rem', opacity: 0.9 }}
                            onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                            onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contacto" className="btn btn-primary">
                        Contacto
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="mobile-toggle" style={{ cursor: 'pointer' }} onClick={toggleMenu}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    backgroundColor: 'var(--color-primary-light)',
                    padding: '1rem',
                    position: 'absolute',
                    width: '100%',
                    top: '100%',
                    left: 0,
                    borderTop: '1px solid rgba(255,255,255,0.1)'
                }}>
                    <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                style={{ fontSize: '1.1rem', padding: '0.5rem 0' }}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            to="/contacto"
                            className="btn btn-primary"
                            onClick={() => setIsOpen(false)}
                            style={{ textAlign: 'center' }}
                        >
                            Contacto
                        </Link>
                    </div>
                </div>
            )}

            <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
