import React from "react";
import Slider from "react-slick";
import brands_data from "../data/brands-data";

// slider setting
const setting = {
  dots: false,
  infinite: true,
  autoplaySpeed: 2000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
const BrandArea = ({ style_about }) => {
  return (
    <>
      <section
        className={`brand-area bg-dp-secondary pt-50 pb-50 wow fadeInUp`}
        data-wow-duration="1s"
        data-wow-delay=".4s"
      >
        <div className="container">
          {style_about ? (
            ""
          ) : (
            <div className="row">
              <div className="col-lg-12">
                <div className="mb-65 text-center">
                  <h4 className="mb-20 text-light-green text-uppercase">Trusted by the best</h4>
                </div>
              </div>
            </div>
          )}
          <div className="row">
            <div className="col-xl-12">
              <div className="brand-area dp-brand-active">
                <Slider {...setting}>
                  {brands_data.map((item, i) => (
                    <div key={i} className="brand-item">
                      <a href="#">
                        <img src={item.img} alt="brand-logo" />
                      </a>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandArea;
