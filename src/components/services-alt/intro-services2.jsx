import React from "react";

const sections = [
    // DIGITAL SOLUTIONS
    {
      title: "Digital Solutions",
      description:
        "Comprehensive services, including bespoke website development, application development, and full-stack expertise. Mobile development, migration services, and continuous upgrades provide tailored solutions for staying ahead.",
      link: "/digital-solutions",
    },  
    // USER EXPERIENCE
    {
      title: "User Experience",
      description:
        "Emphasizes optimal user satisfaction through intuitive interfaces (UX/UI design). Connects clients through collaboration, ensuring designs align with brand identity. Highlights expertise in crafting engaging user experiences.",
      link: "/user-experience",
    },  
    // DATA DESIGN AND ARCHITECTURE
    {
      title: "Data Design and Architecture",
      description:
        "Strategic planning for data, focusing on efficient storage, retrieval, and processing. Creates frameworks for organized data assets, extracts insights, and presents them visually. Ensures data-driven decision-making for clients.",
      link: "/data-design-and-architecture",
    },  
    // AI-DRIVEN SOLUTIONS
    {
      title: "AI-Driven Solutions",
      description:
        "Leverages cutting-edge technology to enhance business operations, customer experiences, and decision-making processes. From predictive analytics to chatbots, showcases a commitment to implementing artificial intelligence for personalized and efficient solutions.",
      link: "/ai-driven-solutions",
    },
      // DATA AND ANALYTICS
    {
      title: "Data and Analytics",
      description:
        "Covers a spectrum of services from data collection and integration to processing, warehousing, and analysis. Focuses on transforming raw data into actionable insights through visualization, business intelligence, A/B testing, and customer segmentation.",
      link: "/data-and-analytics",
    },
      // SERVICENOW SOLUTIONS
    {
      title: "ServiceNow Solutions",
      description:
        "Offers end-to-end services, from implementation and configuration to seamless integration and custom development. Ensures ongoing support and maintenance, providing clients with secure, up-to-date, and optimized ServiceNow instances.",
      link: "/servicenow-solutions",
    },
  ];

const ServicesIntroAlt = () => {
  return (
    // Service introduction section
    <section className="tp-about-area pt-120 pb-90 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
      <div className="container">
        {sections.map((section, index) => (
          <div key={index} className="row align-items-center">
            {/* Column for service title */}
            <div className="col-xxl-5 col-xl-3 col-lg-3 col-md-3">
              <div className="section-title mb-55">
              {/* Make the title clickable and link it to section.link */}
              <h2 className="dp-section-title mb-15 text-uppercase">
                  <a href={section.link}>{section.title}</a>
                </h2>
              </div>
            </div>
            {/* Column for service description */}
            <div className="col-xxl-7 col-xl-9 col-lg-9 col-md-9">
              <div className="tp-about-content pb-30 ml-80">
                <div className="section-title mb-55">
                  {/* Display the service description */}
                  <p>{section.description}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesIntroAlt;
