import { motion } from 'framer-motion';
import { portfolioData } from '../config/portfolio';

const MediaSection = () => {
    if (!portfolioData.media || portfolioData.media.length === 0) return null;

    const recent = portfolioData.media.filter(m => m.subtitle === 'Latest Release');
    const rest = portfolioData.media.filter(m => m.subtitle !== 'Latest Release');

    const renderCard = (item, index, highlight = false) => (
        <motion.div
            key={`${item.id}-${index}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.08, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ y: -4 }}
            className="glass"
            style={{
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                transition: 'var(--transition)',
                border: highlight ? '1px solid rgba(0, 122, 255, 0.4)' : '1px solid var(--card-border)',
                boxShadow: highlight ? '0 20px 60px -20px rgba(0, 122, 255, 0.35)' : 'none'
            }}
        >
            <div style={{
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden'
            }}>
                <iframe
                    src={`https://www.youtube.com/embed/${item.id}`}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        border: 'none'
                    }}
                />
            </div>
            <div style={{ padding: '14px 18px 16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {highlight && (
                    <span style={{
                        fontSize: '10px',
                        fontWeight: 700,
                        letterSpacing: '1.5px',
                        textTransform: 'uppercase',
                        color: 'var(--accent)'
                    }}>
                        New • {item.subtitle}
                    </span>
                )}
                <h3 style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.3 }}>{item.title}</h3>
            </div>
        </motion.div>
    );

    return (
        <section style={{ marginBottom: '40px' }}>
            {recent.length > 0 && (
                <>
                    <div style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'space-between',
                        marginBottom: '16px',
                        paddingLeft: '4px'
                    }}>
                        <h2 style={{ fontSize: '20px', color: 'var(--text-primary)' }}>
                            Recent Works
                        </h2>
                        <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                            Latest releases
                        </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                        {recent.map((item, index) => renderCard(item, index, true))}
                    </div>
                </>
            )}

            {rest.length > 0 && (
                <>
                    <h2 style={{
                        fontSize: '18px',
                        marginBottom: '16px',
                        paddingLeft: '4px',
                        color: 'var(--text-primary)'
                    }}>
                        Featured Content
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {rest.map((item, index) => renderCard(item, index, false))}
                    </div>
                </>
            )}
        </section>
    );
};

export default MediaSection;
