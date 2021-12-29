import React from "react";
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

function ContentSliderStamp(props) {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    arrow: true,
    autoplay: true,
    autoplaySpeed: 6000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1239,
        settings: {
          slidesToShow: 3,
          autoplaySpeed: 4000,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <div className="content-slider-stamp">
      <Slider {...settings}>
        {props.stamps?.map((item, index) => {
          return (
            <div key={index} className="item-stamp">
              <div className="stamp-img">
                <img src={item.thumbnail} alt=""/>
                  <div className="stamp-text">
                    <h3 className="title">{item.title}</h3>
                    <p className="desc">{item.desc}</p>
                  </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default ContentSliderStamp;
