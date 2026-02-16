import React, { useState } from 'react';

const Achievements = () => {
  // State for hover effects
  const [hoveredAchievement, setHoveredAchievement] = useState(null);
  const [hoveredHobby, setHoveredHobby] = useState(null);

  const achievements = [
    {
      title: 'Essay Competition',
      description: 'Secured first place at school level in Katturai (Essay) competition.',
      icon: '📝',
      color: '#f87171', // Red/Orange
      award: '1st Place'
    },
    {
      title: 'Speech Competition',
      description: 'Won first prize at school level in speech competition.',
      icon: '🎤',
      color: '#60a5fa', // Blue
      award: '1st Prize'
    },
    {
      title: 'Entrepreneurship Event',
      description: 'Participated in Kalluri Kalai Thiruvila – Start-up Siruthai Event.',
      icon: '💡',
      color: '#fbbf24', // Gold
      award: 'Participant'
    }
  ];

  const hobbies = [
    { text: 'Reading & Writing', icon: '📚', color: '#a78bfa' },
    { text: 'Passionate Dancer', icon: '💃', color: '#f472b6' },
    { text: 'Music Enthusiast', icon: '🎵', color: '#2dd4bf' },
    { text: 'Writing Poems', icon: '✍️', color: '#4ade80' }
  ];

  const academyActivities = [
    {
      title: 'Academic Assignments',
      description: 'Completed comprehensive assignments on accounting, finance, and business mathematics.',
      icon: '📚',
      color: '#818cf8'
    },
    {
      title: 'Department Activities',
      description: 'Actively participated in commerce department activities, seminars, and workshops.',
      icon: '🎓',
      color: '#c084fc'
    }
  ];

  return (
    <section id="achievements" style={{ 
      background: '#241640', // Deep Purple Background
      padding: '100px 20px',
      position: 'relative',
      overflow: 'hidden',
      color: 'white'
    }}>
      
      {/* --- BACKGROUND GLOWS --- */}
      <div style={{
        position: 'absolute', top: '10%', left: '-10%', width: '600px', height: '600px',
        background: 'radial-gradient(circle, rgba(167, 139, 250, 0.1) 0%, transparent 70%)',
        filter: 'blur(80px)', borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '-10%', width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(96, 165, 250, 0.1) 0%, transparent 70%)',
        filter: 'blur(80px)', borderRadius: '50%'
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* --- HEADER --- */}
        <div style={{ textAlign: 'center', marginBottom: '70px' }}>
          <span style={{
            color: '#a78bfa', fontWeight: '700', letterSpacing: '3px', fontSize: '13px',
            textTransform: 'uppercase', marginBottom: '10px', display: 'block'
          }}>
            Milestones & Interests
          </span>
          <h2 style={{
            fontSize: '42px', fontWeight: '800', marginBottom: '10px', color: 'white',
            textShadow: '0 0 25px rgba(167, 139, 250, 0.4)'
          }}>
            Achievements
          </h2>
          <div style={{
            width: '60px', height: '4px', background: '#a78bfa', margin: '0 auto',
            borderRadius: '2px', boxShadow: '0 0 10px rgba(167, 139, 250, 0.5)'
          }} />
        </div>

        {/* --- GRID LAYOUT --- */}
        <div className="content-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 0.7fr',
          gap: '40px',
          marginBottom: '60px'
        }}>
          
          {/* LEFT: ACHIEVEMENTS LIST */}
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '28px' }}>🏆</span> Awards & Recognition
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {achievements.map((item, index) => (
                <div 
                  key={index}
                  onMouseEnter={() => setHoveredAchievement(index)}
                  onMouseLeave={() => setHoveredAchievement(null)}
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: hoveredAchievement === index ? `1px solid ${item.color}` : '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '20px',
                    padding: '25px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                    transition: 'all 0.3s ease',
                    transform: hoveredAchievement === index ? 'translateX(10px)' : 'translateX(0)',
                    boxShadow: hoveredAchievement === index ? `0 10px 30px -10px ${item.color}30` : 'none',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  {/* Glow Effect behind icon */}
                  <div style={{
                    position: 'absolute', left: '0', top: '0', bottom: '0', width: '4px',
                    background: item.color, opacity: hoveredAchievement === index ? 1 : 0.5,
                    transition: '0.3s'
                  }} />

                  <div style={{
                    minWidth: '60px', height: '60px', borderRadius: '15px',
                    background: `rgba(255,255,255,0.05)`, border: `1px solid ${item.color}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px',
                    boxShadow: `0 0 15px -5px ${item.color}40`
                  }}>
                    {item.icon}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                      <h4 style={{ fontSize: '20px', fontWeight: '700', margin: 0, color: 'white' }}>{item.title}</h4>
                      <span style={{ 
                        fontSize: '12px', fontWeight: '700', color: item.color,
                        background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '10px',
                        border: `1px solid ${item.color}30`
                      }}>
                        {item.award}
                      </span>
                    </div>
                    <p style={{ fontSize: '15px', color: '#cbd5e1', margin: 0, lineHeight: '1.5' }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: HOBBIES CLOUD */}
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '28px' }}>✨</span> Personal Interests
            </h3>

            <div style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderRadius: '24px',
              padding: '30px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              height: 'calc(100% - 60px)' // Adjust based on header
            }}>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                {hobbies.map((hobby, index) => (
                  <div 
                    key={index}
                    onMouseEnter={() => setHoveredHobby(index)}
                    onMouseLeave={() => setHoveredHobby(null)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      padding: '12px 20px',
                      borderRadius: '50px',
                      background: hoveredHobby === index ? hobby.color : 'rgba(255,255,255,0.05)',
                      color: hoveredHobby === index ? '#241640' : '#e2e8f0',
                      fontWeight: hoveredHobby === index ? '700' : '500',
                      border: `1px solid ${hoveredHobby === index ? hobby.color : 'rgba(255,255,255,0.1)'}`,
                      cursor: 'default',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      transform: hoveredHobby === index ? 'scale(1.05)' : 'scale(1)',
                      boxShadow: hoveredHobby === index ? `0 0 20px ${hobby.color}` : 'none'
                    }}
                  >
                    <span>{hobby.icon}</span>
                    <span>{hobby.text}</span>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: '30px', fontSize: '14px', color: '#94a3b8', fontStyle: 'italic', textAlign: 'center' }}>
                "Passionate about exploring creativity through arts and literature."
              </p>
            </div>
          </div>
        </div>

        {/* --- ACADEMY ACTIVITIES (Full Width) --- */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.05) 0%, rgba(96, 165, 250, 0.05) 100%)',
          borderRadius: '30px',
          padding: '50px',
          border: '1px solid rgba(167, 139, 250, 0.2)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative Blur */}
          <div style={{
            position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px',
            background: 'rgba(255,255,255,0.05)', borderRadius: '50%', filter: 'blur(50px)'
          }} />

          <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 1 }}>
            <h3 style={{ fontSize: '28px', fontWeight: '800', color: 'white', marginBottom: '10px' }}>
              Academic Involvement
            </h3>
            <p style={{ color: '#cbd5e1' }}>Active engagement in collegiate and departmental activities.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {academyActivities.map((act, idx) => (
              <div 
                key={idx}
                className="academy-card"
                style={{
                  background: 'rgba(24, 24, 27, 0.4)',
                  padding: '30px', borderRadius: '20px', textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.05)',
                  transition: '0.3s'
                }}
              >
                <div style={{
                  width: '70px', height: '70px', margin: '0 auto 20px',
                  background: 'rgba(255,255,255,0.05)', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px',
                  border: `2px solid ${act.color}40`
                }}>
                  {act.icon}
                </div>
                <h4 style={{ fontSize: '20px', fontWeight: '700', color: 'white', marginBottom: '10px' }}>{act.title}</h4>
                <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.6' }}>{act.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* --- CSS STYLES --- */}
      <style>{`
        .academy-card:hover {
          background: rgba(255,255,255,0.1) !important;
          transform: translateY(-8px);
          border-color: rgba(167, 139, 250, 0.3) !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }

        @media (max-width: 968px) {
          .content-grid { grid-template-columns: 1fr !important; }
          #achievements { padding: 80px 20px !important; }
          #achievements h2 { fontSize: 32px !important; }
        }
      `}</style>
    </section>
  );
};

export default Achievements;