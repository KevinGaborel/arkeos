import React from "react";
import profil from "../../assets/images/profil.png";
import './style.css'

const Comment = (props) => {
  return (
    <div className="Answer_container">
      <div className="Profil_picture_container_answer">
        <img
          className="Profil_picture_answer"
          src={"http://localhost:3000/image/" + props.data.avatar}
          alt="Image de profil"
        ></img>
      </div>
      <p className="Answer_pseudo">{props.data.author}</p>
      <p className="Answer"> {props.data.content}</p>
    </div>
  );
};

export default Comment;
