import React from "react";

// Define individual services with their titles, descriptions, and links
const services = [
  {
    title: "BESPOKE WEBSITE SOLUTIONS",
    description:
      "Elevate your online presence with our customized website development services, tailored to meet the unique needs of your business. Our expertise extends beyond mere website creation, as we seamlessly integrate advanced Customer Relationship Management (CRM) and Content Management System (CMS) solutions. By combining cutting-edge technology with a keen understanding of your business requirements, we ensure your website not only stands out visually but also functions as a powerful tool to drive your success.",
    link: "/bespoke-website-solutions",
  },
  {
    title: "APPLICATION DEVELOPMENT",
    description: "Experience the next level of efficiency with our specialized application development services. We pride ourselves on crafting applications that not only streamline your business processes but also enhance user experiences. Whether you need a bespoke solution for internal operations or a customer-facing application, our team of skilled developers is equipped to transform your ideas into reality.",
    link: "/application-development",
  },
  {
    title: "TECHNOLOGY EXPERTISE",
    description: "Stay at the forefront of technological innovation with our diverse expertise in various programming languages and frameworks, including React, Node.js, Java, PHP, and Python. Our commitment to using the right technology for the right job ensures the development of dynamic, scalable, and high-performance websites and applications.",
    link: "/technology-expertise",
  },
  {
    title: "FRONT-END UI DEVELOPMENT",
    description: "Captivate your audience with engaging and intuitive user interfaces designed to leave a lasting impression. Our front-end development team excels in creating visually stunning and user-friendly interfaces that seamlessly blend aesthetics with functionality, resulting in an immersive online experience for your users.",
    link: "/front-end-ui-development",
  },
  
{
    title: "BACK-END DEVELOPMENT",
    description: "Build a robust foundation for your digital presence with our back-end development services. Our team focuses on creating scalable and reliable systems that form the backbone of your website or application. From database management to server-side logic, we ensure your digital infrastructure is not just efficient but also prepared for future growth.",
    link: "/back-end-development",
  },
  
{
    title: "FULL-STACK DEVELOPMENT",
    description: "Experience the power of end-to-end solutions with our full-stack development expertise. Our developers possess comprehensive proficiency in both front-end and back-end technologies, allowing us to create cohesive and integrated digital experiences that cover every aspect of your project.",
    link: "/full-stack-development",
  },
  
{
    title: "MOBILE DEVELOPMENT",
    description: "Extend your reach with consistent and well-designed mobile applications for various platforms. Our mobile development services ensure that your brand remains accessible and user-friendly across different devices, providing a seamless experience for your on-the-go audience.",
    link: "/mobile-development",
  },
   {
    title: "MIGRATION SERVICES",
    description: "Navigate transitions seamlessly with our migration services. Whether you're moving from one platform to another or upgrading your technology stack, our experienced team ensures a smooth transition of existing systems, applications, or data, minimizing disruption and optimizing performance.",
    link: "/migration-services",
  },
  
 {
    title: "UPGRADES",
    description: "Keep your software solutions up-to-date and ahead of the curve with our upgrade services. We analyze your existing systems, identify areas for improvement, and implement updates to enhance functionality, security, and overall performance. Stay current in the ever-evolving digital landscape with our tailored upgrade solutions.",
    link: "/upgrades",
  },
  
];

// Define information for the "Reach Out" section
const reachOut = {
  backgroundImage: "/assets/img/reach-out.jpg",
  title: "Reach Out Today For A Brighter Tomorrow",
  buttonText: "Contact Us",
  buttonLink: "/contact",
};

const DigitalServices = () => {
  return (
    // Service introduction section
    <section className="tp-about-area pt-120 pb-90 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
      <div className="container">
        <div className="row align-items-center">
          {/* Column for service title */}
          <div className="col-md-12">
            <div className="section-title mb-55">
              {/* Display the service title */}
              <h2 className="dp-section-title mb-15 text-uppercase">Digital Solutions</h2>
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

export default DigitalServices;
