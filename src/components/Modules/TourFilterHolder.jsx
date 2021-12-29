import React, { useState, useEffect } from "react";
import Btn from "./Btn";

function TourFilterHolder() {
  //handle open dropdown
  const [month, setMonth] = useState(false);
  const [travelType, setTravelType] = useState(false);
  useEffect(() => {
    window.addEventListener("click", () => {
      setMonth(false);
      setTravelType(false);
    });
  }, []);

  //handle dropdown when window scrollY in 60px -> 270px
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300 && !scroll) {
        setScroll(true);
      } else if (window.scrollY < 60 && scroll) {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <div className="tour-filter-holder">
      <div className="slider__search-bar">
        <div className="slider__search-bar-item">
          <i className="fas fa-compass"></i>
          <input
            type="text"
            className="slider__destination-text"
            placeholder="Where to?"
          />
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setMonth(!month);
            setTravelType(false);
          }}
          className="slider__search-bar-item"
        >
          <i className="far fa-calendar-alt"></i>
          <div className="slider__search-month">Month</div>
          <ul
            className="slider__month-dropdown"
            style={{
              display: month ? "block" : "none",
              bottom: scroll ? "-205px" : "100%",
            }}
          >
            <li className="slider__month-item">Month</li>
            <li className="slider__month-item">January</li>
            <li className="slider__month-item">February</li>
            <li className="slider__month-item">March</li>
            <li className="slider__month-item">April</li>
            <li className="slider__month-item">May</li>
            <li className="slider__month-item">June</li>
            <li className="slider__month-item">July</li>
            <li className="slider__month-item">August</li>
            <li className="slider__month-item">September</li>
            <li className="slider__month-item">October</li>
            <li className="slider__month-item">November</li>
            <li className="slider__month-item">December</li>
          </ul>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            setTravelType(true);
            setMonth(false);
          }}
          className="slider__search-bar-item"
        >
          <i className="fas fa-thumbtack"></i>
          <div className="slider__search-travel-type">Travel Type</div>
          <ul
            className="slider__travel-type-dropdown"
            style={{
              display: travelType ? "block" : "none",
              bottom: scroll ? "-205px" : "100%",
            }}
          >
            <li className="slider__travel-type-item">Travel Type</li>
            <li className="slider__travel-type-item">Europe</li>
            <li className="slider__travel-type-item">Latest</li>
            <li className="slider__travel-type-item">NY</li>
            <li className="slider__travel-type-item">Popular</li>
            <li className="slider__travel-type-item">Skiing</li>
            <li className="slider__travel-type-item">Trendy</li>
            <li className="slider__travel-type-item">Wines</li>
          </ul>
        </div>
        <Btn className="slider__search-btn" padding="28px 10px">
          FIND NOW
        </Btn>
      </div>
    </div>
  );
}

export default TourFilterHolder;
