import React, {memo} from "react";

function ContentListImage({ data, responsive }) {
  return (
    <ul className="content__list-image">
      {data?.map((item, index) => {
        return (
          <li
            key={index}
            data-label={item.label}
            className={`item-image ${responsive}`}
          >
            <a href="/" className="item-image-link">
              <img src={item.thumbnail} alt="" className="image" />
              <div className="item-title">{item.title}</div>
              <div className="inner-wrapper">
                <div className="left-inner">
                  <span className="destination">{item.destination}</span>
                  <p className="desc">{ item?.desc}</p>
                  <div className="rating-wrapper">
                    <i className={item.icon}></i>
                    <p className="rating-text">{item.rating}</p>
                  </div>
                </div>
                <div className="right-inner">
                  <span className="price">{item.price}</span>
                </div>
              </div>
            </a>
            <span className="feature-top">
              <i className={item.starIcon}></i>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default memo(ContentListImage);
