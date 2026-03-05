import React, { useState } from 'react';

const Contact = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [backToTopHovered, setBackToTopHovered] = useState(false);

  const contactInfo = [
    { 
      icon: '📞', 
      label: 'Phone', 
      value: '0962 603 9456',
      color: '#0ea5e9',
      gradient: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
      link: 'tel:09626039456'
    },
    { 
      icon: '✉️', 
      label: 'Email', 
      value: 'shalinisabastin12@gmail.com',
      color: '#8b5cf6',
      gradient: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
      link: 'mailto:shalinisabastin12@gmail.com'
    },
    { 
      icon: '📍', 
      label: 'Location', 
      value: 'K.V. Naidu Nagar Vadagarai, Thanjavur',
      color: '#f59e0b',
      gradient: 'linear-gradient(135deg, #f59e0b, #d97706)',
      link: null
    }
  ];

  return (
    <section id="contact" style={{
      background: 'linear-gradient(160deg, #0f172a 0%, #1e293b 40%, #0f172a 100%)',
      color: 'white',
      padding: '100px 20px',
      position: 'relative',
      overflow: 'hidden',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      {/* Background Elements */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.06) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.06) 0%, transparent 50%)
        `,
        pointerEvents: 'none'
      }} />

      <div style={{ 
        maxWidth: '1200px', 
        width: '100%',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        
        {/* Header */}
        <div className="animate-on-scroll" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            background: 'rgba(14, 165, 233, 0.1)',
            borderRadius: '50px',
            marginBottom: '20px',
            border: '1px solid rgba(14, 165, 233, 0.2)'
          }}>
            <span style={{ width: '6px', height: '6px', background: '#0ea5e9', borderRadius: '50%' }} />
            <span style={{ fontSize: '12px', fontWeight: '700', color: '#38bdf8', letterSpacing: '1px' }}>CONTACT</span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: '800',
            marginBottom: '16px',
            lineHeight: '1.2'
          }}>
            Let's Work <span style={{ color: '#8b5cf6' }}>Together</span>
          </h2>
          <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #0ea5e9, #8b5cf6)', margin: '0 auto 20px', borderRadius: '2px' }} />
        </div>

        {/* Contact Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          marginBottom: '60px',
          justifyContent: 'center'
        }}>
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link || '#'}
              onClick={(e) => !item.link && e.preventDefault()}
              style={{ textDecoration: 'none', color: 'inherit' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div style={{
                background: hoveredIndex === index ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
                backdropFilter: 'blur(10px)',
                padding: '40px',
                borderRadius: '24px',
                border: hoveredIndex === index ? `1px solid ${item.color}50` : '1px solid rgba(255,255,255,0.05)',
                textAlign: 'center',
                transition: 'all 0.3s ease',
                transform: hoveredIndex === index ? 'translateY(-5px)' : 'none',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  background: item.gradient,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  marginBottom: '20px',
                  boxShadow: `0 10px 20px ${item.color}30`
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontSize: '14px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{item.label}</h3>
                <p style={{ fontSize: '16px', fontWeight: '600', color: 'white', margin: 0 }}>{item.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* --- SIGNATURE SECTION (FIXED ALIGNMENT) --- */}
        <div style={{
          background: 'rgba(30, 41, 59, 0.4)',
          backdropFilter: 'blur(16px)',
          borderRadius: '32px',
          padding: '50px 40px',
          border: '1px solid rgba(255,255,255,0.05)',
          maxWidth: '850px',
          margin: '0 auto',
          position: 'relative'
        }}>
          {/* Name and Badge Row (The Fix) */}
          <div className="signature-row" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
            flexWrap: 'wrap' // Ensures it wraps on mobile
          }}>
            
            {/* Name Block */}
            <div style={{ position: 'relative' }}>
              <h2 style={{
                fontSize: 'clamp(24px, 4vw, 32px)',
                fontWeight: '800',
                margin: 0,
                background: 'linear-gradient(90deg, #0ea5e9, #8b5cf6, #f59e0b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.2'
              }}>
                S Shalini Sebastin
              </h2>
              {/* Gradient Underline */}
              <div style={{
                height: '3px',
                width: '100%',
                background: 'linear-gradient(90deg, #0ea5e9, #8b5cf6, transparent)',
                marginTop: '5px',
                borderRadius: '2px'
              }} />
            </div>

            {/* Role Badge */}
            <div style={{
              background: 'rgba(30, 41, 59, 0.8)',
              padding: '10px 24px',
              borderRadius: '50px',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
            }}>
              <span style={{ width: '6px', height: '6px', background: '#0ea5e9', borderRadius: '50%', boxShadow: '0 0 8px #0ea5e9' }} />
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#e2e8f0' }}>Accounts Executive</span>
              <span style={{ color: '#475569' }}>•</span>
              <span style={{ fontSize: '13px', fontWeight: '600', color: '#cbd5e1' }}>B.Com Student</span>
            </div>

          </div>
        </div>

        {/* Back to Top */}
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <div style={{ height: '1px', width: '200px', background: 'rgba(255,255,255,0.1)', margin: '0 auto 20px' }} />
          <a 
            href="#home"
            onMouseEnter={() => setBackToTopHovered(true)}
            onMouseLeave={() => setBackToTopHovered(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: backToTopHovered ? '#0ea5e9' : 'rgba(255,255,255,0.05)',
              color: 'white',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              border: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            ↑
          </a>
        </div>
      </div>

      {/* Responsive Styles */}
      <style>{`
        @media (max-width: 768px) {
          .signature-row {
            flex-direction: column !important;
            gap: 25px !important;
            text-align: center;
          }
          #contact {
            padding: 60px 20px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact;