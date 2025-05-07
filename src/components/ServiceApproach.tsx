import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const ServiceApproach = () => {
  const services = [
    {
      title: "Atendimento Remoto & Presencial",
      text: "Disponibilizamos consultas on-line para clientes em todo o Brasil e oferecemos também atendimento presencial em Vitória/ES."
    },
    {
      title: "Disponibilização Rápida de Casos",
      text: "Seu caso será analisado por uma advogada especializada e qualificada em direito previdenciário, disponibilizando todos os detalhes relacionados."
    },
    {
      title: "Total Transparência",
      text: "Mantemos você completamente informado sobre o progresso do seu caso e todas as ações que estamos tomando em seu nome."
    },
    {
      title: "Atendimento Personalizado",
      text: "Oferecemos um atendimento sob medida, incluindo acesso direto ao WhatsApp do seu advogado para garantir uma comunicação eficiente."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Nosso Atendimento</h2>
          <p className="text-gray-600 text-lg">
            Entenda as qualidades do nosso atendimento previdenciário
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              centeredSlides: false,
            },
          }}
          className="service-swiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col min-h-[300px] border border-gray-100">
                <h3 className="text-xl font-bold text-[#1D3557] mb-4 font-['Playfair_Display']">
                  {service.title}
                </h3>
                <p className="text-gray-600 flex-grow">
                  {service.text}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <a
            href="https://wa.me/5527999382118?text=Olá,%20quero%20conversar%20com%20um%20advogado%20previdenciário"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D4AF37] hover:bg-[#C4A027] text-white font-bold py-3 px-8 rounded-full inline-block transition-all duration-300 transform hover:scale-105"
          >
            Conversar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceApproach;