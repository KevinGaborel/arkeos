import React from "react";
import "./style.css";
import frog from "../../assets/images/frog.jpg";
import Like_button from "../../components/Like_button";

const Article_card = (props) => {
  return (
    <a href={"/articles/" + props.article.id}>
      <div className="Card">
        <div className="Card_image">
          <img
            className="Article_picture"
            src={
              "http://localhost:3000/image/" +
              props.article.url_picture
            }
            alt="Image de l'article"
          ></img>
        </div>
        <div className="Card_body">
          <h1 className="Card_body_title">{props.article.title}</h1>
          <hr className="divider"></hr>
          <p className="Article_body">{props.article.content}</p>
        </div>
        <div className="votes">
          <Like_button data={props.article} />
        </div>
      </div>
    </a>
  );
};

export default Article_card;
