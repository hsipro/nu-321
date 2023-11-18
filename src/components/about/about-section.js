
import Link from "next/link";
import React from "react";

const aboutInfo = {
  img1: "/assets/img/content/peopleinacircle.jpg",
  img2: "/assets/img/content/page-about.jpg",
  title: "Inspiring Transformation",
  subTitle: "at 321DataPro",
  section: "About Us",
  description: (
    <>
      <p>
        At 321DataPro is more than an ITSM company; we are catalysts for change
        driven by a higher purpose. Our mission reaches beyond enhancing our
        clients' ROI; it's about transforming lives and livelihoods. At the
        forefront of technological innovation, we redefine digital solutions and
        services to empower enterprises in our ever-evolving digital world.
      </p>
      <p>
Our commitment to AI driven solutions, data, and analytics unlocks data's potential for valuable insights, creating informed decision-making. With cloud consulting & migration services, we provide enhanced scalability and flexibility. Our dedication to support services ensures your technology is not only implemented but also maintained to the highest standards.
</p><p>
We believe in the transformative power of technology, acting as your partners in navigating the digital landscape. Our mission is to lead you to success through innovation, efficiency, and a commitment to excellence.
</p><p>
In the face of COVID-19's challenges, we've embraced new opportunities in cloud computing and data. We stand as witnesses, survivors, and champions of positive change, guided by a higher power.
</p><p>
Fueled by faith, powered by prayer, and driven by purpose, we are entrusted with our talents to spark positive change. Together, united in purpose, passion, and prayer we can achieve the extraordinary.
</p><p>
Join us on this journey towards a brighter digital future, where possibilities are limitless, and together, we'll make a difference.
</p><p> 
“The power of people is often underestimated. Regardless of creed, color, or country of origin, when united in purpose, passion, and prayer, we can achieve the extraordinary, for we "can do all things through Christ who strengthens." - Philippians 4:13</p>,
    </>
  ),
};

const AboutSection = () => {
  const { img1, img2, subTitle, title, description, section } = aboutInfo;

  return (
    <section
      className="tp-about-area pt-120 pb-90 wow fadeInUp"
      data-wow-duration="1.5s"
      data-wow-delay=".4s"
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-6">
            <div className="tp-about-img p-relative pb-30 ml-10 pr-40">
              <img src={img1} alt="about-img1" />
              <img src={img2} alt="about-img2" />
            </div>
          </div>
          <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6">
            <div className="tp-about-content pb-30">
              <div className="dp-section-title-alt text-uppercase mb-55 mt-30">
                <span className="section-small">{section}</span>
                <h2 className="mb-15 colour-0">
                  <span className="colour-0">{title}</span>{" "}
                  <span className="colour-4">{subTitle}</span>
                </h2>
              </div>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
