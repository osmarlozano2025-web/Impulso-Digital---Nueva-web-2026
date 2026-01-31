import { Link } from 'react-router-dom';
import { Bot, Globe, BarChart3, MoveRight } from 'lucide-react';

const Home = () => {
    return (
        <>
            {/* Hero Section */}
            <section style={{
                backgroundColor: 'var(--color-primary-dark)',
                color: 'var(--color-bg-light)',
                padding: '8rem 0',
                textAlign: 'center'
            }}>
                <div className="container">
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                        marginBottom: '1.5rem',
                        color: 'var(--color-bg-light)'
                    }}>
                        Automatización inteligente,<br />webs que convierten y campañas que venden
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--color-text-muted)',
                        marginBottom: '3rem',
                        maxWidth: '700px',
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }}>
                        Creamos sistemas digitales que trabajan por tu negocio todos los días, sin depender de personas.
                    </p>
                    <Link to="/contacto" className="btn btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}>
                        Solicitar diagnóstico
                    </Link>
                </div>
            </section>

            {/* Services Block */}
            <section className="section">
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '4rem', fontSize: '2.5rem' }}>Qué hacemos</h2>

                    <div className="grid grid-3">
                        {/* Automation */}
                        <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', backgroundColor: 'white' }}>
                            <Bot size={48} className="text-accent" style={{ marginBottom: '1.5rem', color: 'var(--color-primary-dark)' }} />
                            <h3 style={{ marginBottom: '1rem' }}>Automatización Omnicanal</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                                Sistemas inteligentes que atienden y venden por ti en todos los canales.
                            </p>
                            <Link to="/automatizacion" style={{ display: 'flex', alignItems: 'center', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                                Ver más <MoveRight size={16} style={{ marginLeft: '0.5rem' }} />
                            </Link>
                        </div>

                        {/* Webs */}
                        <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', backgroundColor: 'white' }}>
                            <Globe size={48} className="text-accent" style={{ marginBottom: '1.5rem', color: 'var(--color-primary-dark)' }} />
                            <h3 style={{ marginBottom: '1rem' }}>Webs Profesionales</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                                Páginas conectadas a datos reales, diseñadas para convertir visitas en clientes.
                            </p>
                            <Link to="/webs" style={{ display: 'flex', alignItems: 'center', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                                Ver más <MoveRight size={16} style={{ marginLeft: '0.5rem' }} />
                            </Link>
                        </div>

                        {/* Ads */}
                        <div style={{ padding: '2rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', backgroundColor: 'white' }}>
                            <BarChart3 size={48} className="text-accent" style={{ marginBottom: '1.5rem', color: 'var(--color-primary-dark)' }} />
                            <h3 style={{ marginBottom: '1rem' }}>Campañas Meta Ads</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
                                Publicidad estratégica adaptada a cada negocio y objetivo.
                            </p>
                            <Link to="/ads" style={{ display: 'flex', alignItems: 'center', fontWeight: 600, color: 'var(--color-primary-dark)' }}>
                                Ver más <MoveRight size={16} style={{ marginLeft: '0.5rem' }} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Differential */}
            <section className="section bg-primary" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'var(--color-bg-light)', marginBottom: '1.5rem' }}>No vendemos herramientas, creamos sistemas</h2>
                    <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                        Todo está conectado para maximizar resultados:
                        <br />
                        <span style={{ color: 'var(--color-accent)', fontWeight: 600, display: 'block', marginTop: '1rem' }}>
                            Anuncios → Web → Automatización → Datos → Ventas
                        </span>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Home;
