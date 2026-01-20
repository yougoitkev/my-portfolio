import { motion } from 'framer-motion';
import { Youtube, Instagram, Music, ExternalLink } from 'lucide-react';
import { portfolioData } from '../config/portfolio';

const iconMap = {
    Youtube,
    Instagram,
    Music
};

const LinkList = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const item = {
        hidden: { opacity: 0, scale: 0.9 },
        show: { opacity: 1, scale: 1 }
    };

    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="link-grid"
        >
            {portfolioData.links.map((link, index) => {
                const IconComponent = iconMap[link.icon] || ExternalLink;
                const isSpotify = link.type === 'spotify';

                return (
                    <motion.a
                        key={index}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={item}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="glass tile"
                    >
                        <div className="tile-glow" />

                        {/* Image / Cover Art Background */}
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            height: isSpotify ? '100%' : '60%',
                            overflow: 'hidden',
                            background: link.image ? `url(${link.image}) center/cover no-repeat` : 'rgba(255,255,255,0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flex: 1
                        }}>
                            {!link.image && <IconComponent size={40} style={{ opacity: 0.3 }} />}

                            {/* Overlay for Spotify metadata if on image */}
                            {isSpotify && (
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                                    padding: '12px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '4px'
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <Music size={14} color="#1DB954" />
                                        <span style={{ fontSize: '10px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', color: '#1DB954' }}>Spotify</span>
                                    </div>
                                    <h3 style={{ fontSize: '12px', fontWeight: '700', lineHeight: 1.2 }}>{link.title}</h3>
                                </div>
                            )}
                        </div>

                        {/* Content for non-spotify or bottom text */}
                        {!isSpotify && (
                            <div style={{ padding: '12px', flex: '0 0 auto', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '14px', fontWeight: '600' }}>{link.title}</h3>
                                {link.subtitle && <p style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>{link.subtitle}</p>}
                            </div>
                        )}

                        {/* Icon for non-spotify tiles */}
                        {!isSpotify && (
                            <div style={{ position: 'absolute', top: '10px', right: '10px', opacity: 0.5 }}>
                                <IconComponent size={16} />
                            </div>
                        )}
                    </motion.a>
                );
            })}
        </motion.div>
    );
};

export default LinkList;
