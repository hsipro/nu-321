import React from "react";

// Define individual services with their titles, descriptions, and links
const services = [
  {
    title: "ServiceNow Implementation and Configuration",
    description: "We offer end-to-end implementation and configuration services to tailor ServiceNow to your specific needs. Our team will work closely with you to design and deploy ServiceNow solutions that optimize your workflow, increase efficiency, and improve collaboration within your organization.",
    link: "/servicenow#",
  },
  {
    title: "ServiceNow Integration",
    description: "We ensure seamless integration of ServiceNow with your existing systems and tools, enabling data flow and process automation across your enterprise. This integration enhances communication and data sharing, reducing manual tasks and improving data accuracy.",
    link: "/servicenow#",
  },
  {
    title: "ServiceNow Custom Development",
    description: "Our experts can create custom applications and modules within ServiceNow to address your unique business requirements. Whether it's building custom workflows, automating tasks, or creating specialized reports, we can customize ServiceNow to meet your organization's precise needs.",
    link: "/servicenow#",
  },
  {
    title: "ServiceNow Support and Maintenance",
    description: "We provide ongoing support, maintenance, and monitoring for your ServiceNow environment. Our team will ensure that your ServiceNow instance remains secure, up-to-date, and optimized for peak performance. We are available to address any issues or challenges that may arise and provide timely resolutions.",
    link: "/servicenow#",
  },
];

// Define information for the "Reach Out" section
const reachOut = {
  backgroundImage: "/assets/img/reach-out.jpg",
  title: "Reach Out Today For A Brighter Tomorrow",
  buttonText: "Contact Us",
  buttonLink: "/contact",
};

const ServicenowIntro = () => {
  return (
    // Service introduction section
    <section className="tp-about-area pt-120 pb-90 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
      <div className="container">
        <div className="row align-items-center">
          {/* Column for service title */}
          <div className="col-md-12">
            <div className="section-title mb-55">
              {/* Display the service title */}
              <h2 className="dp-section-title mb-15 text-uppercase">ServiceNow</h2>
            </div>
          </div>
          {/* Column for service description and services */}
          <div className="col-md-12">
            <div className="tp-about-content pb-30 ml-80">
              <div className="section-title mb-55">
                {/* Display the service description and individual services */}
                <div className="row mb-20">
                  {services.map((service, index) => (
                    <div key={index} className={`col-md-6 ${index < 2 ? "col-lg-6" : "col-xl-6 col-lg-6"}`}>
                      {/* Individual service block */}
                      <div className="tp-service dp-column mb-40 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s" style={{ visibility: 'visible', animationDuration: '0.8s', animationDelay: '0.2s', backgroundImage: index === 3 && `url(${reachOut.backgroundImage})` }}>
                        {/* Service title with a link */}
                        <h3 className="dp-column__title"><a href={service.link}>{service.title}</a></h3>
                        {/* Service description */}
                        <div className="dp-column__text">
                          <p>{service.description}</p>
                        </div>
                        {/* Button for the "Reach Out" section */}
                        {index === 3 && (
                          <div className="dp-column__text">
                            <a className="btn-lgt-green" href={reachOut.buttonLink}>{reachOut.buttonText}</a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicenowIntro;
