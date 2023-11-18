import Link from "next/link";
import React from "react";

const PageHeader = ({ title, sub_title, bg_img }) => {
  return (
    <section
      className="include-bg pt-150 pb-100 breadcrumb__overlay"
      style={{
        backgroundImage: `url(${bg_img})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="page-header-title mb-35 text-uppercase">
              <h1 className="mt-15">
                {title}
                <br />
                <span className="colour-1">{sub_title}</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Use default values to provide fallbacks if the props are not provided
PageHeader.defaultProps = {
  title: "Default Title",
  sub_title: "Default Subtitle",
  bg_img: "/assets/img/default-image.png",
};

export default PageHeader;

