import React, { useState } from "react";
import axios from "axios";
import "./styles.scss";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleLogiin = (event) => {
    event.preventDefault();

    axios
      .post(
        "http://localhost:3000/login",
        {
          email,
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
        if (res.data.errors) {
          console.log(res.data.errors);
        } else {
          window.location = "/";

          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", res.data.user.id);
          let token = localStorage.getItem("token");
          let user = localStorage.getItem("user");
          console.log(token);
          console.log(user);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // reste a faire toute la logique front
  return (

    <div id="Sign_in_form_container">
      <h1 id="Sign_in_title">Connexion</h1>

    <form id="Sign_in_form" onSubmit={HandleLogiin}>
      <label htmlFor="email"></label>
      <input
        placeholder="Email"
        type="text"
        name="email"
        id="email"
        required
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
      <label htmlFor="password"></label>
      <input
        type="password"
        placeholder="Mot de passe"
        type="password"
        name="password"
        id="password"
        required
        onChange={(event) => setPassword(event.target.value)}
        value={password}
      />
      <input id="Sign_in_form_submit_button" type="submit" value="Se connecter" />
     
        <a id="Sign_in_form_message" href="/signup">Pour s'inscrire c'est par ici !</a>
      
    </form>
    </div>
  );
};

export default SignInPage;
