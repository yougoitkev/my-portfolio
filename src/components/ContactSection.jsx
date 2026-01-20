import { motion } from 'framer-motion';
import { Mail, Instagram } from 'lucide-react';
import { portfolioData } from '../config/portfolio';

const ContactSection = () => {
    const email = portfolioData.email;

    return (
        <section style={{ marginBottom: '40px' }}>
            <h2 style={{
                fontSize: '18px',
                marginBottom: '16px',
                paddingLeft: '4px',
                color: 'var(--text-primary)'
            }}>
                Work With Me
            </h2>

            <div className="glass" style={{ overflow: 'hidden', padding: '24px 0' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'center' }}>

                    {/* Static Email Header */}
                    <div style={{
                        width: '100%',
                        textAlign: 'center',
                        background: 'rgba(0, 122, 255, 0.05)',
                        padding: '16px 0',
                        borderTop: '1px solid var(--card-border)',
                        borderBottom: '1px solid var(--card-border)'
                    }}>
                        <span style={{
                            fontSize: '20px',
                            fontWeight: '700',
                            letterSpacing: '2px',
                            color: 'var(--accent)',
                            textTransform: 'uppercase'
                        }}>
                            {email}
                        </span>
                    </div>

                    <div style={{ padding: '0 20px', textAlign: 'center' }}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px' }}>
                            Click to copy email or DM on Instagram
                        </p>
                        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => {
                                    navigator.clipboard.writeText(email);
                                    alert('Email copied to clipboard!');
                                }}
                                className="btn-primary"
                                style={{
                                    padding: '10px 20px',
                                    borderRadius: '12px',
                                    border: 'none',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '14px'
                                }}
                            >
                                <Mail size={18} /> Copy Email
                            </motion.button>

                            <motion.a
                                href="https://www.instagram.com/musicbykevin_/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="glass"
                                style={{
                                    padding: '10px 20px',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    fontSize: '14px'
                                }}
                            >
                                <Instagram size={18} /> Instagram DM
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
