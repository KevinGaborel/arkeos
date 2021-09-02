import React from "react";
import profil from "../../assets/images/profil.png";
import "./style.css";

const Message1 = (props) => {
  console.log(props);

  return (
    <div className="Answer_container Message_container">
      <div className="Profil_picture_container_answer">
        <img
          className="Profil_picture_answer"
          src={"http://localhost:3000/image/" + props.data.profile_picture}
          alt="Image de profil"
        ></img>
      </div>

      <p className="Answer_date"> {props.data.created_at}</p>

      <p className="Answer_pseudo">{props.data.author}</p>
      <p className="Answer_content"> {props.data.content}</p>
    </div>
  );
};

export default Message1;
