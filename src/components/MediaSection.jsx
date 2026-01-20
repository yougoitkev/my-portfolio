import { motion } from 'framer-motion';
import { portfolioData } from '../config/portfolio';

const MediaSection = () => {
    if (!portfolioData.media || portfolioData.media.length === 0) return null;

    return (
        <section style={{ marginBottom: '40px' }}>
            <h2 style={{
                fontSize: '18px',
                marginBottom: '16px',
                paddingLeft: '4px',
                color: 'var(--text-primary)'
            }}>
                Featured Content
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {portfolioData.media.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass"
                        style={{
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        <div style={{
                            position: 'relative',
                            paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
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
                        <div style={{ padding: '12px 16px' }}>
                            <h3 style={{ fontSize: '14px', fontWeight: '600' }}>{item.title}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default MediaSection;
