import React from 'react';

const About = () => {
  return (
    <section id="about" style={{ 
      background: '#241640', 
      padding: '100px 20px',
      position: 'relative',
      overflow: 'hidden',
      color: 'white'
    }}>
      
      {/* --- BACKGROUND GLOWS --- */}
      <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)',
        filter: 'blur(60px)',
        zIndex: 0
      }} />

      {/* --- MAIN CONTENT --- */}
      <div style={{ 
        maxWidth: '1200px', 
        margin: '0 auto',
        position: 'relative',
        zIndex: 10
      }}>
        
        {/* HEADER SECTION - FIXED (Removed the White Block Issue) */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            color: '#a78bfa', // Light Purple
            fontWeight: '700',
            letterSpacing: '3px',
            fontSize: '14px',
            textTransform: 'uppercase',
            display: 'block',
            marginBottom: '15px'
          }}>
            Who I Am
          </span>
          
          <h2 style={{
            fontSize: '48px',
            fontWeight: '800',
            color: '#ffffff', // Solid White (Fixes the block issue)
            textShadow: '0 0 20px rgba(255, 255, 255, 0.3)', // Adds the premium glow effect
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            About My Career
          </h2>
          
          <div style={{
            width: '80px',
            height: '4px',
            background: '#a78bfa',
            margin: '0 auto',
            borderRadius: '2px',
            boxShadow: '0 0 10px rgba(167, 139, 250, 0.5)'
          }} />
        </div>

        {/* MAIN BIO CARD */}
        <div className="glass-card" style={{
          background: 'rgba(255, 255, 255, 0.05)', // Very subtle glass
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          padding: '40px',
          marginBottom: '50px',
          textAlign: 'center',
          position: 'relative',
          boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
        }}>
          {/* Quote Icon */}
          <div style={{
            fontSize: '60px',
            color: 'rgba(255,255,255,0.1)',
            lineHeight: '1',
            marginBottom: '-20px',
            fontFamily: 'serif'
          }}>
            ❝
          </div>

          <p style={{
            fontSize: '18px',
            lineHeight: '1.8',
            color: '#e0e0e0',
            maxWidth: '850px',
            margin: '0 auto',
            padding: '20px 0'
          }}>
            Detail-oriented and sincere <strong style={{ color: '#fff', borderBottom: '2px solid #a78bfa' }}>Accounts Executive</strong> currently pursuing <strong style={{ color: '#fff' }}>B.Com (2023–2026)</strong> at Kundavai Nachiyar Government Women's Arts College, Thanjavur. Strong accounting knowledge with hands-on experience in <strong style={{ color: '#fff' }}>Excel, billing, documentation</strong>, and day-to-day financial operations. Looking for an opportunity to grow and contribute to an accounting or finance team.
          </p>
        </div>

        {/* INFO GRID */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px'
        }}>
          {[
            { icon: '🎓', title: 'Education', desc: 'B.Com Graduate' },
            { icon: '💼', title: 'Experience', desc: '2+ Years' },
            { icon: '💻', title: 'Tech Skills', desc: 'MS Excel & Tally' },
            { icon: '🚀', title: 'Goal', desc: 'Finance Expert' }
          ].map((item, i) => (
            <div 
              key={i} 
              className="hover-card"
              style={{
                background: '#2d1b4e', // Slightly lighter than background
                padding: '25px',
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'all 0.3s ease'
              }}
            >
              <div style={{ fontSize: '32px', marginBottom: '15px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '5px', color: 'white' }}>
                {item.title}
              </h3>
              <p style={{ color: '#a78bfa', margin: 0, fontSize: '15px' }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* --- CSS FOR INTERACTIONS --- */}
      <style>{`
        .hover-card:hover {
          transform: translateY(-8px);
          background: #36205d !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          border-color: rgba(167, 139, 250, 0.4) !important;
        }
        
        @media (max-width: 768px) {
          #about h2 { font-size: 32px !important; }
          .glass-card { padding: 25px !important; }
          .glass-card p { font-size: 16px !important; }
        }
      `}</style>
    </section>
  );
};

export default About;