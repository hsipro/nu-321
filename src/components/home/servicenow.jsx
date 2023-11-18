import Link from "next/link";
import React from "react";

const serviceNowData = {
  bgImg: "/assets/img/content/service-now.jpg",
  title: "Illuminating Achievements of ServiceNow:",
  subTitle: "Industry Insights",
  serviceNowList: [
    { title: "Over 25,000 companies trust ServiceNow as their digital partner." },
    { title: "A Gartner report shows ServiceNow's 75.6% market share growth in Customer Service and Support." },
    { title: "Projected to achieve $10 billion revenue by 2024 with a 22% compound annual growth rate." },
    { title: "80% of the Fortune 500 harness the power of ServiceNow." },
    { title: "Ranked #1 on FORTUNE® Future 50 2020 list." },
    { title: "Placed #4 in FORTUNE World’s Most Admired Companies™ 2021." },
    { title: "ServiceNow CEO Bill McDermott listed among Glassdoor's Top CEOs 2021." },
    { title: "Consistently listed on FORTUNE® 100 Best Companies to Work For™ list." }
  ]
};

const { bgImg, title, subTitle, serviceNowList } = serviceNowData;

const ServiceNow = () => {
  return (
    <section
      className="servicenow-area pb-90 mt-90 wow fadeInUp"
      data-wow-duration=".8s"
      data-wow-delay=".4s"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5 col-lg-6 col-md-6">
            <div className="tp-servicenow-content mb-30">
              <div className="section-title mb-25">
                <h2 className="dp-section-title mb-20">
                  {title} <span className="colour-0">{subTitle}</span>
                </h2>
              </div>
              <div className="tp-servicenow-list mb-35">
                <ul>
                  {serviceNowList.map((item, i) => (
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

          <div className="col-xl-7 col-lg-6 col-md-6">
            <div className="tp-servicenow-img p-relative mb-30 ml-25">
              <img src={bgImg} alt="servicenow-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceNow;
