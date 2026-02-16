import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'B.COM',
      institution: 'Kunthavai Naacchiyaar Govt Arts College For Women',
      period: '2023 - 2026',
      status: 'Pursuing',
      icon: '🎓',
      color: '#a78bfa', // Light Purple
      glow: 'rgba(167, 139, 250, 0.4)'
    },
    {
      degree: 'HSC',
      institution: 'Kalyana Sundaram Higher Secondary School',
      period: '2021 - 2023',
      percentage: '92.5%',
      icon: '📚',
      color: '#4ade80', // Neon Green
      glow: 'rgba(74, 222, 128, 0.4)'
    },
    {
      degree: 'SSLC',
      institution: 'Kalyana Sundaram Higher Secondary School',
      period: '2020 - 2021',
      percentage: 'Pass',
      icon: '✨',
      color: '#60a5fa', // Blue
      glow: 'rgba(96, 165, 250, 0.4)'
    }
  ];

  return (
    <section id="education" style={{
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
        left: '0',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(118, 75, 162, 0.15) 0%, transparent 70%)',
        filter: 'blur(80px)',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '0',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)',
        filter: 'blur(80px)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* --- HEADER --- */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{
            color: '#a78bfa',
            fontWeight: '700',
            letterSpacing: '3px',
            fontSize: '13px',
            textTransform: 'uppercase',
            marginBottom: '10px',
            display: 'block'
          }}>
            My Journey
          </span>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '800',
            marginBottom: '10px',
            background: 'linear-gradient(to right, #ffffff, #c4b5fd)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Education Timeline
          </h2>
          <div style={{
            width: '60px',
            height: '4px',
            background: '#a78bfa',
            margin: '0 auto',
            borderRadius: '2px',
            boxShadow: '0 0 15px rgba(167, 139, 250, 0.5)'
          }} />
        </div>

        {/* --- TIMELINE CONTAINER --- */}
        <div style={{ position: 'relative', padding: '10px 0' }}>
          
          {/* Central Neon Line */}
          <div className="timeline-line" style={{
            position: 'absolute',
            left: '50%',
            top: '0',
            bottom: '0',
            width: '2px',
            background: 'linear-gradient(to bottom, transparent, #a78bfa, #60a5fa, transparent)',
            transform: 'translateX(-50%)',
            boxShadow: '0 0 15px rgba(167, 139, 250, 0.3)'
          }} />

          {/* --- EDUCATION CARDS LOOP --- */}
          {educationData.map((edu, index) => (
            <div 
              key={index}
              style={{
                display: 'flex',
                justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
                alignItems: 'center',
                marginBottom: '50px',
                position: 'relative'
              }}
              className="timeline-item"
            >
              {/* Center Dot (The glowing connector) */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '16px',
                height: '16px',
                background: '#241640',
                border: `3px solid ${edu.color}`,
                borderRadius: '50%',
                zIndex: 2,
                boxShadow: `0 0 15px ${edu.color}`
              }} />

              {/* The Glass Card */}
              <div 
                className="edu-card"
                style={{
                  width: '45%',
                  background: 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '20px',
                  padding: '30px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
              >
                {/* Connector Line to Center */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  [index % 2 === 0 ? 'right' : 'left']: '-30px', // Adjusted for spacing
                  width: '30px',
                  height: '1px',
                  background: `linear-gradient(to ${index % 2 === 0 ? 'left' : 'right'}, ${edu.color}, transparent)`,
                  opacity: 0.5
                }} />

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
                  {/* Icon Box */}
                  <div style={{
                    minWidth: '60px',
                    height: '60px',
                    borderRadius: '15px',
                    background: `linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))`,
                    border: `1px solid ${edu.color}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '28px',
                    boxShadow: `0 0 20px -5px ${edu.glow}`
                  }}>
                    {edu.icon}
                  </div>

                  {/* Text Content */}
                  <div>
                    <div style={{
                      display: 'inline-block',
                      fontSize: '12px',
                      fontWeight: '700',
                      color: edu.color,
                      border: `1px solid ${edu.color}40`,
                      padding: '4px 12px',
                      borderRadius: '50px',
                      marginBottom: '10px',
                      boxShadow: `0 0 10px ${edu.color}20`
                    }}>
                      {edu.period}
                    </div>

                    <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '5px', color: 'white' }}>
                      {edu.degree}
                    </h3>
                    
                    <p style={{ fontSize: '15px', color: '#cbd5e1', marginBottom: '15px', lineHeight: '1.5' }}>
                      {edu.institution}
                    </p>

                    {/* Status / Percentage Badge */}
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(255,255,255,0.05)',
                      padding: '8px 16px',
                      borderRadius: '10px',
                      fontSize: '14px',
                      fontWeight: '600',
                      color: 'white'
                    }}>
                      <span style={{ color: edu.color }}>
                        {edu.status === 'Pursuing' ? '⚡' : '🏆'}
                      </span>
                      {edu.status || edu.percentage}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- RESPONSIVE & INTERACTIVE CSS --- */}
      <style>{`
        /* Hover Effects */
        .edu-card:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.06) !important;
          border-color: rgba(255, 255, 255, 0.2) !important;
          box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.3);
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .timeline-line { left: 20px !important; }
          .timeline-item { justify-content: flex-start !important; padding-left: 50px; }
          .timeline-item > div:first-child { left: 20px !important; } /* Dot position */
          .edu-card { width: 100% !important; }
          .edu-card > div:first-child { display: none; } /* Hide connector line on mobile */
          
          #education h2 { font-size: 32px !important; }
        }
      `}</style>
    </section>
  );
};

export default Education;