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

const ServicesAll = () => {
  // Group services by section_title
  const groupedServices = servicesData.reduce((result, service) => {
    const sectionTitle = service.section_title;

    // Create an array for each sectionTitle if it doesn't exist
    result[sectionTitle] = result[sectionTitle] || [];

    // Push the current service into the corresponding array
    result[sectionTitle].push(service);

    return result;
  }, {});

  return (
    <section className="service-area pb-120">
      <div className="container">
        {/* Iterate over each sectionTitle and its associated services */}
        {Object.entries(groupedServices).map(([sectionTitle, services]) => (
          <div key={sectionTitle}>
            {/* Display the section title */}
            <div className="section-title text-center mb-65">
              {/* Add an id to the h2 tag with hyphen if more than one word */}
              <h2
                id={sectionTitle
                  .split(' ')
                  .map((word) => word.slice(0, 5).toLowerCase())
                  .join('-')}
                className="dp-section-title-small text-uppercase text-left"
              >
                {sectionTitle}
              </h2>
            </div>
            <div className="row mb-20">
              {/* Iterate over each service in the current section */}
              {services.map((item) => (
                <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                  {/* Display each service */}
                  <div className="tp-service dp-column mb-40 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">
                    {/* Link to the service details page */}
                    <h3 className="dp-column__title">
                      <Link href="/service-details">{item.service_item}</Link>
                    </h3>
                    <div className="dp-column__text">
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Add a filler item with variable column classes based on the length of services */}
              {services.length === 2 || services.length === 5 || services.length === 8 ? (
                <FillerItem1 columnClasses="col-xl-4 col-lg-4" />
              ) : services.length === 4 || services.length === 7 ? (
                <FillerItem2 columnClasses="col-xl-8 col-lg-8" />
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesAll;
