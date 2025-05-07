import React, { useState, useEffect } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed w-full z-10 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#1D3557] shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="flex">
              <div className="bg-[#1D3557] p-2">
                <span className="text-white text-2xl font-bold">F</span>
              </div>
              <div className="bg-[#D4AF37] p-2">
                <span className="text-[#1D3557] text-2xl font-bold">B</span>
              </div>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-['Playfair_Display'] font-bold text-white">Advocacia</h1>
              <div className="flex items-center">
                <div className="h-0.5 w-12 bg-[#D4AF37] mr-2"></div>
                <p className="text-xs text-[#D4AF37] tracking-wider uppercase">Previdenciária</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;