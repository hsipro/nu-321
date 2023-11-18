import React from 'react';
import Link from 'next/link';
import servicesData from '@/src/data/services-data';

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
              <h2 className="dp-section-title-small text-uppercase text-left">{sectionTitle}</h2>
            </div>
            <div className="row mb-20">
              {/* Iterate over each service in the current section */}
              {services.map((item) => (
                <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                  {/* Display each service */}
                  <div className="tp-service dp-column mb-40 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".2s">                   
                      {/* Link to the service details page */}
                      <h3 className="small-header text-uppercase colour-0">
                        <Link href="/service-details">{item.service_item}</Link>
                      </h3>
                      <p>{item.description}</p>
                 
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesAll;

