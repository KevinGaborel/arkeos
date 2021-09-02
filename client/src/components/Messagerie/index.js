import React, { useState, useEffect } from "react";
import Messagerie_answer from "../Messagerie_answer";
import Message1 from "../Message1";
import axios from "axios";
import "./style.css";

const Messagerie = () => {
  let token = localStorage.getItem("token");
  let user_id = localStorage.getItem("user");
  console.log(user_id);

  const [messages, setMessages] = useState([]);

  const address = window.location.href;

  let url = address.split("/");
  let id = url[url.length - 1];
  console.log(id);

  const getDataFromApi = () => {
    axios
      .get(`http://localhost:3000/messages/${id}`, {
        headers: {
          authorization: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        console.log(response.data.messages);
        setMessages(response.data.messages);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(messages);

  useEffect(() => {
    getDataFromApi();
  }, []);

  return (
    <div className="Chat_container">
      <div className="Chat_card">
        <div className=" Main_conversation">
          <ul>
            {messages.map((message) => (
              <li>
                {" "}
                <Message1 key={message.id} data={message} />{" "}
              </li>
            ))}
          </ul>
        </div>
        <div className=" Answer_area">
          <Messagerie_answer />
        </div>
      </div>
    </div>
  );
};

export default Messagerie;
