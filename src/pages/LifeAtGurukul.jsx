import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, X, Heart, Award, Sparkles, BookOpen, Clock, Activity, Calendar, ShieldCheck, Flame } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './LifeAtGurukul.css';

const LifeAtGurukul = () => {
  const activeTab = window.location.pathname.includes('residential') ? 'residential' : 'academic';

  // State for Academic Life Interactive FAQs
  const [activeFaq, setActiveFaq] = useState(null);

  // State for Academic Life Gallery Lightbox
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // State for Residential Life Interactive Services
  const [activeService, setActiveService] = useState(1);

  // Scroll to top when tab changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeTab]);

  // Academic FAQ Data
  const faqData = [
    {
      question: "How are parents kept informed about their child’s progress and school updates?",
      answer: "We use a combination of regular parent-teacher meetings, digital portals for real-time updates, and monthly newsletters to keep parents informed about their child’s academic progress and school events."
    },
    {
      question: "How does the school prepare students for higher education and career readiness?",
      answer: "Through career counseling sessions, university fairs, and a curriculum that emphasizes critical thinking and problem-solving, we prepare students for higher education and future careers."
    },
    {
      question: "What extracurricular activities are available, and how do they complement academics?",
      answer: "We offer a wide range of extracurricular activities, including sports, arts, music, and clubs, which are designed to complement academic learning by fostering creativity, teamwork, and leadership skills."
    }
  ];

  // Gallery Images Array
  const galleryImages = [
    {
      src: "https://gurukul.org/wp-content/uploads/2022/09/Gurukulite-Conquers-National-Karate-Championship-With-Bronze-3.jpg",
      alt: "National Karate Championship"
    },
    {
      src: "https://gurukul.org/wp-content/uploads/2022/09/Mask-Group-3.jpg",
      alt: "Activity Session"
    },
    {
      src: "https://gurukul.org/wp-content/uploads/2022/09/Concreting-of-Nag-River-international-school-nagpur-best-school-in-nagpur-8.jpg",
      alt: "Community Services"
    },
    {
      src: "https://gurukul.org/wp-content/uploads/2024/02/IMG_1697-Small-2.jpg",
      alt: "Gurukul Activities"
    },
    {
      src: "https://gurukul.org/wp-content/uploads/2022/09/Mask-Group-8.jpg",
      alt: "School Assembly"
    },
    {
      src: "https://gurukul.org/wp-content/uploads/2024/02/NTPC-6H-x-8W-Banner-Small.jpg",
      alt: "Camp Event"
    },
    {
      src: "https://gurukul.org/wp-content/uploads/2022/09/Mask-Group-6.jpg",
      alt: "Classroom Learning"
    },
    {
      src: "https://gurukul.org/wp-content/uploads/2024/02/class.png",
      alt: "Interactive Class Session"
    },
    {
      src: "https://gurukul.org/wp-content/uploads/2022/10/Mask-Group-8.jpg",
      alt: "Sports Day Activities"
    },
    {
      src: "https://gurukul.org/wp-content/uploads/2022/09/Mask-Group-2.jpg",
      alt: "Laboratory Experiment"
    },
    {
      src: "https://gurukul.org/wp-content/uploads/2022/09/Mask-Group.jpg",
      alt: "Group Discussion"
    },
    {
      src: "https://gurukul.org/wp-content/uploads/2022/09/Mask-Group-5.jpg",
      alt: "Art and Craft Room"
    },
    {
      src: "https://gurukul.org/wp-content/uploads/2024/02/Lab-Landscape-Photo.png",
      alt: "Science Laboratory"
    },
    {
      src: "https://gurukul.org/wp-content/uploads/2024/02/art-craft-landscape.png",
      alt: "Art Exhibition"
    }
  ];

  // Residences Slider Data
  const residencesSlides = [
    {
      src: "https://gurukul.org/wp-content/uploads/2024/02/1T3A6565-Small.jpg",
      title: "Dormitory",
      desc: "A Student is provided with personal cupboards, a bed, a chair and a footwear rack. All the dormitories are facilitated with a speaker and microphone, hence connecting all the rooms, directly to the Residence Office."
    },
    {
      src: "https://gurukul.org/wp-content/uploads/2024/02/mineral-water-bottling-plant-Small.jpg",
      title: "Mineral Water Plant",
      desc: "Drinking water matters much in a child’s health. SGIS is set with a Mineral Water Plant, that refines the drinking water, throughout the campus. With this, water coolers are also kept to provide chilled water to Students."
    },
    {
      src: "https://gurukul.org/wp-content/uploads/2024/02/Screenshot-2024-02-21-235415-Small.png",
      title: "Solar Plant",
      desc: "A child needs water in different temperatures in various seasons for bathing. Therefore, Gurukul provides separate pipelines, coming from around 35 Solar Heater Collectors, for hot water."
    }
  ];

  // Interactive Services Switcher Data
  const servicesData = [
    {
      id: 1,
      title: "1. Gurukul Store",
      detailTitle: "1. Gurukul Store",
      desc: "Gurukul Store the warehouse is fully stocked with all the necessary stationeries like pen, pencil, notebooks, textbooks, toiletries, dresses eatables like biscuits, chocolates, dry fruits etc. With this a fully updated student's account pocket money, is also maintained."
    },
    {
      id: 2,
      title: "2. Student’s Communication Facility",
      detailTitle: "2. Student’s Communication Facility",
      desc: "Everyone is eager to hear the voice of their near and dear ones. Our children should also get to hear their parents or relatives. Gurukul maintains a highly monitored system of scheduled phone calls so children remain intimately connected to their family while building self-reliance."
    },
    {
      id: 3,
      title: "3. Laundry Services",
      detailTitle: "3. Laundry Services",
      desc: "Gurukul’s Laundry Services is well set. Every 3 days in a week, a student can give his clothes and collect it washed and ironed it after 3 days. Cleanliness is a reflection of self-discipline, and laundry service ensures zero chores conflict."
    },
    {
      id: 4,
      title: "4. Salon Services",
      detailTitle: "4. Salon Services / Non-Local Students",
      desc: "Barbers are timely arranged for the Haircuts of the Children. We promote sober look of a person and so have planned a typical good looking hairstyle for every student."
    },
    {
      id: 5,
      title: "5. Tailor Services",
      detailTitle: "5. Tailor Services",
      desc: "Shree Swaminarayan Gurukul has prearranged group of tailors who takes all the measurements and make all the dresses here itself. Besides, every wear and tear to any dress or personal cloth is stitched."
    }
  ];

  // Lightbox navigation
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    setLightboxIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen]);

  return (
    <div className="life-gurukul-page-wrapper pt-20">
      
      {/* Top Banner Hero */}
      <div 
        className="life-gurukul-hero relative py-20 lg:py-28 px-4 text-center text-white"
        style={{
          backgroundImage: `url('https://gurukul.org/wp-content/uploads/2024/02/NTPC-6H-x-8W-Banner-Small.jpg')`,
          backgroundAttachment: 'scroll',
          backgroundPosition: 'center 40%',
        }}
      >
        <div className="life-gurukul-hero-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-4">
          <span className="text-sm font-bold tracking-widest bg-[#fffbf0] text-[#90191b] px-4 py-1.5 rounded-full uppercase inline-block shadow-md">
            Gurukul Culture
          </span>
          <h1 className="text-4xl lg:text-6xl font-extrabold font-serif leading-tight">
            {activeTab === 'academic' ? 'Academic Life' : 'Residential Life'}
          </h1>
          <p className="text-lg lg:text-xl font-medium max-w-2xl mx-auto opacity-95 text-[#fffbf0]">
            {activeTab === 'academic' 
              ? 'Ancient wisdom with Modern Technology.' 
              : 'Holistic character development and satvik living in a vibrant spiritual environment.'}
          </p>
        </div>
      </div>


      {/* Dynamic Views */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {activeTab === 'academic' ? (
          /* ========================================================
             ACADEMIC LIFE VIEW
             ======================================================== */
          <div className="tab-view-animation space-y-16">
            
            {/* Header intro */}
            <div className="text-center space-y-3">
              <h2 className="text-3xl lg:text-5xl h2-common text-[#cc0000]">Academic Life</h2>
              <p className="text-xl text-gray-600 font-medium font-serif italic">“Ancient wisdom with Modern Technology.”</p>
              <div className="w-20 h-1 bg-[#cc0000] mx-auto rounded-full mt-4"></div>
            </div>

            {/* Academic Features Grid */}
            <section className="bg-white rounded-2xl p-6 lg:p-12 shadow-lg">
              <div className="flex flex-col lg:flex-row gap-12 items-center">
                
                {/* Left Features list */}
                <div className="w-full lg:w-2/3 space-y-8">
                  <div className="space-y-2">
                    <h3 className="text-2xl lg:text-3.5xl h2-common text-[#1f1f1f]">
                      Academic Features at Swaminarayan Gurukul
                    </h3>
                    <p className="text-gray-600 font-medium text-lg leading-relaxed">
                      Holistic Development of Child with Indian values with access to modern Technology.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                      { img: "vidya-modern-knowldge-icon.svg", title: "Curriculum", desc: "Blends academics with moral and spiritual values" },
                      { img: "vidya-modern-trophy-icon.svg", title: "Education Care", desc: "Individual attention, nurturing students' potential" },
                      { img: "Attend-Counselling.svg", title: "Student – Teacher Relations", desc: "Focused, personalized learning environment" },
                      { img: "vidya-modern-dynamism-icon.svg", title: "Learning Systems", desc: "Innovative and interactive learning methodologies" },
                      { img: "National-International-tours.svg", title: "National & International tours", desc: "Experiential learning through global exposure" },
                      { img: "Project-Work.svg", title: "Project Work", desc: "Hands-on projects fostering critical thinking" },
                      { img: "Student-Support.svg", title: "Student Support", desc: "Comprehensive support for all-round development" },
                      { img: "House-System.svg", title: "House System", desc: "Promotes teamwork, leadership, and healthy competition" }
                    ].map((feat, idx) => (
                      <div key={idx} className="flex items-start bg-[#fffbf0]/40 hover:bg-[#fffbf0]/60 p-4 rounded-xl transition duration-300 border border-gray-100/50 shadow-sm">
                        <div className="mr-4 mt-1 flex-shrink-0 bg-[#fffbf0] p-2 rounded-lg">
                          <img 
                            src={`https://gurukul.org/wp-content/uploads/${idx === 2 || idx === 4 || idx === 5 || idx === 6 || idx === 7 ? '2024/02' : '2023/08'}/${feat.img}`}
                            alt={feat.title}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1f1f1f] text-lg mb-1 leading-snug">{feat.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{feat.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side Image frame */}
                <div className="w-full lg:w-1/3 side-img-container flex justify-center">
                  <div className="relative group max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-102 w-full">
                    <img 
                      src="https://gurukul.org/wp-content/uploads/2024/02/123.jpg"
                      alt="Gurukul Academic Life Frame"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 text-white">
                      <div>
                        <h5 className="font-serif font-bold text-lg text-[#fffbf0]">Holistic Excellence</h5>
                        <p className="text-xs opacity-90 text-gray-200">Inspiring modern thinkers</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </section>

            {/* GBrilliance & GStatus double section card */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* gbrilliance Card */}
              <div className="section-card flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                    <img 
                      src="https://gurukul.org/wp-content/uploads/2022/10/logo-gbrillence-1-1.png" 
                      alt="GBrilliance Logo" 
                      className="ctm-brilliance-img h-12 object-contain"
                    />
                    <div>
                      <h2 className="text-3xl font-extrabold text-[#90191b] font-serif uppercase tracking-tight">gbrilliance</h2>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Competitive Foundation</span>
                    </div>
                  </div>

                  <p className="text-lg font-medium text-gray-800 italic leading-relaxed">
                    "A unique foundation developed and maintained by gurukul for the competitive gurukulites."
                  </p>

                  <ul className="space-y-4">
                    {[
                      { img: "2023/08/vidya-modern-leadership-icon.svg", title: "Competitive exam course" },
                      { img: "2024/02/Question-Papers.svg", title: "Fortnightly online Exams" },
                      { img: "2024/02/Self-Assesments-01.svg", title: "Regular Assessment and mentoring" }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-4 p-2 bg-[#fffbf0]/20 rounded-lg">
                        <div className="flex-shrink-0 feature-img">
                          <img src={`https://gurukul.org/wp-content/uploads/${item.img}`} alt={item.title} className="w-10 h-10 object-contain bg-white rounded shadow-sm" />
                        </div>
                        <h5 className="font-bold text-gray-800 leading-snug">{item.title}</h5>
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-600 text-sm leading-relaxed pt-2">
                    GBrilliance, crafted by Gurukul, is a distinct foundation program aimed at students from class 5 and above, preparing them for competitive exams like JEE and NEET. Through specialized study materials and biweekly online exams, it equips students with the skills and knowledge needed to excel in their academic and professional futures, embodying Gurukul’s commitment to holistic education and excellence.
                  </p>
                </div>
              </div>

              {/* gstatus Card */}
              <div className="section-card flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 border-b border-gray-100 pb-4">
                    <img 
                      src="https://gurukul.org/wp-content/uploads/2022/10/Group-830.png" 
                      alt="gStatus Logo" 
                      className="ctm-brilliance-img h-12 object-contain"
                    />
                    <div>
                      <h2 className="text-3xl font-extrabold text-[#90191b] font-serif uppercase tracking-tight">gstatus</h2>
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">360 Assessment Program</span>
                    </div>
                  </div>

                  <p className="text-lg font-medium text-gray-800 italic leading-relaxed">
                    "Program for overall Academic, discipline, Punctuality, Cleanliness, Sanskaar, etc assessment of your child."
                  </p>

                  <ul className="space-y-4">
                    {[
                      { img: "2023/08/self-assesments-icon.svg", title: "Self Assessments" },
                      { img: "2024/02/Self-Assesments.svg", title: "Daily Monitoring" },
                      { img: "2023/08/vidya-modern-leadership-icon.svg", title: "gStar targets" }
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center space-x-4 p-2 bg-[#fffbf0]/20 rounded-lg">
                        <div className="flex-shrink-0 feature-img">
                          <img src={`https://gurukul.org/wp-content/uploads/${item.img}`} alt={item.title} className="w-10 h-10 object-contain bg-white rounded shadow-sm" />
                        </div>
                        <h5 className="font-bold text-gray-800 leading-snug">{item.title}</h5>
                      </li>
                    ))}
                  </ul>

                  <p className="text-gray-600 text-sm leading-relaxed pt-2">
                    gStatus is a unique, comprehensive assessment program by Gurukul, evaluating students in academics, discipline, punctuality, cleanliness, adherence to dress code, sports prowess, and overall behaviour, aiming for their all-round development. Recognized achievers receive accolades, including certificates and trophies, in a ceremonial acknowledgement by special guests and Swamiji, motivating excellence and growth.
                  </p>
                </div>
              </div>

            </section>

            {/* Frequently Asked Questions */}
            <section className="faq-section bg-[#fffbf0]/40 rounded-2xl p-6 lg:p-12 border border-orange-100 shadow-sm">
              <div className="max-w-4xl mx-auto space-y-8">
                
                <div className="text-center space-y-2">
                  <h2 className="text-3xl lg:text-4xl h2-common text-gray-900">Frequently Asked Questions</h2>
                  <p className="text-gray-600 max-w-xl mx-auto">
                    These are the common FAQs asked by our parents. To ease your path, our team has answered a few of them here.
                  </p>
                </div>

                <div className="space-y-4">
                  {faqData.map((faq, idx) => {
                    const isActive = activeFaq === idx;
                    return (
                      <div 
                        key={idx} 
                        className={`faq-accordion-item p-5 border border-gray-100 ${isActive ? 'active' : ''}`}
                      >
                        <button 
                          className="w-full flex items-center justify-between text-left font-serif font-bold text-lg lg:text-xl text-gray-900 focus:outline-none"
                          onClick={() => setActiveFaq(isActive ? null : idx)}
                        >
                          <span>{faq.question}</span>
                          <ChevronDown 
                            className={`transform transition-transform duration-300 ml-4 flex-shrink-0 text-[#cc0000] ${isActive ? 'rotate-180' : ''}`} 
                            size={20} 
                          />
                        </button>
                        
                        <div 
                          className={`mt-4 text-gray-600 text-sm lg:text-base leading-relaxed overflow-hidden transition-all duration-300 max-h-0 ${
                            isActive ? 'max-h-40 opacity-100' : 'opacity-0'
                          }`}
                          style={{ maxH: isActive ? '300px' : '0px' }}
                        >
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>
            </section>

            {/* Courses Offered */}
            <section className="bg-white rounded-2xl p-6 lg:p-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Courses Offered List */}
                <div className="lg:col-span-8 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-3xl lg:text-4xl h2-common text-[#1f1f1f]">Courses Offered at Shree Swaminarayan Gurukul</h2>
                  </div>

                  {/* Day School */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-[#cc0000] font-serif border-b border-red-50 pb-2">
                      Day School: I to XII
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[
                        { grade: "I to VII", type: "Primary" },
                        { grade: "VIII to X", type: "Secondary" },
                        { grade: "XI to XII", type: "MPC/BPC/MBPC" },
                        { grade: "1:12", type: "T:S Ratio" }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-[#fffbf0]/40 p-4 rounded-xl text-center border border-gray-50 shadow-sm">
                          <h5 className="font-serif font-extrabold text-xl text-[#cc0000]">{item.grade}</h5>
                          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">{item.type}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Residential */}
                  <div className="space-y-4 pt-4">
                    <h4 className="text-xl font-bold text-[#cc0000] font-serif border-b border-red-50 pb-2">
                      Residential: V to XII
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
                      {[
                        { grade: "IV to XII", type: "Primary" },
                        { grade: "VIII to X", type: "Secondary" },
                        { grade: "XI to XII", type: "MPC/BPC/MBPC" },
                        { grade: "XI to XII", type: "Commerce" },
                        { grade: "1:12", type: "T:S Ratio" }
                      ].map((item, idx) => (
                        <div key={idx} className="bg-[#fffbf0]/40 p-4 rounded-xl text-center border border-gray-50 shadow-sm">
                          <h5 className="font-serif font-extrabold text-xl text-[#cc0000]">{item.grade}</h5>
                          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">{item.type}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4">
                    <a 
                      href="/admissions" 
                      className="inline-block bg-[#cc0000] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#90191b] transition shadow-md hover:scale-102"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>

                {/* Right side Portrait Image */}
                <div className="lg:col-span-4 side-img-container flex justify-center">
                  <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-102">
                    <img 
                      src="https://gurukul.org/wp-content/uploads/2022/10/Mask-Group-17.jpg"
                      alt="About-Img"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

              </div>
            </section>

            {/* Photo Gallery Grid */}
            <section className="space-y-8 bg-[#fffbf0]/30 p-6 lg:p-12 rounded-2xl border border-[#fffbf0]">
              <div className="text-center space-y-2">
                <h2 className="text-3xl lg:text-4xl h2-common text-gray-900">Photo Gallery</h2>
                <p className="text-gray-600 max-w-xl mx-auto text-sm lg:text-base">
                  At our residential Campus. We have built homes for our children where We devote our full-time proving care and protection fulfil their emotional needs thus making them feel at home.
                </p>
              </div>

              <div className="gallery-grid">
                {galleryImages.map((img, idx) => (
                  <div 
                    key={idx} 
                    className="gallery-img-container group relative"
                    onClick={() => openLightbox(idx)}
                  >
                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                    <div className="gallery-img-overlay bg-[#90191b]/50 absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
                      <div className="text-center p-4">
                        <span className="text-white text-xs font-bold uppercase tracking-widest bg-[#cc0000]/80 px-3 py-1.5 rounded-full inline-block mb-2">View Photo</span>
                        <h6 className="text-[#fffbf0] font-serif font-bold text-sm leading-tight">{img.alt}</h6>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxOpen && (
              <div className="lightbox-modal fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 select-none">
                <button 
                  onClick={closeLightbox}
                  className="absolute top-6 right-6 text-white hover:text-[#fffbf0] focus:outline-none transition p-2 bg-white/10 rounded-full"
                >
                  <X size={28} />
                </button>

                <button 
                  onClick={prevSlide}
                  className="absolute left-6 text-white hover:text-[#fffbf0] focus:outline-none transition p-3 bg-white/5 hover:bg-white/10 rounded-full"
                >
                  <ChevronLeft size={36} />
                </button>

                <div className="max-w-4xl max-h-[80vh] flex flex-col items-center justify-center space-y-4">
                  <img 
                    src={galleryImages[lightboxIndex].src} 
                    alt={galleryImages[lightboxIndex].alt} 
                    className="max-w-full max-h-[70vh] object-contain rounded border-2 border-white/10 shadow-2xl"
                  />
                  <div className="text-center text-white">
                    <h4 className="font-serif font-bold text-lg text-[#fffbf0]">{galleryImages[lightboxIndex].alt}</h4>
                    <p className="text-xs text-gray-400 mt-1">Image {lightboxIndex + 1} of {galleryImages.length}</p>
                  </div>
                </div>

                <button 
                  onClick={nextSlide}
                  className="absolute right-6 text-white hover:text-[#fffbf0] focus:outline-none transition p-3 bg-white/5 hover:bg-white/10 rounded-full"
                >
                  <ChevronRight size={36} />
                </button>
              </div>
            )}

            {/* Call to Action admissions banner */}
            <section className="footer-notes text-white py-12 mx-auto rounded-2xl overflow-hidden shadow-2xl border-t-4 border-[#fffbf0]">
              <div className="container mx-auto px-8">
                <div className="row flex flex-wrap -mx-4 items-center justify-between">
                  <div className="col-lg-8 w-full lg:w-2/3 px-4 mb-6 lg:mb-0">
                    <div className="notes-content space-y-2">
                      <h2 className="text-3xl font-extrabold mb-4 text-white font-serif leading-tight">Admissions Open</h2>
                      <p className="text-lg text-gray-100 leading-relaxed">
                        At our residential campus, we have built homes for our children where we devote our full time proving care and protection fulfil their emotional needs thus making them feel at home.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-3 w-full lg:w-1/4 px-4 text-left lg:text-right">
                    <a 
                      href="/admissions" 
                      className="btn inline-block bg-white text-[#cc0000] font-bold py-3.5 px-8 rounded-lg hover:bg-[#fffbf0] hover:text-[#90191b] transition shadow-lg hover:scale-102 text-center w-full sm:w-auto"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            </section>

          </div>
        ) : (
          /* ========================================================
             RESIDENTIAL LIFE VIEW
             ======================================================== */
          <div className="tab-view-animation space-y-16">
            
            {/* Header intro */}
            <div className="text-center space-y-3">
              <h2 className="text-3xl lg:text-5xl h2-common text-[#cc0000]">Residential Life</h2>
              <p className="text-xl text-gray-600 font-medium font-serif italic">“Ancient wisdom with Modern Values.”</p>
              <div className="w-20 h-1 bg-[#cc0000] mx-auto rounded-full mt-4"></div>
            </div>

            {/* Section 1: Boon satvik lifestyle */}
            <section className="bg-white rounded-2xl p-6 lg:p-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left content description */}
                <div className="lg:col-span-7 space-y-6">
                  <h3 className="text-2xl lg:text-3xl font-extrabold font-serif text-gray-900 leading-tight">
                    It’s really a great boon to spend every single day at Shree Swaminarayan Gurukul residential campus.
                  </h3>
                  <div className="w-16 h-1 bg-[#cc0000] rounded-full"></div>
                  <div className="text-gray-700 text-base lg:text-lg leading-relaxed space-y-4 font-normal">
                    <p>
                      Since we care for the students at our Gurukul, we strictly do not permit junk food, non-veg food, unwanted gadgets, offensive or prohibited things into their life. We strictly prohibit such offensive things from our students’ minds and life.
                    </p>
                    <p className="bg-[#fffbf0]/40 border-l-4 border-[#90191b] p-4 rounded-r-lg font-medium text-gray-800">
                      We highly believe in giving them what is best for their life and not what they expect best from us! Also, we never ever compromise on the best quality for our students.
                    </p>
                    <p>
                      Here at Gurukul, we serve them Satvik food cooked on our premises with great care and hygiene. The students are served only milk, therefore no tea or coffee is served. We serve them satvik food, fruits, healthy snacks-no artificial snacks that aren’t good for the students’ health.
                    </p>
                  </div>
                </div>

                {/* Right side Portrait Image Frame */}
                <div className="lg:col-span-5 side-img-container flex justify-center">
                  <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-102">
                    <img 
                      src="https://gurukul.org/wp-content/uploads/2024/03/02-Large.jpg"
                      alt="Swaminarayan Gurukul Residential Boon"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

              </div>
            </section>

            {/* Section 2: Residences Slider Carousel */}
            <section className="p-8 lg:p-12 rounded-2xl shadow-xl text-white relative overflow-hidden" style={{ backgroundColor: "#91191c" }}>
              <div className="max-w-5xl mx-auto space-y-8 relative z-10">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-4">
                  <h3 className="text-3xl font-bold font-serif text-[#fffbf0]">SG Residences Room tour</h3>
                  <span className="text-xs uppercase tracking-widest font-bold bg-[#cc0000] text-white px-3 py-1.5 rounded-full inline-block mt-2 sm:mt-0 shadow">Standard SG Facilities</span>
                </div>

                <div className="residences-slider">
                  <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                      640: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 }
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="residences-swiper-container"
                  >
                    {residencesSlides.map((slide, index) => (
                      <SwiperSlide key={index}>
                        <div className="residences-card flex flex-col justify-between">
                          <img src={slide.src} alt={slide.title} className="residences-img w-full h-56 object-cover" />
                          <div className="p-6 text-gray-800 flex-grow flex flex-col justify-between space-y-4">
                            <div>
                              <h4 className="font-bold font-serif text-xl text-[#90191b] mb-2">{slide.title}</h4>
                              <p className="text-gray-600 text-sm leading-relaxed">{slide.desc}</p>
                            </div>
                            <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 font-bold uppercase tracking-wider">
                              <span>SG Campus Facility</span>
                              <span>Pure Hygiene</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </section>

            {/* Section 3: Sanskardhaam / Morning Pooja */}
            <section className="bg-white rounded-2xl p-6 lg:p-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left content description */}
                <div className="lg:col-span-8 space-y-6">
                  <h3 className="text-2xl lg:text-3.5xl font-extrabold font-serif text-gray-900 leading-tight">
                    Gurukul often referred as ‘Sanskardhaam’.
                  </h3>
                  <div className="w-16 h-1 bg-[#cc0000] rounded-full"></div>
                  
                  <ul className="space-y-4 pl-4 border-l-2 border-orange-100 py-2">
                    <li className="flex items-start">
                      <span className="text-[#cc0000] font-bold text-xl mr-3 leading-none">•</span>
                      <p className="text-gray-700 text-lg">
                        <strong className="text-gray-900 font-serif">Value Meetings:</strong> conduct meetings every evening led by holy saints focusing to strengthen positive habits and character.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#cc0000] font-bold text-xl mr-3 leading-none">•</span>
                      <p className="text-gray-700 text-lg">
                        Followed by daily devotional bhajans, creating an atmosphere of deep tranquility.
                      </p>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#cc0000] font-bold text-xl mr-3 leading-none">•</span>
                      <p className="text-gray-700 text-lg font-serif italic text-gray-600">
                        Mainly missing in today’s India which has a rich diversified culture & history.
                      </p>
                    </li>
                  </ul>

                  <div className="bg-[#fffbf0] p-5 rounded-xl border border-[#fffbf0] space-y-4">
                    <h4 className="text-xl font-bold font-serif text-[#90191b]">Ethics & Spirituality</h4>
                    <p className="text-gray-700 text-sm lg:text-base leading-relaxed font-normal">
                      Spirituality is the guideline to the life. One of the major wings of Gurukul is Ethics & Spirituality.
                    </p>
                    <p className="text-gray-700 text-sm lg:text-base leading-relaxed font-normal bg-white p-4 rounded border border-orange-50 shadow-sm">
                      <strong className="text-[#cc0000] font-bold font-serif uppercase tracking-wide">Pooja Every Morning:</strong> At 05:30 AM, Students come to the prayer hall for daily pooja. It includes chanting of Swaminarayan Mahamantra, recitation of devotional songs, and morning meditation. One can feel absolute paradise at Gurukul during this holy hour.
                    </p>
                  </div>
                </div>

                {/* Right side Portrait Image Frame */}
                <div className="lg:col-span-4 side-img-container flex justify-center">
                  <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-102">
                    <img 
                      src="https://gurukul.org/wp-content/uploads/2024/02/with-swamiji.jpg"
                      alt="Gurukul Sanskardhaam saints pooja session"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

              </div>
            </section>

            {/* Section 4: Religious Session & cyled House Activities */}
            <section className="bg-white rounded-2xl p-6 lg:p-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-wrap-reverse">
                
                {/* Left content description */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-2xl lg:text-3.5xl font-extrabold font-serif text-gray-900 leading-tight">
                      Religious Sessions
                    </h3>
                    <div className="w-16 h-1 bg-[#cc0000] rounded-full"></div>
                    <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                      This is a special half an hour session thrice in a week. In this session, Swamijis teach holy scriptures, devotional songs, moral values, and recitations to guide students through the complexities of youth.
                    </p>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <h3 className="text-2xl lg:text-3.5xl font-extrabold font-serif text-gray-900 leading-tight">
                      House Activities
                    </h3>
                    <p className="text-gray-700 text-base lg:text-lg leading-relaxed">
                      House Activities are part of a student’s regular day. Half an hour in the morning is devoted to these house activities. We have determined four different activities respective to each house for every 3 days, and then the houses are cycled.
                    </p>
                  </div>
                </div>

                {/* Right side Portrait Image Frame */}
                <div className="lg:col-span-5 side-img-container flex justify-center">
                  <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-102">
                    <img 
                      src="https://gurukul.org/wp-content/uploads/2024/03/4U1A3237-Large.jpg"
                      alt="Gurukul Saints sessions and house sports details"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

              </div>
            </section>

            {/* Section 5: Health & Safety */}
            <section className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Visual Image cover */}
                <div className="lg:col-span-6 relative h-64 lg:h-auto min-h-[300px]">
                  <img 
                    src="https://gurukul.org/wp-content/uploads/2022/08/image-23.jpg" 
                    alt="Clean and hygienic campus, Swaminarayan Gurukul" 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 lg:from-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white z-10 lg:hidden">
                    <span className="bg-[#cc0000] px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">Hygienic Campus</span>
                  </div>
                </div>

                {/* Safety detail card */}
                <div className="lg:col-span-6 p-8 lg:p-12 bg-[#fffbf0]/30 space-y-6 flex flex-col justify-center">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#cc0000] bg-white border border-orange-100 shadow-sm px-4 py-1.5 rounded-full inline-block self-start">
                    Health & Safety
                  </span>
                  <h3 className="text-3xl font-extrabold font-serif text-gray-900 leading-tight">
                    Prevention is better than Cure
                  </h3>
                  <div className="w-16 h-1 bg-[#cc0000] rounded-full"></div>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                    Health Care is the major responsibility of Shree Swaminarayan Gurukul, Hyderabad. The pollution-free spacious location, self-managed Gaushala (Cow Shed), and Vishwambharam dining give the complete purity of health.
                  </p>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed">
                    Nevertheless, we have a well-serving dispensary with First Aid and necessary medicines. We have appointed a Doctor who visits Gurukul daily and looks after students' health. In addition, the campus is associated with a Hospital just 5 minutes away providing medical services for 24 Hours, and associated with more than 10 Specialized Hospitals. Fire Extinguishers are distantly placed, and leaders/staff members are trained in handling emergency situations.
                  </p>
                </div>

              </div>
            </section>

            {/* Section 6: Vishwambharam dining room */}
            <section className="bg-white rounded-2xl p-6 lg:p-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Dining detailed content */}
                <div className="lg:col-span-8 space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-widest bg-[#fffbf0] text-[#90191b] px-3 py-1 rounded">Pure Vegetarian dining</span>
                    <h3 className="text-3xl lg:text-4.5xl h2-common text-[#1f1f1f] mt-2">Vishwambharam</h3>
                    <h4 className="text-xl font-bold font-serif text-[#cc0000] italic">"As is the Food so is the Mind."</h4>
                  </div>
                  <div className="w-16 h-1 bg-[#cc0000] rounded-full"></div>

                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed font-normal">
                    Vishwambharam is the purest place for dining. All the chefs are Brahmins and are specialized in cooking foods of all kinds. Vishwambharam feeds variety of pure vegetarian food made up of pure ghee, oil and fresh vegetables. It serves food of both North Indian and South Indian tastes with all the delicious items like Dhosa, Pani Pooree, Frankie, Manchoorian, Noodles, Idly, Upma, Pulao, and many more.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    {[
                      { img: "question-paper-icon.svg", title: "Grocery Storage", desc: "Vishwambharam maintains a Cold Storage to serve fresh vegetables and fruit to the students." },
                      { img: "g-briliance-icon.svg", title: "Gurukul Bakery", desc: "Vishwambharam has a self maintained bakery that provides all the bakery dishes like Pizza, Burger, Dabeli, Sandwich, Pau Bhajee, etc." },
                      { img: "vidya-modern-knowldge-icon.svg", title: "Gaushala", desc: "Shree Swaminarayan Gurukul Gaushala, Hyderabad has more than 125 cows and all the milk items and sweets are freshly served from there." },
                      { img: "vidya-modern-trophy-icon.svg", title: "Vegetation", desc: "We have fields for different vegetables and fruits. And the vegetables used here are mostly from the farm." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start bg-[#fffbf0]/40 hover:bg-[#fffbf0]/50 p-4 rounded-xl transition duration-300 shadow-sm border border-gray-50">
                        <div className="mr-3 flex-shrink-0 bg-white p-2 rounded shadow-sm border border-orange-50">
                          <img src={`https://gurukul.org/wp-content/uploads/2023/08/${item.img}`} alt={item.title} className="w-8 h-8 object-contain" />
                        </div>
                        <div>
                          <h5 className="font-bold text-gray-800 text-sm mb-1 leading-snug">{item.title}</h5>
                          <p className="text-gray-600 text-xs leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right side dining food portrait image */}
                <div className="lg:col-span-4 side-img-container flex justify-center">
                  <div className="max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-white transition-transform duration-500 hover:scale-102">
                    <img 
                      src="https://gurukul.org/wp-content/uploads/2024/02/food-Potrait-Photo.jpg"
                      alt="Delicious Satvik food portrait photo Swaminarayan Gurukul"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>

              </div>
            </section>

            {/* Section 7: Services dynamic sidebar tab switcher */}
            <section className="bg-white rounded-2xl p-6 lg:p-12 shadow-lg">
              <div className="space-y-6">
                <div className="border-b border-gray-100 pb-4">
                  <h3 className="text-3xl font-extrabold font-serif text-gray-900 leading-tight">Gurukul Student Services</h3>
                  <p className="text-gray-500 text-sm lg:text-base mt-1">Providing premium infrastructure support so students can focus entirely on learning.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Image wrapper */}
                  <div className="lg:col-span-4 space-y-4">
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                      <img 
                        src="https://gurukul.org/wp-content/uploads/2024/02/Store.png" 
                        alt="Gurukul Stores and Services Warehouse" 
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="p-4 bg-[#fffbf0]/40 rounded-xl border border-[#fffbf0] text-center">
                      <span className="text-[#90191b] font-bold text-sm tracking-wide uppercase">SG Services Hub</span>
                    </div>
                  </div>

                  {/* Middle Column: Tab sidebar toggles */}
                  <div className="lg:col-span-4 bg-gray-50 rounded-xl border border-gray-100 overflow-hidden">
                    <div className="p-4 bg-gray-100 border-b border-gray-200">
                      <h5 className="font-serif font-bold text-gray-800 text-base">Select Service</h5>
                    </div>
                    <div className="flex flex-col">
                      {servicesData.map((item) => (
                        <button
                          key={item.id}
                          className={`service-sidebar-btn ${activeService === item.id ? 'active' : ''}`}
                          onClick={() => setActiveService(item.id)}
                        >
                          {item.title}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Displaying selected service content */}
                  <div className="lg:col-span-4 bg-[#fffbf0]/40 p-6 lg:p-8 rounded-xl border border-[#fffbf0] min-h-[250px] flex flex-col justify-between">
                    <div className="space-y-4 tab-view-animation" key={activeService}>
                      <span className="text-xs font-bold uppercase tracking-wider text-white bg-[#cc0000] px-3 py-1 rounded inline-block">SG Service details</span>
                      <h4 className="text-2xl font-bold font-serif text-[#90191b] leading-tight">
                        {servicesData[activeService - 1].detailTitle}
                      </h4>
                      <div className="w-12 h-1 bg-[#cc0000] rounded-full"></div>
                      <p className="text-gray-700 text-sm lg:text-base leading-relaxed font-normal">
                        {servicesData[activeService - 1].desc}
                      </p>
                    </div>
                    
                    <div className="pt-6 border-t border-[#fffbf0] text-xs text-gray-400 font-bold uppercase tracking-wider flex justify-between items-center">
                      <span>SG Infrastructure</span>
                      <span>24/7 Managed</span>
                    </div>
                  </div>

                </div>
              </div>
            </section>

          </div>
        )}
      </div>

    </div>
  );
};

export default LifeAtGurukul;
