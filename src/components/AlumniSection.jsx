import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const AlumniSection = () => {
  const alumniData = [
    [
      {
        icon: 'https://gurukul.org/wp-content/uploads/2024/03/army.svg',
        count: '12+',
        title: 'Indian Armed Forces'
      },
      {
        icon: 'https://gurukul.org/wp-content/uploads/2024/03/studying.svg',
        count: '25,000',
        title: 'Studying Annually'
      }
    ],
    [
      {
        icon: 'https://gurukul.org/wp-content/uploads/2024/03/doctor.svg',
        count: '66+',
        title: 'Doctors'
      },
      {
        icon: 'https://gurukul.org/wp-content/uploads/2024/03/CA.svg',
        count: '33+',
        title: 'CA'
      }
    ],
    [
      {
        icon: 'https://gurukul.org/wp-content/uploads/2024/03/transformed-life.svg',
        count: '1,22,799',
        title: 'Transformed Lives'
      },
      {
        icon: 'https://gurukul.org/wp-content/uploads/2024/03/pilot.svg',
        count: '11+',
        title: 'Pilots'
      }
    ],
    [
      {
        icon: 'https://gurukul.org/wp-content/uploads/2024/03/engineer.svg',
        count: '935+',
        title: 'Engineers'
      },
      {
        icon: 'https://gurukul.org/wp-content/uploads/2024/03/overseas.svg',
        count: '275+',
        title: 'Overseas'
      }
    ]
  ];

  return (
    <section className="bg-[#fffbf0] relative overflow-hidden w-full">
      <div className="container mx-auto px-4">
        
        <div className="max-w-3xl mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f1f1f] mb-6">Gurukul Alumni by Profession</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explore the diverse achievements of Gurukul alumni across various professions, ranging from doctors and engineers to pilots and businessmen.
          </p>
        </div>

        <div className="relative alumni-slider-container">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            navigation={{
              prevEl: '.alumni-prev',
              nextEl: '.alumni-next',
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 }
            }}
            className="pb-4"
          >
            {alumniData.map((column, colIdx) => (
              <SwiperSlide key={colIdx}>
                <div className="flex flex-col gap-6">
                  {column.map((item, idx) => (
                    <div 
                      key={idx} 
                      className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      <div className="w-16 h-16 mr-5 bg-[#fffbf0] rounded-full flex items-center justify-center shadow-sm shrink-0">
                        <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain" />
                      </div>
                      <div>
                        <p className="text-2xl font-black text-[#90191b] mb-1">{item.count}</p>
                        <p className="text-sm font-bold text-gray-700 uppercase tracking-wide">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          <div className="absolute top-[-80px] right-4 flex space-x-2">
            <button className="alumni-prev w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#90191b] hover:border-[#90191b] hover:text-white transition shadow-sm">
              <span className="text-xl">❮</span>
            </button>
            <button className="alumni-next w-12 h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:bg-[#90191b] hover:border-[#90191b] hover:text-white transition shadow-sm">
              <span className="text-xl">❯</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AlumniSection;
