import React from "react";
import Btn from "./Btn";

function JoinNow() {
  return (
    <div className="join-now">
      <div className="grid wide">
        <h4 className="join-now__text l-10 m-9 c-12">
          Subscribe Now and Quench Your Wanderlust!
        </h4>
        <Btn className="join-now__btn l-2 m-3 c-5" padding="20px 0px">
          JOIN NOW
        </Btn>
      </div>
    </div>
  );
}

export default JoinNow;
