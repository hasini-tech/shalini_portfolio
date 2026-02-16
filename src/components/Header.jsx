import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Logic to determine active section based on scroll position
      const sections = navItems.map(item => item.id);
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // 150px offset for better trigger point
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
            break;
          }
        }
      }
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      // Base color #241640 with transparency for glass effect
      background: isScrolled 
        ? 'rgba(36, 22, 64, 0.95)' 
        : 'rgba(36, 22, 64, 0.85)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      boxShadow: isScrolled 
        ? '0 10px 30px rgba(0,0,0,0.3)' 
        : '0 2px 10px rgba(0,0,0,0.1)',
      zIndex: 1000,
      padding: isScrolled ? '15px 0' : '20px 0',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          style={{ 
            fontSize: '24px',
            fontWeight: '800',
            color: 'white',
            cursor: 'pointer',
            letterSpacing: '-0.5px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}
        >
          {/* Decorative Dot */}
          <span style={{
            width: '8px',
            height: '8px',
            background: '#38bdf8', // Cyan accent
            borderRadius: '50%',
            boxShadow: '0 0 10px #38bdf8'
          }} />
          <span style={{
            background: 'linear-gradient(90deg, #ffffff, #cbd5e1)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Shalini Sebastin
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" style={{ 
          display: 'flex', 
          gap: '8px', 
          alignItems: 'center',
          background: 'rgba(255,255,255,0.03)',
          padding: '6px',
          borderRadius: '50px',
          border: '1px solid rgba(255,255,255,0.05)'
        }}>
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  setActiveSection(item.id);
                }}
                style={{
                  color: isActive ? '#ffffff' : '#94a3b8',
                  textDecoration: 'none',
                  fontWeight: isActive ? '600' : '500',
                  fontSize: '14px',
                  padding: '8px 20px',
                  borderRadius: '30px',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  background: isActive ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                  border: isActive ? '1px solid rgba(56, 189, 248, 0.2)' : '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.target.style.color = '#e2e8f0';
                    e.target.style.background = 'rgba(255,255,255,0.05)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.target.style.color = '#94a3b8';
                    e.target.style.background = 'transparent';
                  }
                }}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Button (Hamburger) */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-toggle"
          style={{
            display: 'none', // Hidden on desktop via CSS
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            fontSize: '20px',
            cursor: 'pointer',
            color: 'white',
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease'
          }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        background: '#241640', // Solid background for readability
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: isMenuOpen ? '20px' : '0',
        height: isMenuOpen ? 'auto' : '0',
        opacity: isMenuOpen ? 1 : 0,
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        {navItems.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => {
              setIsMenuOpen(false);
              setActiveSection(item.id);
            }}
            style={{
              display: 'block',
              color: activeSection === item.id ? 'white' : '#94a3b8',
              textDecoration: 'none',
              padding: '12px 20px',
              fontWeight: activeSection === item.id ? '600' : '500',
              borderRadius: '12px',
              background: activeSection === item.id 
                ? 'rgba(56, 189, 248, 0.15)' 
                : 'transparent',
              borderLeft: activeSection === item.id 
                ? '4px solid #38bdf8' 
                : '4px solid transparent',
              transition: 'all 0.2s ease',
              transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
              opacity: isMenuOpen ? 1 : 0,
              transitionDelay: `${index * 50}ms`
            }}
          >
            {item.label}
          </a>
        ))}
      </div>

      {/* CSS for responsiveness */}
      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;