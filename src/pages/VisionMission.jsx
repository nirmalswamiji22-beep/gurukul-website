import React from 'react';
import './VisionMission.css';

const VisionMission = () => {
  return (
    <section className="swaminarayan-gurukul-second-page">
      <div className="container">
        
        {/* Header Title Section */}
        <div className="text-section text-center" style={{ paddingTop: '20px' }}>
          <h3 className="heading animate__animated animate__fadeInDown" style={{ marginTop: '0px' }}>
            Vision for the World <span className="design"></span>
          </h3>
          <h4 className="sub-heading animate__animated animate__pulse">
            In <b>1948</b> amidst <b>Himalayas.</b><br />
            there occurred a <b>Historic Event,</b><br />
            the Event of <b>Radical Thought</b> within the heart of<br />
            the <b>Visionary Saviour,</b><br />
            who sacrificed his world<br />
            for <b>the World.</b>
          </h4>
        </div>

        {/* Caring Heart Section */}
        <h3 className="heading animate__animated animate__slideInDown">
          Within his Caring Heart <span className="design"></span>
        </h3>
        
        <div className="text-section blog-section">
          {/* Swamiji Card */}
          <div className="blog-card">
            <img 
              decoding="async" 
              src="https://gurukul.org/wp-content/themes/gurukularts/assets/vision-img/swamiji2.png" 
              alt="Swamiji2" 
              className="img animate__animated animate__flipInY" 
              title="Swamiji2, Vision &amp; Mission" 
            />
            <div className="info-section">
              <h3 className="heading animate__animated animate__fadeIn" style={{ fontWeight: 600 }}>
                Pain &amp; Concern
              </h3>
              <p className="description" style={{ color: '#5f5c5c' }}>
                How will our future generation be without morals! Wouldn’t the world be otherwise, in absence of morals! These questions flooded his heart which brought the concern for entire humanity.
              </p>
            </div>
          </div>

          {/* Shastriji Maharaj Card */}
          <div className="blog-card">
            <img 
              decoding="async" 
              src="https://gurukul.org/wp-content/uploads/2024/12/Shastriji-Maharaj.jpg" 
              alt="Shastriji Maharaj" 
              className="img animate__animated animate__flipInX" 
              title="Shastriji Maharaj, Vision &amp; Mission" 
            />
            <div className="info-section">
              <h3 className="heading animate__animated animate__fadeIn" style={{ fontWeight: 600, textAlign: 'right' }}>
                Quest &amp; Concept
              </h3>
              <p className="description" style={{ color: '#5f5c5c' }}>
                How can we prevent this moral destruction? His entire on-foot-himalayan journey was to find the solution to this concern. And, the solution was out there, Spiritual and Human values together only can prevent this moral destruction and establish peace.
              </p>
            </div>
          </div>
        </div>

        {/* Inspiration, Vision & Mission Section */}
        <h3 className="heading animate__animated animate__slideInDown">
          Inspiration, Vision &amp; Mission <span className="design"></span>
        </h3>
        
        <div className="text-section Inspiration-card blog-section">
          <div className="card">
            {/* Inspiration Card */}
            <div className="card-body">
              <h4 style={{ fontWeight: 600, fontSize: '20px', padding: '8px 0', color: '#252525', letterSpacing: '1px' }}>
                • INSPIRATION • <span className="design"></span>
              </h4>
              <h3 className="title animate__animated animate__fadeIn" style={{ fontWeight: 600 }}>
                ॥ प्रवर्तनीया सद्विद्या भुवि यत्सुकृतं महत् ॥
              </h3>
              <h3 className="description" style={{ color: 'black' }}>
                Propagate true wisdom in the world, the most noble endeavour.
              </h3>
              <p className="by">– Bhagwan Swaminarayan (Shikshapatri)</p>
            </div>

            {/* Vision Card */}
            <div className="card-body">
              <h4 style={{ fontSize: '27px', letterSpacing: '1px', fontWeight: 600, color: '#cc0000' }} className="animate__animated animate__fadeIn">
                • VISION •
              </h4>
              <h3 className="description animate__animated animate__fadeIn" style={{ color: '#4b4b4b', fontWeight: 600, lineHeight: '30px', letterSpacing: '0.2px', fontSize: '23px' }}>
                To see a world full of individuals at the highest level of humanity and spirituality.
              </h3>
            </div>

            {/* Mission Card */}
            <div className="card-body">
              <h4 style={{ fontSize: '27px', letterSpacing: '1px', fontWeight: 600, color: '#cc0000' }} className="animate__animated animate__fadeIn">
                • MISSION •<span className="design"></span>
              </h4>
              <h3 className="description animate__animated animate__fadeIn" style={{ color: '#4b4b4b', fontWeight: 600, lineHeight: '30px', letterSpacing: '0.2px', fontSize: '23px' }}>
                To transform each individual by giving them the power, opportunities and culture to attain the highest level of humanity and spirituality.
              </h3>
            </div>
          </div>

          {/* Gurukul Brochure Card */}
          <div className="blog-card">
            <img 
              decoding="async" 
              src="https://gurukul.org/wp-content/themes/gurukularts/assets/vision-img/Gurukul-Brochure.png" 
              alt="Gurukul Brochure" 
              className="img animate__animated animate__flipInX" 
              title="Gurukul Brochure, Vision &amp; Mission" 
            />
            <div className="info-section">
              <h3 className="heading animate__animated animate__fadeIn" style={{ textWrap: 'balance' }}>
                Dedication &amp; <br /> Establishment
              </h3>
              <p className="description">
                From that moment he dedicated his entire life, thoughts &amp; actions to unleash this vision for the entire humanity. And thus, in 1948 he founded Shree Swaminarayan Gurukul at Rajkot, Gujarat, India.
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Shastri Ji Maharaj Bottom Illustration */}
      <div className="shastri_ji_maharaj">
        <img 
          decoding="async" 
          src="https://gurukul.org/wp-content/uploads/2024/06/Shastri-ji-maharaj.png" 
          alt="Shastri Ji Maharaj" 
          title="Shastri Ji Maharaj, Vision &amp; Mission" 
        />
      </div>
    </section>
  );
};

export default VisionMission;
