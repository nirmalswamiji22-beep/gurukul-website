import React, { Suspense, lazy } from 'react';
import HeroSlider from '../components/HeroSlider';

const ValueSystem = lazy(() => import('../components/ValueSystem'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const AlumniSection = lazy(() => import('../components/AlumniSection'));

const Home = () => {
  return (
    <div className="w-full h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth">
      <div className="snap-start h-screen w-full relative">
        <HeroSlider />
      </div>

      {/* Intro Section */}
      <section className="min-h-[100vh] py-20 lg:py-0 lg:h-screen w-full flex items-center justify-center bg-[#fffbf0] snap-start relative">
        <div className="container mx-auto px-4 pt-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Text Column */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl lg:text-4xl font-bold text-[#1f1f1f] mb-6 leading-tight">
                Shree Swaminarayan Gurukul International School
              </h2>
              <div className="w-24 h-1 bg-[#cc0000] mb-8"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                With a rich legacy spanning over 75 years, Swaminarayan Gurukul International School is a pioneer in blending ancient wisdom with modern education.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our mission is to nurture students into well-rounded individuals who possess a strong moral compass and the skills necessary to thrive in a globalized world.
              </p>
              <a href="/why-swaminarayan-gurukul" className="inline-block bg-[#cc0000] text-white font-bold py-3 px-8 rounded hover:bg-[#90191b] transition duration-300 shadow-md">
                Explore More
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

      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-gray-500">Loading...</div>}>
        <div className="snap-start min-h-[100vh] py-16 lg:py-0 lg:h-screen w-full flex flex-col justify-center relative bg-[#fffbf0]">
          <AlumniSection />
        </div>
        <div className="snap-start min-h-[100vh] py-16 lg:py-0 lg:h-screen w-full flex flex-col justify-center relative bg-[#90191b]">
          <ValueSystem />
        </div>
        <div className="snap-start min-h-[100vh] py-16 lg:py-0 lg:h-screen w-full flex flex-col justify-center relative bg-[#fffbf0]">
          <Testimonials />
        </div>
      </Suspense>
    </div>
  );
};

export default Home;
