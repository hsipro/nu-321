import Link from "next/link";
import React from "react";

// Data for job listings
const jobsData = [
  {
    id: 1,
    img: "/assets/img/icon/user.png",
    icon: "/assets/img/icon/arrow.png",
    title: "Full stack developer",
    link: "#",
  },
  {
    id: 2,
    img: "/assets/img/icon/user.png",
    icon: "/assets/img/icon/arrow.png",
    title: "UI/UX Designer",
    link: "#",
  },
];

// JobItem component for rendering each job listing
const JobItem = ({ id, img, link, title }) => (
  <div key={id} className="col-md-12">
    <div className="tp-cat-item mb-40 d-flex align-items-center">
      {/* Job icon */}
      <div className="tp-category-icon mr-15">
        <img src={img} alt="category-img" />
      </div>
      {/* Job title with Link to job details */}
      <h4 className="tp-category-title">
        <Link className="btn-arrow" href={link}>{title}</Link>
      </h4>
    </div>
  </div>
);

// JoinUs component
const JoinUs = () => {
  return (
    <section className="join-us-area bg-bottom pt-110 pb-80 wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s" style={{ backgroundImage: `url(/assets/img/content/join-us.png)` }}>
      <div className="container">
        <div className="row">
          {/* Left column with introductory text */}
          <div className="col-lg-6">
            <div className="section-title mb-65">
              {/* Title */}
              <h3 className="dp-section-title text-uppercase text-white">
                Become a Trailblazer in Our Ranks
              </h3>
              {/* Description */}
              <p className="text-white">
                Dreaming of a career where passion meets acceleration? Welcome to 321DataPro, where we're not just hiring, we're cultivating stars. In our dynamic, competitive environment, we forge excellence through training, real-world exposure, and groundbreaking projects.
              </p>
              {/* Button to explore other roles */}
              <a className="btn btn-default btn-lgt-green mt-20" href="opportunities">Explore Other Roles</a>
            </div>
          </div>

          {/* Right column with job listings */}
          <div className="col-lg-6">
            <div className="row">
              {/* Mapping over jobsData and rendering job items */}
              {jobsData.map(({ id, img, link, title }) => (
                <JobItem key={id} id={id} img={img} link={link} title={title} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
