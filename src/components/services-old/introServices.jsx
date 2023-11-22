import React from "react";

// Services info
const serviceInfo = {
  serviceTitle: "Advanced Digital Solutions for your Enterprise",
  description: (
    <>
      We provide comprehensive digital solutions tailored to your enterprise needs. Our offerings span bespoke website and application development with expertise in React, Node.js, Java, PHP, and Python, among others. We conduct meticulous website audits, devise robust solutions architecture, and excel in frontend, backend, and full-stack development. Our mobile development ensures consistent experiences, while quality checks guarantee flawless performance. Seamlessly migrate and upgrade systems with our expertise and leverage cloud solutions through expert consulting and migration services. For support, we offer maintenance, bug fixes, technical assistance, security updates, performance tuning, and feature enhancements.
    </>
  ),
};

// Destructure values from serviceInfo object
const { serviceTitle, description } = serviceInfo;

const ServicesIntro = () => {
  return (
    // Service introduction section
    <section className="tp-about-area pt-120 pb-90 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
      <div className="container">
        <div className="row align-items-center">
          {/* Column for service title */}
          <div className="col-xxl-5 col-xl-3 col-lg-3 col-md-3">
            <div className="section-title mb-55">
              {/* Display the service title */}
              <h2 className="dp-section-title mb-15 text-uppercase">{serviceTitle}</h2>
            </div>
          </div>
          {/* Column for service description */}
          <div className="col-xxl-7 col-xl-9 col-lg-9 col-md-9">
            <div className="tp-about-content pb-30 ml-80">
              <div className="section-title mb-55">
                {/* Display the service description */}
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesIntro;
