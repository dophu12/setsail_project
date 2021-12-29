import React, { useState } from "react";
import ContentListImage from "./ContentListImage";
import ContentSliderImage from "./ContentSliderImage";
import ContentVideo from "./ContentVideo";
import SliderMultiCards from "./SliderMultiCards";
import ContentText from "./ContentText";
import ContentSliderStamp from "./ContentSliderStamp";

function ContentBlock(props) {
  const [scroll, setScroll] = useState();

  window.addEventListener("scroll", () => {
    let bool =
      window.scrollY > props.scrollY?.[0] &&
      window.scrollY < props.scrollY?.[1];
    if (bool) {
      setScroll(((window.scrollY - props.scrollY?.[0]) / 1500) * -170);
    }
  });

  return (
    <div className={props.className}>
      <div
        className="content__container"
        style={{
          backgroundImage: `url(${props.data?.[0].bg_image})`,
          backgroundPosition: `center ${scroll}px`,
        }}
      >
        <div className="grid wide">
          <div className="content__wrapper">
            {/* __TEXT SECTION ON THE TOP */}
            <div className="content__text__wrapper">
              <ContentText
                subTitle={props.subTitle}
                title={props.title}
                desc={props.desc}
                btn = {props?.btn_text}
              />
            </div>

            {/* __LIST IMAGE NON SLIDER SECTION IN BETWEEN */}
            <div className="content__list-image__wrapper">
              <ContentListImage
                responsive={props.responsive}
                data={props.data}
              />
            </div>

            {/* __VIDEO SECTION IN BETWEEN */}
            <div className="content__video__wrapper">
              <ContentVideo data={props.data} />
            </div>
          </div>

          {/* __STAMP SLIDER SECTION IN BETWEEN */}
          <div className="content__stamp__wrapper">
            <ContentSliderStamp stamps={props.stamps} />
          </div>
        </div>

        {/* __SLIDER IMAGE SECTION IN BETWEEN */}
        <div className="content__slider-image__wrapper">
          <ContentSliderImage sliderImgs={props.sliderImgs} />
        </div>

        {/* __SLIDER CARD SECTION IN BETWEEN */}
        <div className="content__slider-card__wrapper">
          <SliderMultiCards cards={props.cards} />
        </div>
      </div>

      {/* __FOOTER SECTION OF THIS BLOCK */}
      <div className="grid wide">
        <div
          className="block__footer"
          style={{ display: props.feature ? "flex" : "none" }}
        >
          {props.feature?.map((item, index) => {
            return (
              <div key={index} className="item-wrapper l-3 m-6 c-12">
                <img src={item.thumbnail} alt="" className="item-img" />
                <div className="item__text">
                  <h4 className="item__title">{item.title}</h4>
                  <p className="item__desc">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ContentBlock;
