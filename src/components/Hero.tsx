import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-[#1D3557] text-white pt-32 pb-20 md:pt-40 md:pb-32">
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/5668859/pexels-photo-5668859.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="container-custom relative z-1">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-bold mb-6 leading-tight">
            Conquiste seus Direitos Previdenciários
          </h1>
          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            Ajudamos pessoas a obterem os benefícios de aposentadoria que merecem, mesmo após negativas do INSS.
          </p>
          <a 
            href="https://wa.me/5527999382118?text=Olá,%20quero%20conversar%20com%20um%20advogado%20previdenciário" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#D4AF37] hover:bg-[#C4A027] text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-block text-lg transform hover:scale-105"
          >
            Conversar no WhatsApp
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;