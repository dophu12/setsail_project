import React, {memo} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i className="slick-arrow fas fa-chevron-left"></i>
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i className="slick-arrow fas fa-chevron-right"></i>
    </div>
  );
}
function SliderTwoCards({ data }) {
  const settings = {
    infinite: true,
    arrow: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          autoplaySpeed: 4000,
        },
      },
    ],
  };
  return (
    <div className="grid wide">
      <div className="slider-2-card">
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div key={index} className="card">
                <img src={item.thumbnail} alt="" />
                <div className="text__wrapper">
                  <p className="desc">{item.desc}</p>
                  <h4 className="name">{item.name}</h4>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default memo(SliderTwoCards);
