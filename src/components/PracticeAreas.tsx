import React from 'react';

const PracticeAreas = () => {
  const areas = [
    {
      title: "Revisão de Benefícios de Aposentadoria",
      image: "https://images.pexels.com/photos/4098369/pexels-photo-4098369.jpeg",
      description: "Recupere o que é seu por direito! Revise seu benefício e garanta um valor justo para sua contribuição."
    },
    {
      title: "Solicitação de BPC/LOAS",
      image: "https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg",
      description: "Descubra se pode receber o benefício que garante dignidade e apoio financeiro para quem mais precisa."
    },
    {
      title: "Aposentadoria por Invalidez",
      image: "https://images.pexels.com/photos/3768131/pexels-photo-3768131.jpeg",
      description: "Se a incapacidade permanente te impede de trabalhar, você pode ter direito à aposentadoria por invalidez."
    },
    {
      title: "Auxílio-Acidente",
      image: "https://i.postimg.cc/hjbJvrNC/auxilio-acidente.png",
      description: "Verifique se tem direito ao auxílio-acidente e amenize o impacto financeiro do acidente."
    },
    {
      title: "Aposentadoria Urbana & Rural",
      image: "https://images.pexels.com/photos/2382904/pexels-photo-2382904.jpeg",
      description: "Trabalhador urbano ou rural, sua aposentadoria é um direito conquistado com esforço."
    },
    {
      title: "Auxílio-Doença",
      image: "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg",
      description: "Veja se você tem direito ao auxílio-doença e mantenha sua renda durante a recuperação."
    }
  ];

  return (
    <section className="section-padding bg-[#FAF9F6]">
      <div className="container-custom">
        <h2 className="section-title text-center mb-12">Áreas de Atuação</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col animate-fade-in h-full"
              style={{
                opacity: 0,
                animation: `fadeIn 0.5s ease-in-out forwards ${index * 0.2}s`
              }}
            >
              <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-48 object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#1D3557] mb-3 font-['Playfair_Display']">
                  {area.title}
                </h3>
                <p className="text-gray-700 mb-6 flex-grow">
                  {area.description}
                </p>
                <a 
                  href="https://wa.me/5527999382118?text=Olá,%20quero%20conversar%20com%20um%20advogado%20previdenciário"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#D4AF37] text-white font-bold py-3 px-6 rounded-full hover:bg-[#C4A027] transition-all duration-300 transform hover:scale-[1.03] text-center cursor-pointer"
                >
                  Conversar com o especialista
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;