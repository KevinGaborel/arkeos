import React, { useState } from "react";
import axios from "axios";
import SignInPage from "../SignInPage";

import "./styles.scss";

const SignUpPage = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [controlPassword, setControlPassword] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    // get div element
    const passwordConfirmError = document.querySelector(".password-conf-error");

    if (password !== controlPassword) {
      passwordConfirmError.textContent =
        "Les mot de passe ne sont pas identiques";
    } else {
      let data = new FormData(event.target);
      console.log(data);
      axios
        .post(
          "http://localhost:3000/signin",
          {
            email,
            username,
            password,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            console.log(res.data.errors);
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      {formSubmit ? (
        <>
          <SignInPage />
          <div id="Signup_message">
            <h3 id="Signup_sucess_message">
              Enregistrement réussi, veuillez-vous connecter <span id="Signup_sucess_username">{username}</span> !
            </h3>
          </div>
        </>
      ) : (
        <div id="Signup_form_container">
          <h1 id="Sign_up_title" > Inscription </h1>
        <form id="signup_form" onSubmit={handleRegister}>
          
          <label htmlFor="pseudo"></label>
          <input
            placeholder="Pseudo"
            type="text"
            name="username"
            id="pseudo"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label htmlFor="email"></label>
          <input
            placeholder="Email"
            type="text"
            name="email"
            id="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
            required
          />
          <label htmlFor="password"></label>
          <input
            type="password"
            placeholder="Mot de passe"
            type="password"
            name="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
            required
          />
          <div className="password-conf-error"></div>
          <label htmlFor="password-conf"></label>
          <input
            type="password"
            name="password"
            id="password-conf"
            placeholder="Confirmer le mot de passe"
            onChange={(event) => setControlPassword(event.target.value)}
            value={controlPassword}
            required
          />
          <input id="Signup_form_container_submit_button" type="submit" value="S'inscrire" />
        </form>
        </div>
      )}
    </>
  );
};

export default SignUpPage;
