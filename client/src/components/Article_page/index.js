import React, { useState, useEffect } from "react";
import frog from "../../assets/images/frog.jpg";
import profil from "../../assets/images/profil.png";
import Like_button from "../Like_button";
import Comment from "../Comments";
import CommentairePost from "../CommentairePost";
import "./style.css";
import axios from "axios";
import Article_modifier from "../Article_modifier";
import { checkPropTypes } from "prop-types";

const Article = () => {
  const [content, setContent] = useState([]);
  const [author, setAuthor] = useState([]);
  const [title, setTitle] = useState([]);
  const [articledata, setArticledata] = useState([]);
  const [author_id, setAuthor_id] = useState([]);

  let token = localStorage.getItem("token");
  let user_id = localStorage.getItem("user");
  console.log(user_id);

  const address = window.location.href;
  let url = address.split("/");
  let id = url[url.length - 1];
  console.log(url);
  const getDataFromApi = async () => {
    axios
      .get(`http://localhost:3000/articles/${id}`, {
        headers: {
          authorization: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setContent(response.data[0].content);
        setTitle(response.data[0].title);
        setAuthor(response.data[0].author);
        setArticledata(response.data[0]);
        setAuthor_id(response.data[0].author_id);
        console.log(response.data[0].author_id, user_id);
      });
  };
  useEffect(() => {
    getDataFromApi();
  }, []);

  useEffect(() => {
    console.log(articledata);
  }, [articledata]);

  return (
    <>
      {user_id == author_id ? <Article_modifier data={articledata} /> : null}
      <div className="Article">
        <div className="One_article_card">
          <div className="Image_container">
            <img
              className="One_article_picture"
              src={"http://localhost:3000/image/" + articledata.url_picture}
              alt="Image de l'article"
            ></img>
          </div>
          <div className="Body_container">
            <h1 className="Article_title"> {title}</h1>
            <hr className="One_article_divider "></hr>
            <p className="One_article_body">{content}</p>

            <Like_button data={articledata} />

            <div className="Profil_picture_container">
              <img
                className="Profil_picture"
                src={
                  "http://localhost:3000/image/" + articledata.author_picture
                } // a remplacer
                alt="Image de profil"
              ></img>
              <p className="Author_pseudo">{author}</p>
            </div>
          </div>
        </div>
        <div className="Answers">
          <Comment />

          <div className="Answer_form_container">
            <CommentairePost id={id} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Article;
