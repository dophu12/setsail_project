import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TourFilterHolder from "../Modules/TourFilterHolder";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <i className="slider-arrow fas fa-chevron-left"></i>
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
      <i className="slider-arrow fas fa-chevron-right"></i>
    </div>
  );
}

function HeroSection({ url_1, url_2, text_1, text_2 }) {
  var settings = {
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    pauseOnHover: false,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="hero-section">
      <Slider {...settings}>
        <div className="slider-image">
          <img src={url_1} alt="" className="slider-img-1" />
          <div className="slider-text">
            <h3 className="sub-heading">{text_1[0]}</h3>
            <h1 className="heading">{text_1[1]}</h1>
            <p className="desc">{text_1[2]}</p>

          </div>
        </div>
        <div className="slider-image">
          <img src={url_2} alt="" className="slider-img-2" />
          <div className="slider-text">
            <h3 className="sub-heading">{text_2[0]}</h3>
            <h1 className="heading">{text_2[1]}</h1>
            <p className="desc">{text_2[2]}</p>
          </div>
        </div>
      </Slider>
      <TourFilterHolder />
    </div>
  );
}

export default HeroSection;
