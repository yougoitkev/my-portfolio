import { Instagram, Twitter, Youtube, Linkedin, Mail } from 'lucide-react';
import { portfolioData } from '../config/portfolio';

const socialIcons = {
    Instagram,
    Twitter,
    Youtube,
    Linkedin,
    Mail
};

const Footer = () => {
    return (
        <footer style={{
            textAlign: 'center',
            paddingTop: '20px',
            borderTop: '1px solid var(--card-border)',
            marginTop: '20px'
        }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                marginBottom: '20px'
            }}>
                {portfolioData.socials.map((social, index) => {
                    const Icon = socialIcons[social.icon] || Mail;
                    return (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--text-secondary)', transition: 'var(--transition)' }}
                            onMouseOver={(e) => e.currentTarget.style.color = 'var(--accent)'}
                            onMouseOut={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <Icon size={20} />
                        </a>
                    );
                })}
            </div>
            <p style={{
                fontSize: '12px',
                color: 'var(--text-secondary)',
                opacity: 0.7
            }}>
                © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
