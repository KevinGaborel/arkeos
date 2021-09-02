import React from "react";

import "./styles.scss";
const MemberCard = (props) => {
  console.log(props.id);

  let token = localStorage.getItem("token");

  const CapitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="card">
      {token ? (
        <a href={"/membres/" + props.id}>
          <div className="card-image-container">
            <img
              className="card-img-top"
              src={"http://localhost:3000/image/" + props.picture}
              alt="image"
            />
          </div>

          <div className="card-body">
            <h3>{props.username}</h3>

            <h4>{props.city}</h4>
            <p className="card-text">{props.presentation}</p>
            <p className="card-text"></p>
          </div>
        </a>
      ) : (
        <a href={"/log"}>
          <div className="card-image-container">
            <img
              className="card-img-top"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
              alt="image"
            />
          </div>

          <div className="card-body">
            <h3>{props.username}</h3>

            <h4>{props.city}</h4>
            <p className="card-text">{props.presentation}</p>
            <p className="card-text"></p>
          </div>
        </a>
      )}
    </div>
  );
};

export default MemberCard;
