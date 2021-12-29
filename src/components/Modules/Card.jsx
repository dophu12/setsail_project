import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.thumbnail} alt="" className="card-img" />
      <div className="card__text">
        <h3 className="destination">{props.destination}</h3>
        <div className="rating">
          {listStar.map(() => {
            return <i class="fas fa-star"></i>;
          })}
        </div>
        <p className="desc">{props.desc}</p>
        <h4 className="name">{props.name}</h4>
      </div>
    </div>
  );
}

export default Card;
