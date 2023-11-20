import React from "react";
import Link from "next/link";

const sections = [
    {
      title: "CRM Planning and Development",
      description: [
        "Integration, customization, and management of CRM.",
        "Streamlined customer interactions and enhanced engagement.",
        "Multi-tenant structure for collaborative CRM usage if available."
      ]
    },
    {
      title: "Website Design & Software Development",
      description: [
        "Creative ideation, UI/UX design, and responsive layout.",
        "From Websites to Full-stack development for seamless functionality.",
        "Integrating AI-powered features for enhanced user experience."
      ]
    },
    {
      title: "Hosting & License Maintenance",
      description: [
        "Secure hosting solutions for websites and applications.",
        "License management and updates for software tools.",
        "Ensuring high uptime and optimal performance."
      ]
    },
    {
      title: "Artificial Intelligence (AI)",
      description: [
        "AI-driven analysis and insights for data optimization.",
        "Predictive analytics, trend identification, and anomaly detection.",
        "AI-enhanced processes for efficiency and innovation."
      ]
    },
    {
      title: "Bespoke Technical Work",
      description: [
        "Customized technical solutions tailored to business needs.",
        "Full-stack development, integrations, and automation.",
        "Creative AI-driven content generation and design."
      ]
    },
    {
      title: "Managed Services for Technical Solutions",
      description: [
        "Ongoing management, updates, and support for technical solutions.",
        "Proactive monitoring, maintenance, and issue resolution.",
        "Ensuring the longevity and performance of systems."
      ]
    },
    {
      title: "Business Proposal Writing & Review",
      description: [
        "Crafting compelling, well-structured business proposals.",
        "Reviewing and enhancing existing proposals for effectiveness.",
        "Leveraging AI for proposal content generation."
      ]
    },
    {
      title: "Data Storage & Migration",
      description: [
        "Secure data storage solutions with encryption.",
        "Data migration services for seamless transition.",
        "AI-assisted data migration planning and execution."
      ]
    },
    {
      title: "Technical Audit",
      description: [
        "Comprehensive evaluation of technical systems and infrastructure.",
        "Identifying vulnerabilities, optimization opportunities, and best practices.",
        "AI-supported auditing for accuracy and efficiency."
      ]
    },
    {
      title: "E-commerce Solutions",
      description: [
        "Building and optimizing e-commerce platforms.",
        "Integration of AI for personalized shopping experiences.",
        "Secure payment gateways and order processing."
      ]
    },
    {
      title: "SEO Services",
      description: [
        "Search engine optimization strategies to enhance online visibility.",
        "Keyword research, on-page optimization, and backlink management.",
        "Improved organic search rankings and increased website traffic."
      ]
    },
    {
      title: "Additional Services",
      description: [
        "Business Process Optimization: Streamlining operations for efficiency gains.",
        "AI-Powered Customer Insights: Understanding customer behaviors and preferences.",
        "Regulatory Compliance Solutions: Ensuring adherence to industry regulations.",
        "Risk Assessment and Management: Identifying and mitigating potential risks.",
        "User Training and Support: Educating users for optimal platform utilization.",
        "Cloud Architecture Solutions: Designing and implementing cloud-based systems.",
        "Integration Services: Seamlessly connecting diverse software applications."
      ]
    }
  ];
  
 
  const ServicesIntroAlt = () => {
    return (
      // Service introduction section
      <section className="services-area pt-120 pb-90 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s">
        <div className="container">
          {sections.map((section, index) => (
            <div key={index} className="row align-items-center bdr__bottom__grey">
              {/* Column for service title */}
              <div className="col-xxl-5 col-xl-5 col-lg-4">
                <div className="section-title mb-55 mt-30">
                  {/* Make the title clickable and link it to section.link */}
                  <h2 className="dp-section-title mb-15 text-uppercase">
                  
                      {section.title}
               
                  </h2>
                </div>
              </div>
              {/* Column for service description */}
              <div className="col-xxl-7 col-xl-7 col-lg-8">
                <div className="pb-20 ml-80">
                  <div className="section-title mb-55 mt-30">
                    <ul>
                    {/* Display the service description */}
                    {section.description.map((line, idx) => (
                      <li key={idx}>{line}</li>
                    ))}
                    </ul>
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
  