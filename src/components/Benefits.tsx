import React from 'react';
import { CheckCircle, Clock, Award, FileCheck } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: <CheckCircle size={40} className="text-[#D4AF37] mb-4" />,
      title: "Avaliação Jurídica Gratuita",
      description: "Análise completa do seu caso sem compromisso financeiro inicial."
    },
    {
      icon: <Clock size={40} className="text-[#D4AF37] mb-4" />,
      title: "Agilidade nos Processos",
      description: "Equipe dedicada a resolver seu caso no menor tempo possível."
    },
    {
      icon: <Award size={40} className="text-[#D4AF37] mb-4" />,
      title: "Expertise Comprovada",
      description: "Anos de experiência e milhares de casos bem-sucedidos."
    },
    {
      icon: <FileCheck size={40} className="text-[#D4AF37] mb-4" />,
      title: "Assistência com Negativas do INSS",
      description: "Especialistas em reverter decisões desfavoráveis do INSS."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">Por que nos escolher?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 text-center"
            >
              <div className="flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3 font-['Playfair_Display'] text-[#1D3557]">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;