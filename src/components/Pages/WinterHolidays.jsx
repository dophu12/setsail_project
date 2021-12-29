import React from "react";
import Navbar from "../Header/Navbar";
import HeroSection from "../Content/HeroSection";
import ContentBlock from "../Content/ContentBlock";
import Footer from "../Footer/Footer";

import {
  PlanThePerfectHoliday,
  SliderMultiCards,
} from "../Data/Home";

import {
  heroSectionData,
  tryNowWinterSports,
  tryNowWinterSportsFeature as feature1,
  TopReview,
  EnjoyYourWinterHolidayFeature as feature2,
  chooseYourWinterResort,
} from "../Data/WinterHoliday";
import ItemFloatWrapper from "../Content/ItemFloatWrapper";

function WinterHolidays() {
  return (
    <div className="winter-holidays">
      <Navbar />

      <ItemFloatWrapper/>

      <HeroSection
        url_1={heroSectionData[0].url_1}
        text_1={heroSectionData[0].text_1}
        url_2={heroSectionData[1].url_2}
        text_2={heroSectionData[1].text_2}
      />

      <ContentBlock
        className="plan-the-perfect-holiday"
        sliderImgs={PlanThePerfectHoliday}
      />

      <ContentBlock
        className="try-now-winter-sports"
        subTitle="Try Now"
        title="Winter Sports"
        data={tryNowWinterSports}
        feature={feature1}
      />

      <ContentBlock
        className="top-review"
        title="Top Review"
        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum "
        data={TopReview}
        cards={SliderMultiCards}
      />

      <ContentBlock
        className="enjoy-your-winter-holiday"
        subTitle="Enjoy Your"
        title="Winter Holiday"
        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor lorem ipsum. "
        feature={feature2}
        scrollY={[1520, 3120]}
      />

      <ContentBlock
        className="choose-your-winter-resort"
        subTitle="Choose Your"
        title="Winter Resort"
        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor lorem ipsum."
        responsive="l-4 m-6 c-12"
        data={chooseYourWinterResort}
      />

      <Footer />
    </div>
  );
}

export default WinterHolidays;
