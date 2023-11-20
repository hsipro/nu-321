import React from 'react';

// Contact items
const contactItems = [
  {
    id: 1,
    icon: "fa-light fa-phone",
    info: "(647) 000-0004"
  },
  {
    id: 2,
    icon: "fa-light fa-location-dot",
    info: "Please kind email us and we will respond within 24 hours"
  },
  {
    id: 3,
    icon: "fi fi-rr-envelope",
    info: "info@321datapro.com"
  },
];

const ContactInfo = () => {
  return (
    <section className="location-area pt-120 pb-85 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
      <div className="container">
        <div className="row">
          {contactItems.map((item) => (
            <div key={item.id} className="col-xl-4 col-md-6">
              <div className="location-item text-center mb-30 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
                <div className="location-icon mb-25">
                  <i className={item.icon}></i>
                </div>
                <div className="location-content">
                  <h5 className="location-title">
                    {item.id === 1 || item.id === 3 ? (
                      <a href={item.id === 1 ? "tel:(647)555-0104" : `mailto:${item.info}`}>{item.info}</a>
                    ) : (
                      item.info
                    )}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
