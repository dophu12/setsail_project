import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ListImgs } from "../Data/DestinationCarousel";
import Navbar from "../Header/Navbar";

function DestinationCarousel() {
  const [slideRef, setSlideRef] = useState();

  useEffect(() => {
    const handleWheel = (e) => {
      e.deltaY > 0 ? slideRef.slickNext() : slideRef.slickPrev();
      e.deltaY < 0 ? slideRef.slickPrev() : slideRef.slickNext();
    };
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [slideRef]);

  const settings = {
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    infinite: true,
    touchThreshold: 20,
    ref: (c) => setSlideRef(c),
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          fade: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <div className="destination-carousel">
      <Navbar />
      <Slider {...settings}>
        {ListImgs.map((img, index) => {
          return (
            <div key={index} className="item">
              <div className="item__img">
                <div className="overlay" />
                <img src={img.thumbnail} alt="" />
              </div>
              <div className="item__text">
                <h5 className="sub-title">{img.subTitle}</h5>
                <h4 className="title">{img.title}</h4>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default DestinationCarousel;
