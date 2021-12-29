import React, { memo } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderMultiCards(props) {
  const handleRating = (item) => {
    const numberStar = Number.parseInt(item.numberStar);
    let listStar = [];
    for (let i = 0; i < numberStar; i++) {
      listStar.push(<i key={i} className="fas fa-star"></i>);
    }
    return listStar;
  };

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    speed: 1000,
    touchThreshold: 22,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-multi-cards">
      <Slider {...settings}>
        {props.cards?.map((item, index) => {
          return (
            <div key={index}>
              <div className="card-item ">
                <div className="card-img">
                  <img src={item.thumbnail} alt="" />
                </div>
                <div className="card__text">
                  <h3 className="destination">{item.destination}</h3>
                  <div className="rating">{handleRating(item)}</div>
                  <p className="desc">{item.desc}</p>
                  <h4 className="name">{item.name}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default memo(SliderMultiCards);
