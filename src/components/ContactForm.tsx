import React from 'react';

const ContactForm = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center">Entre em Contato</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <p className="text-gray-700 text-lg mb-6">
              Fale diretamente com um de nossos advogados especialistas em direito previdenciário.
            </p>
            
            <a 
              href="https://wa.me/5527999382118?text=Olá,%20quero%20conversar%20com%20um%20advogado%20previdenciário" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#D4AF37] text-white font-bold py-4 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 animate-pulse hover:scale-105"
              style={{
                animation: 'pulse 2s infinite'
              }}
            >
              Conversar no WhatsApp
            </a>
            
            <p className="mt-6 text-gray-600">
              Atendimento de Segunda a Sexta: 9h às 18h
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;