import React, { useState, useEffect } from "react";
import axios from "axios";
import Comment from "../Comment";
const Comments = () => {
  const [comments, setComments] = useState([]);
  let token = localStorage.getItem("token");
  const address = window.location.href;
  let url = address.split("/");
  let id = url[url.length - 1];
  const getDataFromApi = () => {
    axios
      .get(`http://localhost:3000/articles/${id}`, {
        headers: {
          authorization: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setComments(response.data.comment.map((comment, index) => { 
          const obj = {};
          obj.comment = comment;
          obj.author = response.data.author_comment[index];
          obj.profil_picture = response.data.author_picture_comment[index];
          return obj
        }
        ));
      })
  };
  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div className="comment-container">
      {comments.map((comment, index) => (
        <Comment key={index} data={comment} />
      ))}
    </div>
  );
};
export default Comments;
