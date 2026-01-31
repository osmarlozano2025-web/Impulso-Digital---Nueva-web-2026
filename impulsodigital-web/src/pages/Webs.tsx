import { Link } from 'react-router-dom';
import { Database, Layout, Plug, MousePointerClick } from 'lucide-react';

const Webs = () => {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-bg-offwhite)', padding: '5rem 0' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Webs pensadas para vender, no para decorar</h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
                        <strong style={{ color: '#ef4444' }}>Problema:</strong> La mayoría de webs no capturan datos ni generan oportunidades reales.
                    </p>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <h2 style={{ marginBottom: '1.5rem' }}>La Solución</h2>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '4rem' }}>
                            Diseñamos páginas conectadas a bases de datos reales y sistemas inteligentes.
                            No entregamos solo bonito diseño; entregamos una máquina de recolección de clientes.
                        </p>
                    </div>

                    <div className="grid grid-2" style={{ gap: '2rem' }}>
                        <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)' }}>
                            <h3 style={{ marginBottom: '1rem' }}>Lo que incluimos</h3>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <MousePointerClick className="text-accent" /> <strong>Captura de leads efectiva</strong>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Database className="text-accent" /> <strong>Organización de datos estructurada</strong>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Plug className="text-accent" /> <strong>Integración con automatización y CRM</strong>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <Layout className="text-accent" /> <strong>Diseño UX/UI orientado a conversión</strong>
                                </li>
                            </ul>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'var(--color-primary-dark)', color: 'white', padding: '2rem', borderRadius: 'var(--radius-md)' }}>
                            <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }}>¿Listo para escalar?</h3>
                            <p style={{ marginBottom: '2rem', textAlign: 'center' }}>Deja de perder visitas. Convierte el tráfico en dinero.</p>
                            <Link to="/contacto" className="btn btn-primary" style={{ width: '100%' }}>
                                Quiero una web que funcione
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Webs;
