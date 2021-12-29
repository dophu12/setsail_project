import React , {memo} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ContentSliderImage({ sliderImgs }) {
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    speed: 1000,
    swipeToSlide: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    touchThreshold: 22,
    responsive: [
      {
        breakpoint: 1239,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 500,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <div className="content__slider-image">
      <Slider {...settings}>
        {sliderImgs?.map((item, index) => {
          return (
            <div key={index}>
              <div  className="item-card">
                <div className="item-img">
                  <img src={item.thumbnail} alt="" />
                </div>
                <div className="item-middle-inner">
                  <div className="tour-duration">
                    <i className={item.icon_time} />
                    <span>{item.tour_duration}</span>
                  </div>
                  <div className="min-age">
                    <i className={item.icon_user} />
                    <span>{item.min_age}</span>
                  </div>
                  <div className="categogy">
                    <i className={item.icon_marker} />
                    <span>{item.categogy}</span>
                  </div>
                </div>
                <div className="item-text">
                  <h3 className="title">{item.title}</h3>
                  <p className="desc">{item.desc}</p>
                  <div className="bottom-inner">
                    <p className="price">{item.price}</p>
                    <div className="rating">
                      <i className={item.icon_rating}></i>
                      <p>{item.rating}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default memo(ContentSliderImage);