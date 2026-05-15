import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import obsi2 from '../data/obsi2.jpeg';
import obsi1 from '../data/obsi1.jpeg';
import bsa from '../data/bsa.jpg';
import brsa from '../data/brsa.JPG';

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      image: obsi2,
      title: 'One of the Best Schools in India',
      buttonText: 'Read More',
      link: '/blog/morality/cbse-class-x-results-2026-gurukul-sets-new-benchmarks-of-excellence//'
    },
    {
      id: 2,
      image: obsi1,
      title: 'One of the Best Schools in India',
      buttonText: 'Admissions Open',
      link: '/admissions/'
    },
    {
      id: 3,
      image: 'https://gurukul.org/wp-content/uploads/2019/10/What-kind-of-world-are-we-preparing-for-our-children-international-school.jpg',
      title: 'What kind of World are we Preparing for our Children?',
      buttonText: 'Read More',
      link: '/blog/21st-century-parenting/what-kind-of-world-are-we-preparing-for-our-children/'
    },
    {
      id: 4,
      image: bsa,
      title: 'Best International School Award',
      buttonText: 'Read More',
      link: '/blog/achievements-awards/best-school-award-hyderabad/'
    },
    {
      id: 5,
      image: brsa,
      title: 'Best Residential School Award',
      buttonText: 'Read More',
      link: '/blog/achievements-awards/best-residential-school-in-india/'
    },
    {
      id: 6,
      image: 'https://gurukul.org/wp-content/uploads/2023/08/cbse-schools-in-india-best.webp',
      title: '1,22,799 Students Transformed Life, Be One of them',
      buttonText: 'Read More',
      link: '/admissions/'
    }
  ];

  return (
    <div className="relative h-full w-full pt-[80px] lg:pt-[120px]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1000}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative h-full w-full overflow-hidden bg-black">
            {/* Blurred Background Layer for filling empty space */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-2xl opacity-60 scale-110"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>
            
            {/* Fully Visible Contained Image scaled up by 50% */}
            <div 
              className="absolute inset-0 bg-contain bg-center bg-no-repeat z-0 scale-150"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 pointer-events-none"></div>
            
            <div className="relative z-10 h-full flex items-end pb-16 md:pb-24">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl">
                  <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-md">
                    {slide.title}
                  </h2>
                  <a 
                    href={slide.link} 
                    className="inline-flex items-center text-white font-bold text-lg hover:text-[#fbefd5] transition group"
                  >
                    {slide.buttonText}
                    <span className="ml-2 bg-[#90191b] p-1 rounded-full group-hover:bg-[#fef3de] group-hover:text-[#90191b] transition">
                      <ArrowRight size={20} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
