import React from 'react';

const Experience = () => {
  const responsibilities = [
    {
      text: 'Handled daily accounting entries: purchase, sales, expenses, petty cash',
      icon: '💰',
      color: '#4ade80' // Green
    },
    {
      text: 'Prepared invoices, bills, and updated financial records',
      icon: '📄',
      color: '#60a5fa' // Blue
    },
    {
      text: 'Maintained ledgers and assisted with monthly financial statements',
      icon: '📊',
      color: '#a78bfa' // Purple
    },
    {
      text: 'Coordinated vendor and customer payment follow-ups',
      icon: '🤝',
      color: '#f472b6' // Pink
    },
    {
      text: 'Maintained documentation and assisted in office administration',
      icon: '📁',
      color: '#fbbf24' // Yellow
    },
    {
      text: 'Supported management with Excel-based reports',
      icon: '📈',
      color: '#2dd4bf' // Teal
    }
  ];

  return (
    <section id="experience" style={{ 
      background: '#241640', // Deep Purple Background
      padding: '100px 20px',
      position: 'relative',
      overflow: 'hidden',
      color: 'white'
    }}>
      
      {/* --- BACKGROUND GLOWS --- */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '20%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%)',
        filter: 'blur(80px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '0',
        right: '0',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%)',
        filter: 'blur(60px)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* --- HEADER --- */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{
            color: '#a78bfa',
            fontWeight: '700',
            letterSpacing: '3px',
            fontSize: '13px',
            textTransform: 'uppercase',
            marginBottom: '10px',
            display: 'block'
          }}>
            Professional Career
          </span>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '800',
            marginBottom: '10px',
            color: 'white',
            textShadow: '0 0 20px rgba(167, 139, 250, 0.5)'
          }}>
            Work Experience
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

        {/* --- MAIN GLASS CARD --- */}
        <div className="glass-card" style={{
          background: 'rgba(255, 255, 255, 0.03)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '30px',
          padding: '50px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Top Gradient Border */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #a78bfa, #60a5fa)',
          }} />

          {/* Job Title Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '30px',
            marginBottom: '50px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            paddingBottom: '30px'
          }}>
            <div>
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '10px', 
                background: 'rgba(167, 139, 250, 0.15)', 
                padding: '8px 16px', 
                borderRadius: '50px',
                marginBottom: '15px',
                border: '1px solid rgba(167, 139, 250, 0.3)'
              }}>
                <span style={{ fontSize: '18px' }}>💼</span>
                <span style={{ color: '#d8b4fe', fontWeight: '600', fontSize: '14px' }}>Full-time Role</span>
              </div>
              <h3 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '5px', color: 'white' }}>
                Accounts & Office Assistant
              </h3>
              <p style={{ fontSize: '20px', color: '#a78bfa', fontWeight: '600' }}>
                Vaseegrah Veda
              </p>
            </div>

            <div style={{ textAlign: 'right' }}>
              <div style={{
                fontSize: '16px',
                fontWeight: '700',
                color: 'white',
                background: 'linear-gradient(135deg, #a78bfa 0%, #7c3aed 100%)',
                padding: '12px 24px',
                borderRadius: '12px',
                boxShadow: '0 10px 20px -5px rgba(124, 58, 237, 0.4)',
                marginBottom: '8px',
                display: 'inline-block'
              }}>
                Dec 2023 – Oct 2025
              </div>
              <div style={{ color: '#94a3b8', fontSize: '14px', fontWeight: '500', marginTop: '5px' }}>
                Duration: 1 Year 10 Months
              </div>
            </div>
          </div>

          {/* Responsibilities Grid */}
          <h4 style={{ 
            fontSize: '20px', 
            fontWeight: '700', 
            marginBottom: '30px', 
            color: 'white',
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px' 
          }}>
            <span style={{ width: '4px', height: '24px', background: '#a78bfa', borderRadius: '4px' }} />
            Key Responsibilities
          </h4>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {responsibilities.map((item, index) => (
              <div 
                key={index}
                className="hover-card"
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '16px',
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '15px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  minWidth: '45px',
                  height: '45px',
                  borderRadius: '12px',
                  background: `rgba(255,255,255,0.05)`,
                  border: `1px solid ${item.color}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '22px',
                  boxShadow: `0 0 15px -5px ${item.color}40`
                }}>
                  {item.icon}
                </div>
                <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.6', margin: 0 }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Achievement Box */}
          <div style={{
            marginTop: '40px',
            background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.1) 0%, rgba(96, 165, 250, 0.05) 100%)',
            border: '1px dashed rgba(167, 139, 250, 0.4)',
            borderRadius: '20px',
            padding: '25px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px'
          }}>
            <span style={{ fontSize: '30px' }}>🏆</span>
            <p style={{ fontSize: '16px', fontWeight: '600', color: '#e2e8f0', margin: 0 }}>
              Successfully managed accounting operations with <span style={{ color: '#a78bfa' }}>100% accuracy</span> in financial documentation.
            </p>
          </div>

        </div>
      </div>

      {/* --- CSS FOR HOVER EFFECTS --- */}
      <style>{`
        .hover-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(167, 139, 250, 0.3) !important;
          box-shadow: 0 10px 20px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .glass-card { padding: 30px 20px !important; }
          .glass-card h3 { fontSize: 24px !important; }
          .glass-card > div:first-child > div:last-child { text-align: left !important; margin-top: 20px; }
          #experience h2 { fontSize: 32px !important; }
        }
      `}</style>
    </section>
  );
};

export default Experience;