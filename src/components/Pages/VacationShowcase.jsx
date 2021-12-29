import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { leftSlide, rightSlide, videoInfo1 } from "../Data/VacationShowcase";
import ContentText from "../Content/ContentText";
import ContentVideo from "../Content/ContentVideo";
import Navbar from "../Header/Navbar";
import ItemFloatWrapper from "../Content/ItemFloatWrapper";

function VacationShowcase() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.currentTarget.innerWidth > 1023) {
        e.deltaY > 0 ? nav1?.slickNext() : nav1?.slickPrev();
        e.deltaY > 0 ? nav2?.slickNext() : nav2?.slickPrev();
      }
    };
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [nav1, nav2]);

  return (
    <div className="vacation-showcase">
      <Navbar />
      <ItemFloatWrapper />
      <Slider
        ref={(c) => setNav1(c)}
        className="left-slide"
        vertical={true}
        autoplay={true}
        autoplaySpeed={2000}
        pauseOnHover={false}
        cssEase="ease-in-out"
        // infinite={false}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 5,
              infinite: false,
              autoplay: false,
            },
          },
        ]}
      >
        <div className=" item item-1">
          <img src={leftSlide[0].thumbnail} alt="" />
        </div>

        <img src={leftSlide[1].bg_img} alt="" className="item item-2" />

        <div className=" item item-3">
          <ContentText
            subTitle={leftSlide[2].sub_title}
            title={leftSlide[2].title}
          />
          <ContentVideo data={videoInfo1} />
        </div>

        <img src={leftSlide[3].bg_img} alt="" className="item item-4" />

        <div className=" item item-5">
          <ContentText
            subTitle={leftSlide[4].sub_title}
            title={leftSlide[4].title}
            desc={leftSlide[4].desc}
            btn={leftSlide[4].btn_text}
          />
        </div>
      </Slider>

      <Slider
        className="right-slide"
        ref={(c) => setNav2(c)}
        autoplay={true}
        autoplaySpeed={2000}
        pauseOnHover={false}
        slidesToShow={1}
        slidesToScroll={-1}
        dots={true}
        initialSlide={4}
        // infinite={false}
        arrows={false}
        cssEase="ease-in-out"
        vertical={true}
        responsive={[
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 5,
              infinite: false,
              autoplay: false,
            },
          },
        ]}
      >
        <img src={rightSlide[4].bg_img} alt="" className="item item-5" />

        <div className=" item item-4">
          <img src={rightSlide[3].thumbnail} alt="" />
          <p>
            "Lorem ip sum dolor sit amet, consect etuer adipi scing elit. Aenean
            com modo ligula."
          </p>
          <h4>Marianna Loreto</h4>
        </div>

        <img src={rightSlide[2].bg_img} alt="" className="item item-3" />

        <div className=" item item-2">
          <ContentText
            subTitle={rightSlide[1].sub_title}
            title={rightSlide[1].title}
            desc={rightSlide[1].desc}
            btn={rightSlide[1].btn_text}
          />
        </div>

        <img src={rightSlide[0].bg_img} alt="" className="item item-1" />
      </Slider>
    </div>
  );
}

export default VacationShowcase;
