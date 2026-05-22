import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Dr. APJ Abdul Kalam',
      designation: '- Former President, India',
      text: 'So, you are running a School, Great! Well, I am quite eager to know the formula with which you transform your students. Does your “Commitment really change then?',
      image: 'https://gurukul.org/wp-content/uploads/2019/10/dr-apj-abdul-kalam-biography-swaminarayan-gurukul-min.jpg',
    },
    {
      id: 2,
      name: 'Shri Tridandi Chinna Jeeyar Swami',
      designation: '- Founder of Statue of Equality, JET',
      text: 'I feel extremely delighted to realize that the students of Gurukul are given the knowledge that is helpful now and that after the life.',
      image: 'https://gurukul.org/wp-content/uploads/2019/10/tridandi_chinna_jeeyar_swamy-min.jpg',
    },
    {
      id: 3,
      name: 'Shri Narendra Modi',
      designation: '- Prime Minister, India',
      text: 'This is extremely noble & extra-ordinary work done by Gurukul. The energy of sanskar, culture, honesty & religion in the life of every student studying here is immeasurable.',
      image: 'https://gurukul.org/wp-content/uploads/2019/10/Narendra-modi1-min.jpg',
    },
    {
      id: 4,
      name: 'Shri Atal Bihari Vajpeyee',
      designation: '- Former Prime Minister, India',
      text: 'I am highly pleased to attend the Golden jubilee celebration of Gurukul Rajkot. May Almighty prosper Gurukul tradition, benefiting the wisdom to the society.',
      image: 'https://gurukul.org/wp-content/uploads/2019/10/atal_bihari_vajpayee.jpg',
    },
    {
      id: 5,
      name: 'Shri N. Chandrababu Naidu',
      designation: '- Chief Minister, Andhra Pradesh',
      text: 'Very good school, excellent discipline and marvellous spirituality. This is the only way to develop our children. They will lead future India.',
      image: 'https://gurukul.org/wp-content/uploads/2019/10/Chandrababu-Naidu.jpg',
    },
    {
      id: 6,
      name: 'Shri Rajiv Gandhi',
      designation: '- Former Prime Minister, India',
      text: 'I am confident, The students who have taken education in Gurukul will definitely render services to the society and nation by their good behaviour and virtues.',
      image: 'https://gurukul.org/wp-content/uploads/2019/10/rajiv-gandhi-400x4001.jpg',
    }
  ];

  return (
    <section className="bg-[#fffbf0] w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Testimonials by Personalities</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            An esteemed collection of heartfelt testimonials from parents, students, and dignitaries, showcasing the transformative impact and excellence of our institution.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
                    <div className="mb-6">
                      <h3 className="text-xl md:text-2xl text-gray-800 font-medium italic leading-relaxed">
                        "{testimonial.text}"
                      </h3>
                    </div>
                    <div>
                      <h6 className="font-bold text-gray-900 text-lg">{testimonial.name}</h6>
                      <p className="text-gray-500 text-sm">{testimonial.designation}</p>
                    </div>
                  </div>
                  <div className="w-full md:w-4/12 flex justify-center md:justify-end mt-8 md:mt-0">
                    <div className="rounded-lg overflow-hidden shadow-xl w-48 md:w-64">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
