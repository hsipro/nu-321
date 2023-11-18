import Link from 'next/link';
import React from 'react';

const HeroBanner = () => {
  const backgroundImageUrl = '/assets/img/banner/hero-people.png';
  const heroTitle = 'Your Return on Investment is Our Top Priority!';
  const heroSubtitle =
    "From cloud/web solutions to AI & ServiceNow solutions, we are your innovative partners in navigating the digital landscape!";

  return (
    <section className="banner-area fix p-relative">
      <div className="banner-bg" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-8">
              <div className="hero-content">
                <span>Scalability. Flexibility. Transformation</span>
                <h2 className="hero-title gradient-line mb-35">{heroTitle}</h2>
                <p>{heroSubtitle}</p>
                <div className="tp-banner-btn">
                  <Link href="/about" className="tp-btn">
                    Get to know us
                  </Link>
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
