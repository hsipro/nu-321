import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
  const backgroundImageUrl = '/assets/img/banner/hero-people.png';
  const heroTitle = 'Your Return on Investment is Our Top Priority!';
  const heroSubtitle = 'Scalability. Flexibility. Transformation';
  const heroText =
    "From cloud/web solutions to AI & ServiceNow solutions, we are your innovative partners in navigating the digital landscape!";

  return (
    <section className="banner-area fix p-relative">
      <div className="banner-bg" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-8">
              <div className="hero-content">
                <span> {heroSubtitle}
                </span>
                <h2 className="hero-title gradient-line mb-35">{heroTitle}</h2>
                <p>{heroText}</p>
                <div className="tp-banner-btn">
                  <a href="#about" className="tp-btn">
                  ↓ 
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
