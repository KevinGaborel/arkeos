import React, { useState } from 'react';
import './style.css'
import axios from 'axios'


const Messagerie_answer = () => {

  const [post, setPost] = useState("");
  let token = localStorage.getItem("token");

  const address = window.location.href;

  let url = address.split("/");
  let id = url[url.length - 1];
  console.log(id);

  const CreatePost = (event) => {
   
  
  axios.post(`http://localhost:3000/messages/${id}`,
    {
     content : post,
    },
 {
      headers: {
        authorization: token,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then((res) => {
      console.log(res)
    })

  }

  return (
    <div className=" Chat_answer">
      <form onSubmit={CreatePost}>

        <textarea id="Chat_answer_area"
          rows="5" cols="33"
           value= {post} onChange={(e) => setPost(e.target.value)}>

        </textarea>
        <button className=" Send_answer_button" type="submit" value="Envoyer">Envoyer</button>
        
      </form>
    </div>
  )
}

export default Messagerie_answer 
