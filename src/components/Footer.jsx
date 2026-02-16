import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/', // Update with your actual profile
      path: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' 
    },
    { 
      name: 'Email', 
      url: 'mailto:shalinisabastin12@gmail.com', 
      path: 'M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' 
    },
    { 
      name: 'Phone', 
      url: 'tel:09626039456', 
      path: 'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z' 
    }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #241640 0%, #1a102e 100%)', // Fixed duplicate key
      color: '#e2e8f0',
      padding: '40px 20px 20px',
      fontSize: '13px',
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255,255,255,0.05)'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '30px',
          marginBottom: '30px',
          textAlign: 'left'
        }}>
          {/* Brand & Social Section */}
          <div>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              marginBottom: '10px',
              color: 'white',
              letterSpacing: '0.5px'
            }}>
              Shalini Sebastin
            </h3>
            <p style={{
              fontSize: '13px',
              color: '#94a3b8',
              lineHeight: '1.5',
              marginBottom: '15px',
              maxWidth: '280px'
            }}>
              Detail-oriented Accounts Executive dedicated to excellence in financial operations.
            </p>
            
            {/* Social Media Icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(255,255,255,0.08)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#8b5cf6';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    width="16" 
                    height="16" 
                    fill="currentColor"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '15px', color: 'white' }}>
              Quick Links
            </h4>
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              margin: 0, 
              display: 'grid', 
              gridTemplateColumns: '1fr 1fr', 
              gap: '8px' 
            }}>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    style={{
                      color: '#cbd5e1',
                      textDecoration: 'none',
                      fontSize: '13px',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = '#a78bfa';
                      e.target.style.paddingLeft = '3px';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = '#cbd5e1';
                      e.target.style.paddingLeft = '0px';
                    }}
                  >
                    › {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '15px', color: 'white' }}>
              Contact Info
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}>
                <span style={{ fontSize: '14px', opacity: 0.8 }}>✉️</span>
                <span>shalinisabastin12@gmail.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#cbd5e1' }}>
                <span style={{ fontSize: '14px', opacity: 0.8 }}>📍</span>
                <span>Thanjavur, Tamil Nadu</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ 
          height: '1px', 
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)', 
          margin: '20px 0' 
        }} />

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '15px'
        }}>
          <p style={{ fontSize: '12px', color: '#64748b', margin: 0 }}>
            © {currentYear} Shalini Sebastin. All rights reserved.
          </p>

          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {['Accounts', 'Finance', 'B.Com'].map((tag, index) => (
              <span 
                key={index}
                style={{
                  background: 'rgba(255,255,255,0.03)',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  fontSize: '11px',
                  color: '#94a3b8',
                  border: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer { padding: 30px 15px 15px !important; }
          footer > div > div:first-child { 
            grid-template-columns: 1fr !important; 
            text-align: center !important;
            gap: 25px !important;
          }
          footer ul { 
            display: flex !important; 
            flex-direction: column; 
            align-items: center; 
          }
          footer .social-icons {
            justify-content: center;
          }
          footer h3, footer h4 {
            text-align: center;
          }
          footer > div > div:first-child > div:first-child > div {
             justify-content: center;
          }
           footer > div > div:first-child > div:last-child > div {
             align-items: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;