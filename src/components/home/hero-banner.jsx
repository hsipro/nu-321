import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
  const backgroundImageUrl = '/assets/img/banner/hero-people.png';
  const heroTitle = "When the Stakes Are High, Your Systems Shouldn't Fail";
  const heroText =
    'We design AI-enhanced platforms for crisis response, environmental monitoring, and enterprise operations — tailored systems that automate the work, surface what matters, and keep your teams ahead of risk.';
  const heroCta = 'See How We Build';

  return (
    <section className="banner-area fix p-relative">
      <div className="banner-bg" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-8">
              <div className="hero-content">
                <h2 className="hero-title gradient-line mb-35">{heroTitle}</h2>
                <p>{heroText}</p>
                <div className="dp-banner-btn">
                  <a href="#about" className="dp-btn">
                    {heroCta}
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
