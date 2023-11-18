import Link from "next/link";
import React from "react";

const servicenow_data = {
  bg_img: "/assets/img/bg/servicenow-img-01.jpg",
  experiences_years: "23",
  title: "Illuminating Achievements of ServiceNow:",
  sub_title: "Industry Insights",
};

const { bg_img, experiences_years, title, sub_title } =
  servicenow_data;
const ServiceNowSection = () => {
  return (
    <>
      <section
        className="servicenow-area pb-90 wow fadeInUp"
        data-wow-duration=".8s"
        data-wow-delay=".4s"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-7 col-md-7">
              <div className="tp-servicenow-content mb-30">
                <div className="section-title mb-25">
                         <h2 className="dp-section-title mb-20">
                  {title}
                 <span className="colour-0"> {sub_title} </span> 
                  </h2>             
                </div>
                <div className="tp-servicenow-list mb-35">
                  <ul>
                    {servicenow_list.map((item, i) => (
                      <li key={i}>
                        <i className="fa-light fa-check"></i> {item.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="servicenow-btn">
                  <Link href="/about" className="tp-btn">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
              
            <div className="col-xl-6 col-lg-5 col-md-5">
              <div className="tp-servicenow-img p-relative mb-30 ml-25">
                <img src={bg_img} alt="servicenow-img" />
                <div className="tpservicenow-img-text d-none d-md-block">
                  <ul>
                    <li>
                      <i>{experiences_years}+</i>
                      <p>Years Experiences</p>
                    </li>
                    <li>
                      <i className="fa-light fa-check"></i>
                      <p>Fully Safe & Secure</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceNowSection;
