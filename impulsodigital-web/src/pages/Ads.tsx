import { Link } from 'react-router-dom';
import { Target, BarChart2, PieChart, TrendingUp } from 'lucide-react';

const Ads = () => {
    return (
        <>
            <section style={{ backgroundColor: 'var(--color-bg-offwhite)', padding: '5rem 0' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Publicidad estratégica para cada tipo de negocio</h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
                        <strong style={{ color: '#ef4444' }}>Problema:</strong> Invertir en anuncios sin estrategia genera pérdidas.
                    </p>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'white' }}>
                <div className="container">
                    <div className="grid grid-2" style={{ gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ marginBottom: '1.5rem' }}>Estrategia primero, inversión después</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                                Creamos campañas personalizadas según el modelo de negocio, el público y el objetivo.
                                No disparamos al aire; apuntamos a donde está tu cliente ideal.
                            </p>
                            <Link to="/contacto" className="btn btn-primary">
                                Quiero campañas que vendan
                            </Link>
                        </div>

                        <div>
                            <div>
                                <div>
                                    <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>Nuestro Proceso</h3>
                                    <div className="grid grid-2" style={{ gap: '1.5rem' }}>
                                        <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)' }}>
                                            <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><Target size={32} /></div>
                                            <h4 style={{ marginBottom: '0.5rem' }}>1. Análisis del negocio</h4>
                                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                                                Entendemos qué vendes, cómo vendes y a quién. Detectamos pérdidas y oportunidades reales.
                                            </p>
                                            <strong style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-primary-light)' }}>Objetivo: entender antes de ejecutar.</strong>
                                        </div>

                                        <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)' }}>
                                            <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><PieChart size={32} /></div>
                                            <h4 style={{ marginBottom: '0.5rem' }}>2. Estrategia publicitaria</h4>
                                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                                                Diseñamos el embudo correcto según el tipo de negocio.
                                            </p>
                                            <strong style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-primary-light)' }}>Objetivo: atraer al cliente correcto.</strong>
                                        </div>

                                        <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)' }}>
                                            <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><TrendingUp size={32} /></div>
                                            <h4 style={{ marginBottom: '0.5rem' }}>3. Ejecución y optimización</h4>
                                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                                                Implementamos campañas y optimizamos costos constantemente.
                                            </p>
                                            <strong style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-primary-light)' }}>Objetivo: mejorar el costo por resultado.</strong>
                                        </div>

                                        <div style={{ padding: '1.5rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)' }}>
                                            <div style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}><BarChart2 size={32} /></div>
                                            <h4 style={{ marginBottom: '0.5rem' }}>4. Medición de resultados</h4>
                                            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                                                Reportes claros, sin métricas vanidosas.
                                            </p>
                                            <strong style={{ display: 'block', marginTop: '0.5rem', fontSize: '0.85rem', color: 'var(--color-primary-light)' }}>Objetivo: saber qué funciona y qué no.</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default Ads;
