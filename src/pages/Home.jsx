import React from 'react';
import HeroSlider from '../components/HeroSlider';
import StatsSection from '../components/StatsSection';
import ValueSystem from '../components/ValueSystem';
import Testimonials from '../components/Testimonials';
import HumanitarianServices from '../components/HumanitarianServices';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      <HeroSlider />
      
      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Text Column */}
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-bold text-[#1f1f1f] mb-6 leading-tight">
                {t('intro.title')}
              </h2>
              <div className="w-24 h-1 bg-[#cc0000] mb-8"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                {t('intro.desc1')}
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                {t('intro.desc2')}
              </p>
              <a href="/why-swaminarayan-gurukul" className="inline-block bg-[#cc0000] text-white font-bold py-3 px-8 rounded hover:bg-[#90191b] transition duration-300 shadow-md">
                {t('intro.button')}
              </a>
            </div>

            {/* Video Thumbnail Column */}
            <div className="lg:w-1/2 relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
              <img 
                src="https://gurukul.org/wp-content/uploads/2023/07/thumbnail.jpg" 
                alt="Gurukul Campus" 
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition duration-300 flex items-center justify-center">
                <div className="w-20 h-20 bg-[#cc0000] rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition duration-300">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-2"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <StatsSection />
      <ValueSystem />
      <Testimonials />
      <HumanitarianServices />
    </div>
  );
};

export default Home;
