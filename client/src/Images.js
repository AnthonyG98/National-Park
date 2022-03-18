import React from "react";

function Images(props) {
  return (
    <>
      <div className="first-container">
        <div className="park-desc">
          <h1>{props.heading}</h1>
          <p>{props.desc}</p>
          <p>Location: {props.location}</p>
        </div>
        <div
          className="images-container"
          style={{ backgroundImage: `url(${props.img})` }}
        ></div>
      </div>
    </>
  );
}

export default Images;
