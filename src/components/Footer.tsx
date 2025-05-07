import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1D3557] text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="flex">
                <div className="bg-[#1D3557] p-2 border border-[#D4AF37]">
                  <span className="text-white text-2xl font-bold">F</span>
                </div>
                <div className="bg-[#D4AF37] p-2">
                  <span className="text-[#1D3557] text-2xl font-bold">B</span>
                </div>
              </div>
              <div className="ml-3">
                <h2 className="text-xl font-['Playfair_Display'] font-bold">Advocacia</h2>
                <div className="flex items-center">
                  <div className="h-0.5 w-12 bg-[#D4AF37] mr-2"></div>
                  <p className="text-xs text-[#D4AF37] tracking-wider uppercase">Previdenciária</p>
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Mais de 15 anos oferecendo soluções jurídicas personalizadas e estratégicas para proteger os interesses e garantir os direitos de nossos clientes.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl mb-4 font-['Playfair_Display'] font-semibold">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="text-[#D4AF37] mr-2 mt-1" />
                <span>Av. Jerônimo Monteiro, 1000, Sala 301, Centro, Vitória/ES, CEP 29010-935</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-[#D4AF37] mr-2" />
                <span>(27) 99938-2118</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-[#D4AF37] mr-2" />
                <span>contato@frbt.com.br</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl mb-4 font-['Playfair_Display'] font-semibold">Horário de Atendimento</h3>
            <p className="mb-2">Segunda a Sexta: 9h às 18h</p>
            <p>Sábados: 9h às 12h (com agendamento)</p>
            
            <h3 className="text-xl mt-6 mb-4 font-['Playfair_Display'] font-semibold">Siga-nos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="text-white hover:text-[#D4AF37] transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} F&B Advocacia Previdenciária. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;