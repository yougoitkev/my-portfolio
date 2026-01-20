import { motion } from 'framer-motion';
import { portfolioData } from '../config/portfolio';

const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: 'center', marginBottom: '40px' }}
        >
            <div style={{ marginBottom: '20px' }}>
                <div style={{
                    width: '96px',
                    height: '96px',
                    borderRadius: '50%',
                    background: `url(assets/instagram-cover.jpg) center/cover no-repeat`,
                    margin: '0 auto',
                    border: '2px solid var(--card-border)',
                    boxShadow: '0 0 20px rgba(0, 122, 255, 0.2)'
                }}>
                </div>
            </div>

            <h1 style={{ fontSize: '24px', marginBottom: '8px' }}>{portfolioData.name}</h1>

            <p style={{
                color: 'var(--text-secondary)',
                fontSize: '14px',
                fontWeight: '500',
                marginBottom: '16px'
            }}>
                {portfolioData.roles.join(' • ')}
            </p>

            <div className="glass" style={{
                padding: '12px 20px',
                fontSize: '13px',
                color: 'var(--text-secondary)',
                display: 'inline-block'
            }}>
                {portfolioData.note}
            </div>
        </motion.section>
    );
};

export default Hero;
