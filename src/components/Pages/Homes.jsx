import React, { useState } from "react";
import ContentBlock from "../Content/ContentBlock";
import ContentBlock2 from "../Content/ContentBlock2";
import HeroSection from "../Content/HeroSection";
import Navbar from "../Header/Navbar";
import SubNavbar from "../Header/Sub_Navbar";
import SliderTwoCards from "../Content/SliderTwoCards";
import Footer from "../Footer/Footer";
import ItemFloatWrapper from "../Content/ItemFloatWrapper";

import {
  heroSectionData,
  chooseYourPerfectHoliday,
  chooseYourPerfectHolidayFeature as feature1,
  breathtakingCities,
  breathtakingCitiesFeature as feature2,
  PlanThePerfectHoliday,
  List2Card,
  TheUnforgettableMediterranean,
  ReadTheTopTravelReview,
  SliderMultiCards,
  FromOurBlog,
  chooseYourDestination,
  PackUpAndGo,
} from "../Data/Home";
import JoinNow from "../Modules/JoinNow";

function Homes() {
  //handle z-index of Navbar when current-language:hover
  const [zIndex, setzIndex] = useState(false);
  const handleNavbarzIndex = (bool) => {
    bool ? setzIndex(true) : setzIndex(false);
  };

  return (
    <div className="home">
      <SubNavbar handleNavbarzIndex={handleNavbarzIndex} />

      <Navbar zIndex={zIndex} handleNavbarzIndex={handleNavbarzIndex} />

      <ItemFloatWrapper/>

      <HeroSection
        url_1={heroSectionData[0].url_1}
        text_1={heroSectionData[0].text_1}
        url_2={heroSectionData[1].url_2}
        text_2={heroSectionData[1].text_2}
      />

      <ContentBlock
        className="choose-your-perfect-holiday"
        subTitle="Choose Your"
        title="Perfect Holiday"
        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the "
        responsive="l-3 m-6 c-12"
        data={chooseYourPerfectHoliday}
        feature={feature1}
      />

      <ContentBlock
        className="breathtaking-cities"
        subTitle="Go & Discover"
        title="Breathtaking Cities"
        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the "
        data={breathtakingCities}
        feature={feature2}
        scrollY={[1520, 3120]}
      />

      <ContentBlock
        className="plan-the-perfect-holiday"
        subTitle="Plan The"
        title="Perfect Holiday"
        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the "
        sliderImgs={PlanThePerfectHoliday}
      />

      <SliderTwoCards data={List2Card} />

      <ContentBlock
        className="the-unforgettable-mediterranean"
        subTitle="The Unforgettable"
        title="Mediterranean"
        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis "
        responsive="l-4 m-6 c-12"
        data={TheUnforgettableMediterranean}
      />

      <ContentBlock
        className="read-the-top-travel-review"
        subTitle="Read The Top"
        title="Travel Review"
        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the "
        data={ReadTheTopTravelReview}
        cards={SliderMultiCards}
        scrollY={[5100, 6500]}
      />

      <ContentBlock2
        className="from-our-blog"
        title="From Our Blog"
        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the"
        blogs={FromOurBlog}
        subTitleFeature="travel.com"
        titleFeature="Sale up to 70%"
        imgFeature="https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/h1-banner-img-1.jpg"
      />

      <ContentBlock
        className="choose-your-destination"
        subTitle="Choose Your"
        title="Destination"
        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the "
        responsive="l-4 m-6 c-12"
        data={chooseYourDestination}
      />

      <ContentBlock
        className="pack-up-and-go"
        subTitle="Get Ready"
        title="Pack Up And Go"
        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the "
        responsive="l-4 m-6 c-12"
        stamps={PackUpAndGo}
      />

      <JoinNow/>

      <Footer />
    </div>
  );
}

export default Homes;
