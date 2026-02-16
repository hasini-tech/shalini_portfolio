import React, { useState } from 'react';

const Skills = () => {
  // State to track which card is being hovered for specific glow effects
  const [hoveredCard, setHoveredCard] = useState(null);

  const skills = {
    'Technical Skills': {
      icon: '💻',
      color: '#60a5fa', // Blue
      items: [
        { name: 'MS Excel Proficient', level: 90 },
        { name: 'Accounting Fundamentals', level: 85 },
        { name: 'Billing & Invoice Preparation', level: 95 },
        { name: 'Documentation & Filing', level: 88 },
        { name: 'Certificates Registration', level: 80 }
      ]
    },
    'Soft Skills': {
      icon: '🎯',
      color: '#a78bfa', // Purple
      items: [
        { name: 'Communication', level: 85 },
        { name: 'Team Support', level: 90 },
        { name: 'Fast Learner', level: 95 },
        { name: 'Good Numerical Skills', level: 92 },
        { name: 'Responsible & Disciplined', level: 93 },
        { name: 'Ability to Meet Deadlines', level: 88 }
      ]
    },
    'Languages': {
      icon: '🗣️',
      color: '#f87171', // Red/Pink
      items: [
        { name: 'Tamil', level: 100, detail: 'Fluent - Speak, Write, Read' },
        { name: 'English', level: 70, detail: 'Basic - Speak, Write, Read' }
      ]
    },
    'Certifications': {
      icon: '🏅',
      color: '#4ade80', // Green
      items: [
        'Certified by Nandi Foundation',
        'Banking and Back Office Operations (Naan Mudhalvan)',
        'Audit-related Internship Certificate'
      ]
    }
  };

  return (
    <section id="skills" style={{
      background: '#241640', // Deep Purple Background
      padding: '100px 20px',
      position: 'relative',
      overflow: 'hidden',
      color: 'white'
    }}>
      
      {/* --- BACKGROUND AMBIENCE --- */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%)',
        filter: 'blur(80px)',
        borderRadius: '50%',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%)',
        filter: 'blur(80px)',
        borderRadius: '50%',
        zIndex: 0
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* --- HEADER --- */}
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <span style={{
            color: '#a78bfa',
            fontWeight: '700',
            letterSpacing: '3px',
            fontSize: '13px',
            textTransform: 'uppercase',
            marginBottom: '10px',
            display: 'block'
          }}>
            What I Bring
          </span>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '800',
            marginBottom: '10px',
            color: 'white',
            textShadow: '0 0 25px rgba(167, 139, 250, 0.4)'
          }}>
            Skills & Certifications
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: '#a78bfa',
            margin: '0 auto',
            borderRadius: '2px',
            boxShadow: '0 0 10px rgba(167, 139, 250, 0.5)'
          }} />
        </div>

        {/* --- SKILLS GRID --- */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '30px'
        }}>
          {Object.entries(skills).map(([category, data], index) => (
            <div 
              key={category}
              className="skill-card"
              onMouseEnter={() => setHoveredCard(category)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                background: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(12px)',
                border: hoveredCard === category ? `1px solid ${data.color}` : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '24px',
                padding: '35px',
                transition: 'all 0.3s ease',
                transform: hoveredCard === category ? 'translateY(-10px)' : 'translateY(0)',
                boxShadow: hoveredCard === category ? `0 20px 40px -10px ${data.color}30` : 'none'
              }}
            >
              {/* Card Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '30px', paddingBottom: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{
                  width: '55px', height: '55px',
                  borderRadius: '16px',
                  background: `rgba(255,255,255,0.05)`,
                  border: `1px solid ${data.color}50`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '26px',
                  boxShadow: `0 0 15px ${data.color}20`
                }}>
                  {data.icon}
                </div>
                <h3 style={{ fontSize: '22px', fontWeight: '700', margin: 0 }}>{category}</h3>
              </div>

              {/* Items List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {data.items.map((item, idx) => {
                  const isObject = typeof item === 'object';
                  const itemName = isObject ? item.name : item;
                  const itemLevel = isObject ? item.level : null;

                  return (
                    <div key={idx}>
                      {/* IF IT HAS A PROGRESS BAR */}
                      {itemLevel !== undefined && itemLevel !== null ? (
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '15px' }}>
                            <span style={{ fontWeight: '600', color: '#e2e8f0' }}>{itemName}</span>
                            <span style={{ color: data.color, fontWeight: '700' }}>{itemLevel}%</span>
                          </div>
                          {item.detail && <div style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '6px' }}>{item.detail}</div>}
                          
                          <div style={{ height: '6px', background: 'rgba(255,255,255,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
                            <div style={{
                              height: '100%', width: `${itemLevel}%`,
                              background: data.color,
                              boxShadow: `0 0 10px ${data.color}`,
                              borderRadius: '10px',
                              transition: 'width 1s ease'
                            }} />
                          </div>
                        </div>
                      ) : (
                        /* IF IT IS A LIST ITEM (CERTIFICATIONS) */
                        <div className="list-item" style={{
                          display: 'flex', alignItems: 'center', gap: '12px',
                          padding: '12px', borderRadius: '12px',
                          background: 'rgba(255,255,255,0.02)',
                          transition: '0.3s'
                        }}>
                          <div style={{ color: data.color, fontSize: '14px' }}>✓</div>
                          <span style={{ fontSize: '15px', color: '#cbd5e1' }}>{itemName}</span>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* --- BOTTOM CALL TO ACTION --- */}
        <div style={{
          marginTop: '80px',
          background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.15) 0%, rgba(96, 165, 250, 0.1) 100%)',
          border: '1px solid rgba(167, 139, 250, 0.3)',
          borderRadius: '30px',
          padding: '50px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
        }}>
          {/* Decorative Glow inside CTA */}
          <div style={{
            position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)',
            width: '300px', height: '300px', background: '#a78bfa', filter: 'blur(100px)', opacity: 0.2
          }} />

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ fontSize: '40px', marginBottom: '20px', animation: 'float 3s infinite ease-in-out' }}>🚀</div>
            <h3 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '15px' }}>
              Ready to Contribute?
            </h3>
            <p style={{ fontSize: '18px', color: '#cbd5e1', maxWidth: '600px', margin: '0 auto 35px' }}>
              Combining technical expertise with dedication to deliver exceptional results in accounting and finance.
            </p>
            
            <a href="#contact" className="glow-btn">
              Let's Connect →
            </a>
          </div>
        </div>

      </div>

      {/* --- CSS STYLES --- */}
      <style>{`
        /* List Item Hover */
        .list-item:hover {
          background: rgba(255,255,255,0.08) !important;
          transform: translateX(5px);
        }

        /* Glow Button */
        .glow-btn {
          display: inline-block;
          background: white;
          color: #241640;
          font-weight: 800;
          padding: 16px 40px;
          border-radius: 50px;
          text-decoration: none;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
        }
        .glow-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 0 35px rgba(255, 255, 255, 0.5);
        }

        /* Float Animation */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @media (max-width: 768px) {
          #skills { padding: 80px 20px !important; }
          #skills h2 { fontSize: 32px !important; }
        }
      `}</style>
    </section>
  );
};

export default Skills;