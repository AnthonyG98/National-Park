import React from "react";
import axios from "axios";
function Images(props) {
  const openModal = (parkId) => {
    axios
      .get(
        `https://developer.nps.gov/api/v1/parks?parkCode=${parkId}&api_key=lF66DX3RdHNuTi9sJPeeP76tfvjChRv0uICHEK5s`
      )
      .then((response) => {
        console.log(response);
      });
  };
  return (
    <>
      <div className="first-container">
        <div className="park-desc">
          <h1>{props.heading}</h1>
          <p>{props.desc}</p>
          <p>Location: {props.location}</p>
          <button className="modal-btn" onClick={openModal(props.id)}>
            Learn More
          </button>
        </div>
        <div
          className="images-container"
          style={{ backgroundImage: `url(${props.img})` }}
        >
          {" "}
        </div>
      </div>
    </>
  );
}

export default Images;
