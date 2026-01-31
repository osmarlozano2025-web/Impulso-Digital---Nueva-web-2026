import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--color-primary-dark)',
            color: 'var(--color-text-muted)',
            padding: '4rem 0 2rem'
        }}>
            <div className="container grid grid-3">
                <div>
                    <h3 style={{ color: 'var(--color-bg-light)', marginBottom: '1rem' }}>IMPULSO DIGITAL</h3>
                    <p>Sistemas digitales que trabajan por tu negocio todos los días, sin depender de personas.</p>
                </div>
                <div>
                    <h4 style={{ color: 'var(--color-bg-light)', marginBottom: '1rem' }}>Servicios</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><Link to="/automatizacion">Automatización Omnicanal</Link></li>
                        <li><Link to="/webs">Webs Profesionales</Link></li>
                        <li><Link to="/ads">Campañas Meta Ads</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 style={{ color: 'var(--color-bg-light)', marginBottom: '1rem' }}>Empresa</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <li><Link to="/casos">Casos Reales</Link></li>
                        <li><Link to="/nosotros">Quiénes Somos</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container" style={{
                marginTop: '3rem',
                paddingTop: '1rem',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                textAlign: 'center',
                fontSize: '0.875rem'
            }}>
                © {new Date().getFullYear()} Impulso Digital. Todos los derechos reservados.
            </div>
        </footer>
    );
};

export default Footer;
