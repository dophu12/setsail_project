import React, { useState } from "react";
import ContentBlock from "../Content/ContentBlock";
import ContentBlock2 from "../Content/ContentBlock2";
import HeroSection from "../Content/HeroSection";
import Navbar from "../Header/Navbar";
import SubNavbar from "../Header/Sub_Navbar";
import Footer from "../Footer/Footer";
import ItemFloatWrapper from "../Content/ItemFloatWrapper";

import {
  SliderMultiCards,
} from "../Data/Home";

import {
  heroSectionData,
  CelebrateNewYear,
  FromOurBlog,
  TheMagicCity,
} from "../Data/NewYearTrip";
import JoinNow from "../Modules/JoinNow";

function NewYearTrips() {
  const [zIndex, setzIndex] = useState(false);
  const handleNavbarzIndex = (bool) => {
    bool ? setzIndex(true) : setzIndex(false);
  };
  return (
    <div className="new-year-trips">
      <SubNavbar handleNavbarzIndex={handleNavbarzIndex} />

      <Navbar zIndex={zIndex} handleNavbarzIndex={handleNavbarzIndex} />

      <ItemFloatWrapper />

      <HeroSection
        url_1={heroSectionData[0].url_1}
        text_1={heroSectionData[0].text_1}
        url_2={heroSectionData[1].url_2}
        text_2={heroSectionData[1].text_2}
      />

      <ContentBlock
        className="celebrate-new-year"
        subTitle="Celebrate"
        title="New Year’s Eve"
        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum "
        responsive="l-2-4 m-4 c-12"
        data={CelebrateNewYear}
      />

      <ContentBlock2
        className="from-our-blog"
        title="From Our Blog"
        desc="Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem "
        blogs={FromOurBlog}
        imgFeature="https://setsail.qodeinteractive.com/wp-content/uploads/2018/10/new-img-1.png"
      />

      <ContentBlock
        className="the-magic-city"
        subTitle="Celebrate In"
        title="The Magic City"
        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aene an commodo ligula eget dolor. Aenean massa. Cum "
        data={TheMagicCity}
      />

      <ContentBlock
        className="travel-review"
        subTitle="Read The Top"
        title="Travel Reviews"
        desc="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum "
        cards={SliderMultiCards}
      />

      <JoinNow/>

      <Footer/>
    </div>
  );
}

export default NewYearTrips;
