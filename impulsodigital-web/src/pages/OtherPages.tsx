import { Link } from 'react-router-dom';

export const About = () => (
    <section className="section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
            <h1 style={{ marginBottom: '1.5rem', fontSize: '3rem' }}>Impulso Digital</h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
                Somos un equipo enfocado en crear sistemas digitales reales que ayudan a los negocios a crecer con tecnología, datos y estrategia.
            </p>
            <Link to="/contacto" className="btn btn-outline">
                Trabaja con nosotros
            </Link>
        </div>
    </section>
);

export const Cases = () => (
    <section className="section">
        <div className="container">
            <h1 className="text-center" style={{ marginBottom: '4rem' }}>Resultados reales, no promesas</h1>
            <div className="grid grid-3">
                {/* Caso 1 */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', padding: '2rem', backgroundColor: 'white' }}>
                    <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary-light)' }}>Comercio Minorista</h3>
                    <p style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>
                        +38% Ventas (90 días)
                    </p>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                        Negocio físico con bajo seguimiento digital. Implementación de automatización omnicanal + web conectada.
                    </p>
                    <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                        <li>• Atención 24/7</li>
                        <li>• Recuperación de clientes</li>
                        <li>• Más cierres sin más personal</li>
                    </ul>
                </div>

                {/* Caso 2 */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', padding: '2rem', backgroundColor: 'white' }}>
                    <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary-light)' }}>Servicios Profesionales</h3>
                    <p style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>
                        -42% Costo por Lead
                    </p>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                        Rediseño de embudo completo: anuncios, web y seguimiento automático.
                    </p>
                    <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                        <li>• Leads mejor calificados</li>
                        <li>• Menor gasto publicitario</li>
                        <li>• +27% más conversiones</li>
                    </ul>
                </div>

                {/* Caso 3 */}
                <div style={{ border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', padding: '2rem', backgroundColor: 'white' }}>
                    <h3 style={{ marginBottom: '1rem', color: 'var(--color-primary-light)' }}>Ecommerce</h3>
                    <p style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-accent)' }}>
                        +52% Ventas Online
                    </p>
                    <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                        Web optimizada + recuperación de carritos + campañas segmentadas.
                    </p>
                    <ul style={{ fontSize: '0.9rem', color: 'var(--color-text-main)' }}>
                        <li>• Recuperación de ventas</li>
                        <li>• Mayor ticket promedio</li>
                        <li>• Seguimiento post-visita</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

export const Contact = () => (
    <section className="section">
        <div className="container" style={{ maxWidth: '600px', textAlign: 'center' }}>
            <h1 style={{ marginBottom: '1rem', fontSize: '2.5rem' }}>Hablemos de tu negocio</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
                Analizamos tu caso y te decimos si realmente podemos ayudarte.
            </p>

            <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0' }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Nombre Completo</label>
                        <input type="text" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1' }} placeholder="Tu nombre" />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>Email Corporativo</label>
                        <input type="email" style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1' }} placeholder="nombre@empresa.com" />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 500 }}>¿Qué servicio te interesa?</label>
                        <select style={{ width: '100%', padding: '0.75rem', borderRadius: 'var(--radius-sm)', border: '1px solid #cbd5e1' }}>
                            <option>Automatización Omnicanal</option>
                            <option>Webs Profesionales</option>
                            <option>Campañas Meta Ads</option>
                            <option>Otro</option>
                        </select>
                    </div>
                    <button type="button" className="btn btn-primary" style={{ width: '100%' }}>
                        Solicitar diagnóstico
                    </button>
                </form>
            </div>
        </div>
    </section>
);
