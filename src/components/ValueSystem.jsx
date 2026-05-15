import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

import 'swiper/css';
import 'swiper/css/navigation';

const ValueSystem = () => {
  const { t } = useLanguage();

  const slides = [
    {
      title: t('value.vidya.title'),
      subtitle: t('value.vidya.subtitle'),
      features: [t('value.vidya.f1'), t('value.vidya.f2'), t('value.vidya.f3'), t('value.vidya.f4'), t('value.vidya.f5')],
      image: 'https://gurukul.org/wp-content/uploads/2022/10/Mask-Group-17.jpg',
      link: 'https://gurukul.org/why-swaminarayan-gurukul'
    },
    {
      title: t('value.sadvidya.title'),
      subtitle: t('value.sadvidya.subtitle'),
      features: [t('value.sadvidya.f1'), t('value.sadvidya.f2'), t('value.sadvidya.f3'), t('value.sadvidya.f4'), t('value.sadvidya.f5')],
      image: 'https://gurukul.org/wp-content/uploads/2022/10/Mask-Group-18.jpg',
      link: 'https://gurukul.org/why-swaminarayan-gurukul'
    },
    {
      title: t('value.brahmavidya.title'),
      subtitle: t('value.brahmavidya.subtitle'),
      features: [t('value.brahmavidya.f1'), t('value.brahmavidya.f2'), t('value.brahmavidya.f3'), t('value.brahmavidya.f4'), t('value.brahmavidya.f5'), t('value.brahmavidya.f6')],
      image: 'https://gurukul.org/wp-content/uploads/2022/10/Mask-Group-19.jpg',
      link: 'https://gurukul.org/why-swaminarayan-gurukul'
    }
  ];

  return (
    <section className="py-[50px] bg-[#90191b] overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Header Title & Text */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-between items-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">{t('value.title')}</h2>
          </div>
          <p className="text-[#eff2f6] text-lg lg:w-10/12 leading-relaxed opacity-90 font-light">
            {t('value.desc')}
          </p>
        </div>

        {/* Slider Section */}
        <div className="relative mt-8">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1.2}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 30 }
            }}
            navigation={{
              prevEl: '.value-prev-btn',
              nextEl: '.value-next-btn',
            }}
            className="!pb-12"
          >
            {/* We duplicate the slides to simulate the infinite looping */}
            {[...slides, ...slides].map((slide, index) => (
              <SwiperSlide key={index} className="h-auto">
                {/* Stable background image with no extra white space, text overlay */}
                <div className="relative w-full h-[500px] rounded-[20px] shadow-2xl overflow-hidden group">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay so text is readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500"></div>

                  {/* Content overlay, sliding up slightly on hover */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-3xl font-bold mb-1 drop-shadow-md">{slide.title}</h3>
                    <p className="text-[#fbefd5] text-sm font-bold mb-4 tracking-wider uppercase drop-shadow">{slide.subtitle}</p>
                    
                    <ul className="space-y-2 mb-6 text-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {slide.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#fbefd5] mr-3 shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a 
                      href={slide.link} 
                      className="inline-flex items-center text-white font-bold text-[15px] hover:text-[#fbefd5] transition-colors mt-auto opacity-0 group-hover:opacity-100 duration-500 delay-200"
                    >
                      {t('value.readMore')} <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Custom Navigation Arrows */}
          <button className="value-prev-btn absolute top-[40%] -left-4 md:-left-6 lg:-left-12 transform -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white text-[#90191b] rounded-full shadow-xl hover:bg-[#90191b] hover:text-white transition-all disabled:opacity-50">
            <span className="text-2xl leading-none -ml-1">❮</span>
          </button>
          <button className="value-next-btn absolute top-[40%] -right-4 md:-right-6 lg:-right-12 transform -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white text-[#90191b] rounded-full shadow-xl hover:bg-[#90191b] hover:text-white transition-all disabled:opacity-50">
            <span className="text-2xl leading-none -mr-1">❯</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ValueSystem;
