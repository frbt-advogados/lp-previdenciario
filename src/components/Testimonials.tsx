import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Excelente trabalho na minha aposentadoria por tempo de contribuição. Profissionais muito competentes que cuidaram de todo o processo.",
      author: "Maria Helena Silva",
      role: "Cliente Previdenciário",
      date: "15/04/2024",
      stars: 5
    },
    {
      quote: "Conseguiram reverter a negativa do meu auxílio-doença. Muito grata pela dedicação e profissionalismo da equipe.",
      author: "Ana Paula Santos",
      role: "Cliente Previdenciário",
      date: "10/04/2024",
      stars: 5
    },
    {
      quote: "Ótimo atendimento desde o primeiro contato. Me ajudaram a conseguir minha aposentadoria especial depois de anos tentando.",
      author: "José Roberto Lima",
      role: "Cliente Previdenciário",
      date: "05/04/2024",
      stars: 5
    },
    {
      quote: "Profissionais excepcionais! Conseguiram minha aposentadoria por invalidez quando eu já estava desacreditado.",
      author: "Pedro Henrique Costa",
      role: "Cliente Previdenciário",
      date: "01/04/2024",
      stars: 5
    },
    {
      quote: "Muito satisfeita com o resultado da revisão do meu benefício. Equipe altamente qualificada e atenciosa.",
      author: "Márcia Regina Oliveira",
      role: "Cliente Previdenciário",
      date: "28/03/2024",
      stars: 5
    },
    {
      quote: "Excelentes profissionais! Me auxiliaram em todo o processo do BPC/LOAS com muita dedicação e conhecimento.",
      author: "Antonio Carlos Ferreira",
      role: "Cliente Previdenciário",
      date: "25/03/2024",
      stars: 5
    }
  ];

  return (
    <section className="section-padding bg-[#1D3557] text-white relative overflow-hidden py-12">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-['Playfair_Display'] font-bold mb-2">O Que Nossos Clientes Dizem</h2>
          <p className="text-gray-300">Avaliações reais de nossos clientes no Google</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="testimonials-swiper !pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center justify-center px-4 py-6 text-center max-w-3xl mx-auto">
                <div className="text-[#D4AF37] text-7xl font-serif mb-4">"</div>
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-8 h-8 text-[#D4AF37] fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                    </svg>
                  ))}
                </div>
                <p className="text-2xl md:text-3xl italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="text-center">
                  <p className="font-semibold text-xl text-[#D4AF37]">{testimonial.author}</p>
                  <p className="text-gray-300 text-base">{testimonial.role}</p>
                  <p className="text-gray-400 text-sm mt-1">Avaliado em {testimonial.date}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #D4AF37 !important;
        }

        .swiper-pagination-bullet {
          background: #D4AF37 !important;
          width: 12px !important;
          height: 12px !important;
          opacity: 0.5;
        }

        .swiper-pagination-bullet-active {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;