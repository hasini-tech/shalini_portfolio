import React, { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  // Handle Mouse Move for 3D Tilt Effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25; // Sensitivity
      const y = (e.clientY - top - height / 2) / 25;
      
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" style={{
      paddingTop: '80px', // Adjusted for better centering
      background: 'radial-gradient(circle at top right, #2d1b4e 0%, #1a102e 100%)', // Deeper, more premium purple
      color: 'white',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* --- BACKGROUND EFFECTS --- */}
      
      {/* 1. Grid Pattern Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.5
      }} />

      {/* 2. Glowing Orbs */}
      <div className="orb" style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(118, 75, 162, 0.4) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0
      }} />
      
      <div className="orb" style={{
        position: 'absolute',
        bottom: '0%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        zIndex: 0
      }} />


      {/* --- MAIN CONTENT GRID --- */}
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        margin: '0 auto',
        padding: '0 25px',
        display: 'grid',
        gridTemplateColumns: '1.2fr 1fr',
        gap: '40px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 10
      }}>

        {/* --- LEFT COLUMN: TEXT --- */}
        <div style={{ paddingTop: '20px' }}>
          
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '8px 20px',
            background: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '50px',
            marginBottom: '30px',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            animation: 'fadeIn 0.8s ease-out'
          }}>
            <span style={{ fontSize: '18px', marginRight: '10px' }}>✨</span>
            <span style={{ fontSize: '14px', fontWeight: '600', letterSpacing: '0.5px' }}>
              OPEN TO WORK
            </span>
          </div>

          {/* Name with Gradient Text */}
          <h1 style={{ 
            fontSize: 'clamp(45px, 5vw, 75px)', // Responsive font size
            marginBottom: '15px',
            fontWeight: '800',
            lineHeight: '1.1',
            letterSpacing: '-2px',
            background: 'linear-gradient(90deg, #ffffff 0%, #b8c6db 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            animation: 'slideUp 0.8s ease-out 0.2s backwards'
          }}>
            Shalini<br />
            <span style={{ color: '#a78bfa', WebkitTextFillColor: '#a78bfa' }}>Sebastin</span>
          </h1>

          {/* Role */}
          <h2 style={{ 
            fontSize: '22px', 
            color: '#a78bfa', // Light purple accent
            marginBottom: '30px', 
            fontWeight: '600',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            animation: 'slideUp 0.8s ease-out 0.4s backwards'
          }}>
            Accounts Executive & Commerce Graduate
          </h2>

          <p style={{ 
            fontSize: '17px', 
            lineHeight: '1.8',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '45px', 
            maxWidth: '500px',
            animation: 'slideUp 0.8s ease-out 0.6s backwards'
          }}>
            Detail-oriented professional specializing in accounting operations, 
            financial documentation, and office administration. Transforming numbers into actionable insights.
          </p>

          {/* Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            flexWrap: 'wrap',
            animation: 'slideUp 0.8s ease-out 0.8s backwards'
          }}>
            <a href="#contact" className="glow-button" style={{
              background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '16px 45px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '700',
              fontSize: '16px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 10px 30px rgba(118, 75, 162, 0.4)',
              transition: 'transform 0.2s ease',
              display: 'inline-block'
            }}>
              Let's Talk
            </a>

            <a href="#experience" style={{
              background: 'transparent',
              color: 'white',
              padding: '16px 40px',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '16px',
              border: '1px solid rgba(255,255,255,0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <span>My Experience</span>
              <span>↓</span>
            </a>
          </div>

          {/* Mini Stats Row */}
          <div style={{
            marginTop: '60px',
            display: 'flex',
            gap: '50px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '30px',
            animation: 'fadeIn 1s ease 1s backwards'
          }}>
            {[
              { val: '2+', label: 'Years Exp.' },
              { val: '100%', label: 'Commitment' },
              { val: '5+', label: 'Certifications' }
            ].map((item, i) => (
              <div key={i}>
                <div style={{ fontSize: '24px', fontWeight: '800', color: 'white' }}>{item.val}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* --- RIGHT COLUMN: 3D INTERACTIVE IMAGE --- */}
        <div 
          ref={containerRef}
          style={{
            perspective: '1000px', // Creates the 3D space
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            animation: 'fadeIn 1.5s ease'
          }}
        >
          {/* The Tilt Card */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            transform: `rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`, // The Magic 3D Movement
            transition: 'transform 0.1s ease-out',
            transformStyle: 'preserve-3d'
          }}>
            
            {/* Glass Background Card */}
            <div style={{
              position: 'absolute',
              inset: '-20px',
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '40px',
              transform: 'translateZ(-50px)', // Pushes it back
              border: '1px solid rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }} />

            {/* The Image */}
            <img 
              src="/images/shal.png" 
              alt="Shalini Sebastin"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '30px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 35px 60px -15px rgba(0, 0, 0, 0.6)',
                transform: 'translateZ(20px)', // Pops it forward
                display: 'block',
                position: 'relative',
                zIndex: 2,
                objectFit: 'cover'
              }}
            />

            {/* Floating Decorative Elements around image */}
            <div style={{
              position: 'absolute',
              top: '10%',
              right: '-30px',
              background: '#ffffff',
              color: '#667eea',
              padding: '12px 20px',
              borderRadius: '15px',
              fontWeight: '700',
              fontSize: '14px',
              boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
              transform: 'translateZ(60px)', // Pops out more
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <span>📊</span> Accounting
            </div>

            <div style={{
              position: 'absolute',
              bottom: '15%',
              left: '-30px',
              background: 'rgba(30, 30, 40, 0.9)',
              color: 'white',
              padding: '15px',
              borderRadius: '20px',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(10px)',
              transform: 'translateZ(40px)',
              boxShadow: '0 10px 20px rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
               <div style={{ 
                 width: '10px', height: '10px', background: '#4ade80', borderRadius: '50%',
                 boxShadow: '0 0 10px #4ade80' 
               }} />
               <div style={{ fontSize: '12px', fontWeight: '500' }}>Active & Ready</div>
            </div>

          </div>
        </div>
      </div>

      {/* --- CSS ANIMATIONS --- */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .glow-button:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 15px 40px rgba(118, 75, 162, 0.6) !important;
        }
        
        @media (max-width: 968px) {
          #home > div {
            grid-template-columns: 1fr !important;
            text-align: center;
            gap: 60px;
          }
          #home .orb { display: none; }
          /* Reset tilt on mobile */
          #home img { transform: none !important; }
          /* Reorder for mobile */
          #home > div > div:first-child { order: 2; }
          #home > div > div:last-child { order: 1; margin-top: 20px; }
          /* Center stats on mobile */
          #home > div > div:first-child > div:last-child {
            justify-content: center;
          }
          #home > div > div:first-child > div:nth-child(5) {
             justify-content: center;
          }
          /* Adjust Floating badges on mobile */
          #home > div > div:last-child > div > div:nth-child(3),
          #home > div > div:last-child > div > div:nth-child(4) {
            display: none; 
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;