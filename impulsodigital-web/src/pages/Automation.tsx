import { Link } from 'react-router-dom';
import { MessageSquare, Clock, TrendingUp, Users, CheckCircle } from 'lucide-react';

const Automation = () => {
    return (
        <>
            {/* Hero */}
            <section style={{ backgroundColor: 'var(--color-bg-dark)', color: 'white', padding: '5rem 0' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>
                        Automatización inteligente <br />
                        <span style={{ color: 'var(--color-accent)' }}>que trabaja por tu negocio</span>
                    </h1>
                </div>
            </section>

            {/* Problem & Solution */}
            <section className="section">
                <div className="container grid grid-2" style={{ alignItems: 'flex-start', gap: '4rem' }}>

                    {/* Problem */}
                    <div style={{ backgroundColor: '#fff1f2', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid #fecdd3' }}>
                        <h3 style={{ color: '#9f1239', marginBottom: '1rem' }}>PROBLEMA REAL</h3>
                        <p style={{ fontSize: '1.2rem', fontWeight: 600, marginBottom: '1rem', color: '#881337' }}>
                            Los negocios pierden ventas porque:
                        </p>
                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: '#9f1239' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#be123c' }}>✕</span> Responden tarde</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#be123c' }}>✕</span> No hacen seguimiento</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#be123c' }}>✕</span> Dependen 100% de personas</li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><span style={{ color: '#be123c' }}>✕</span> Pierden información del cliente</li>
                        </ul>
                    </div>

                    {/* Solution */}
                    <div>
                        <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-primary-light)' }}>LA SOLUCIÓN</h2>
                        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                            Creamos sistemas de <strong>automatización omnicanal con personalidad</strong>,
                            que conversan como personas reales y funcionan 24/7.
                        </p>

                        <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>¿Qué incluye?</h3>
                        <div className="grid grid-2" style={{ gap: '1rem', fontSize: '0.95rem' }}>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <CheckCircle size={20} className="text-accent" /> Atención automática inteligente
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <CheckCircle size={20} className="text-accent" /> Seguimiento según comportamiento
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <CheckCircle size={20} className="text-accent" /> Calificación de leads
                            </div>
                            <div style={{ display: 'flex', gap: '0.5rem' }}>
                                <CheckCircle size={20} className="text-accent" /> Integración total web + datos
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section style={{ backgroundColor: 'var(--color-bg-offwhite)', padding: '5rem 0' }}>
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '3rem' }}>Beneficios Reales</h2>
                    <div className="grid grid-2" style={{ gap: '2rem' }}>
                        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                            <TrendingUp size={32} className="text-accent" style={{ marginBottom: '1rem' }} />
                            <h4>Más ventas sin más esfuerzo</h4>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                            <Clock size={32} className="text-accent" style={{ marginBottom: '1rem' }} />
                            <h4>Menos tiempo perdido</h4>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                            <MessageSquare size={32} className="text-accent" style={{ marginBottom: '1rem' }} />
                            <h4>Clientes mejor atendidos</h4>
                        </div>
                        <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                            <Users size={32} className="text-accent" style={{ marginBottom: '1rem' }} />
                            <h4>Información organizada y usable</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Target Audience & CTA */}
            <section className="section">
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>¿Para quién es esto?</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                        <span style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--color-primary-light)', color: 'white', borderRadius: '2rem' }}>Negocios con muchos mensajes</span>
                        <span style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--color-primary-light)', color: 'white', borderRadius: '2rem' }}>Empresas que quieren escalar</span>
                        <span style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--color-primary-light)', color: 'white', borderRadius: '2rem' }}>Profesionales ocupados</span>
                    </div>

                    <Link to="/contacto" className="btn btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 3rem' }}>
                        Quiero automatizar mi negocio
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Automation;
