import React from 'react';
import Link from 'next/link';
import servicesData from '@/src/data/services-data';

// Filler item component with variable column classes
const FillerItem1 = ({ columnClasses }) => (
  <div className={columnClasses}>
    <div className="tp-service dp-column mb-40 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s" style={{ backgroundImage: `url(/assets/img/connect.jpg)` }}>
    <h3 className="text-uppercase text-white mt-30 mb-20">
        Let's Connect and Create Together
      </h3>
      <div className="dp-column__text">
        <a className="btn-lgt-green" href="/contact">Contact Us</a>
      </div>
    </div>
  </div>
);

// Filler item component with specific content for length 4 or 7
const FillerItem2 = ({ columnClasses }) => (
  <div className={columnClasses}>
    <div className="tp-service dp-column mb-40 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s" style={{ backgroundImage: `url(/assets/img/reach-out.jpg)` }}>
      <h3 className="text-uppercase text-white mt-30 mb-20">
        Reach Out Today For A <br></br>Brighter Tomorrow
      </h3>
      <div className="dp-column__text">
        <a className="btn-lgt-green" href="/contact">Contact Us</a>
      </div>
    </div>
  </div>
);

const ServicesIntroAlt = () => {
  return (
    // Service introduction section
    <section className="services-area pt-120 pb-90 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
      <div className="container">
        {sections.map((section, index) => (
          <div key={index} className="row align-items-center bdr__bottom__grey" >
            {/* Column for service title */}
            <div className={`col-xxl-5 col-xl-5 col-lg-4 col-anchor`} id={getAnchorId(section.title)}>
              <div className="section-title mb-55 mt-30" >
                {/* Make the title clickable and link it to section.link */}
                <h2 className="dp-section-title mb-15 text-uppercase">
                  {section.title}
                </h2>
              </div>
            </div>
            {/* Column for service description */}
            <div className="col-xxl-7 col-xl-7 col-lg-8">
              <div className="pb-20 ml-80">
                <div className="section-title mb-55 mt-30">
                  <ul>
                    {/* Display the service description */}
                    {section.description.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>           
          </div>
        ))}
      </div>
    </section>
  );
};

// Helper function to generate the anchor id
const getAnchorId = (title) => {
  // Extract the first 8 letters, convert to lowercase, and replace spaces with dashes
  return title.substring(0, 8).toLowerCase().replace(/\s+/g, '-');
};

export default ServicesIntroAlt;
