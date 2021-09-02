import axios from "axios";
import React, { useState } from "react";
import './style.css'

const CommentairePost = (props) => {
  const [commentaire, setCommentaire] = useState("");
  const [author, setAuthor] = useState("");
  let token = localStorage.getItem("token");
  const CreateCommentaire = (event) => {
    event.preventDefault();
    //const commentaireData = {
    //  commentaire,
    //  author,
    // };

    axios
      .post(
        `http://localhost:3000/articles/${props.id}/comment`,
        {
          content: commentaire,
        },
        {
          headers: {
            authorization: token,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  };
  return (
    <div className="Answer_form">
      <form onSubmit={CreateCommentaire}>
        <textarea
          type="text"
          className="Form"
          placeholder="Inscrivez votre reponse"
          onChange={(e) => setCommentaire(e.target.value)}
          value={commentaire}
        ></textarea>
        <div className="Submit_container">
          <input className="Submit_comment" type="submit" value="Envoyer"></input>
        </div>
      </form>
    </div>
  );
};

export default CommentairePost;
