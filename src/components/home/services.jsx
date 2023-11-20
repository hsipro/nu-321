import React from "react";

const servicesHome = [
  {
    id: 1,
    icon: "fi fa-solid fa-globe",
    title: "Website Design/Software Dev",
    description: "Creative ideation, UI/UX design, and responsive layout. From Websites to Full-stack development.",
  },
  {
    id: 2,
    icon: "fi fa-solid fa-code",
    title: "CRM Planning & Dev",
    description: "Integration, customization, and management of CRM, and streamlined customer interactions.",
  },
  {
    id: 3,
    icon: "fi fa-solid fa-brain",
    title: "AI Solutions",
    description: "AI-driven analysis and insights for data optimization and AI-enhanced processes for efficiency and innovation",
  },
];

const ServicesBlock = () => {
  return (
    <section className="services-home pt-40 pb-90 pl-205 pr-205 bg-bottom">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5">
            <div className="section-title mb-60">
              <h2 className="dp-section-title">Unleash Excellence with 321DataPro Services</h2>
            </div>
          </div>
          <div className="col-lg-7">
            <p className="mb-20">
              Step into a world of ITSM mastery! 321DataPro Inc. is your gateway to ServiceNow Solutions and advanced cloud-based data management. Our mission? To fast-track and simplify your data projects, paving the way for streamlined success.
            </p>
            <a className="btn-border mb-50" href="/services">
              Discover More Services
            </a>
          </div>
        </div>
        <div className="tp-feature-cn">
          <div className="row">
            {servicesHome.map((item) => (
              <div key={item.id} className="col-xl-4 col-lg-4">
                <div className="dp-column mb-30 wow fadeInUp"
                  data-wow-duration=".8s"
                  data-wow-delay=".6s"
                >
                  <span className="dp-column__icon mb-25">
                    <i className={item.icon}></i>
                  </span>
                  <span className="dp-column__title mb-20"> {item.title}</span>
                  <div className="dp-column__text">
                    <p>{item.description}</p>
                    <a className="mt-20 btn-arrow" href="#">
                      See More                   
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesBlock;
