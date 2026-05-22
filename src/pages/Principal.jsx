import React from 'react';
import './Principal.css';

const Principal = () => {
  return (
    <div className="principal-page-wrapper min-h-screen pb-16">
      
      {/* Kingster Page Title / Hero Banner */}
      <div 
        className="kingster-page-title-wrap relative overflow-hidden py-24 px-8 lg:px-24 mb-16 text-white pt-28 lg:pt-32"
        style={{ 
          backgroundImage: `url('https://ppsavanicbse.org/wp-content/uploads/2023/07/Principal-Photo-for-Website.jpg')`,
          backgroundAttachment: 'scroll'
        }}
      >
        <div className="kingster-page-title-overlay"></div>
        <div className="relative z-10 container mx-auto">
          <div className="kingster-page-title-container kingster-container">
            <div className="kingster-page-title-content kingster-item-pdlr text-center lg:text-left">
              <span className="text-sm font-bold tracking-wider bg-[#fffbf0] text-[#90191b] px-4 py-1.5 rounded-full uppercase mb-4 inline-block shadow-md">
                About Us
              </span>
              <h1 className="kingster-page-title text-4xl lg:text-6xl font-extrabold leading-tight">
                Principal
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Content Layout */}
      <div className="container mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Profile Photo Frame */}
          <div className="lg:col-span-5 space-y-6">
            <div className="principal-img-frame">
              <img 
                src="https://ppsavanicbse.org/wp-content/uploads/2023/07/Principal-Photo-for-Website.jpg" 
                alt="Dr. Harish Chander Khichi" 
                className="w-full h-auto object-cover" 
              />
            </div>
            <div className="profile-meta-badge text-center">
              <h4 className="text-xl font-bold font-serif mb-1">Dr. Harish Chander Khichi</h4>
              <p className="text-sm font-semibold tracking-wide uppercase opacity-90">Principal - P P SAVANI</p>
            </div>
          </div>

          {/* Right Column: Text & Welcome Letter */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-b border-gray-200 pb-6 mb-6">
              <h2 className="text-3xl lg:text-4xl font-extrabold text-[#90191b] font-serif mb-2">
                Dr. Harish Chander Khichi
              </h2>
              <span className="text-lg font-bold text-[#cc0000] tracking-wide uppercase">
                Principal Message
              </span>
            </div>

            {/* Golden Quote callout box */}
            <div className="quote-callout mb-8">
              <p className="quote-text">
                “Schools are the most important means of transforming wealth of knowledge from one generation to another.”
              </p>
            </div>

            {/* Body Paragraphs */}
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Education has always been a cornerstone of society, the pillar on which the bulwark of human existence rests, the leading light as mankind made his way in quest of the unknown. While the art and science of education may have undergone changes since the time of yore, every educationist strives to instill in every student a sense of virtue and wisdom, sensitivity to the needs of others, the skills, the attitudes and habits that would help them explore and excel, a quest for knowledge and the power of action. All of these would propel each one to an all important goal – <strong className="text-[#90191b]">Excellence</strong>.
              </p>

              <p>
                At <strong className="text-[#1f1f1f]">P P SAVANI</strong>, it is our endeavor to delve deeper into the true purpose of education by giving our students opportunities and an environment that is positive, inspiring, challenging and stimulating. We want each one of our students to follow their bliss, blaze new trails and open new doors. I am proud of the parents and teachers who care, nurture and reassure the children so that they grow into mature, sensitive and responsible citizens of the country. As someone who has a wonderful opportunity to shape over 3500 brilliant minds each day, I assure that P P SAVANI will always remain the foremost temple of learning, where there are <em className="font-semibold text-gray-800">“equal opportunities to all so that they rise to their fullest potential”</em>.
              </p>
            </div>

            {/* Signed Close Letter */}
            <div className="letter-signoff">
              <p className="text-gray-600 text-lg italic mb-4">With best wishes,</p>
              <div className="space-y-1">
                <h5 className="signature-name">Mr. Harish Chander Khichi</h5>
                <p className="signature-title">Principal</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Principal;
