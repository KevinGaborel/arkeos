import React from "react";

import "./styles.scss";
const MemberCard = (props) => {
  return (
    <div className="card">
      <a href={"/members/" + props.username}>
        <div className="card-image-container">
          <img
            className="card-img-top"
            src="https://static-cse.canva.com/blob/189288/article_canva_le_guide_pour_creer_de_superbes_photos_de_profil_9-1.jpg"
            alt="image"
          />
        </div>

        <div className="card-body">
          <h3>
            <a href={"/members/" + props.username}>{props.username}</a>
          </h3>

          <h4>{props.city}</h4>
          <p className="card-text">{props.presentation}</p>
          <p className="card-text">
            {props.genre} {props.species}
          </p>
        </div>
      </a>
    </div>
  );
};

export default MemberCard;
