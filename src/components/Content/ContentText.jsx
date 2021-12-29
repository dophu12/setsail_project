import React, { memo } from "react";
import Btn from "../Modules/Btn";

function ContentText(props) {
  return (
    <>
      <h3 className="sub-title">{props.subTitle}</h3>
      <h2 className="title">{props.title}</h2>
      <p className="desc">{props.desc}</p>
      <Btn>{props?.btn}</Btn>
    </>
  );
}

export default memo(ContentText);
