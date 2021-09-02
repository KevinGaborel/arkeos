import React, { useState, useEffect } from "react";
import axios from "axios";
import UploadImg from "../UploadImg";
import Contact_button from "../Contact_button";
import "./styles.scss";

const ProfilPage = (props) => {
  const [member, setMember] = useState([]);
  const [species, setSpecies] = useState([]);
  const address = window.location.href;

  let url = address.split("/");
  let id = url[url.length - 1];
  console.log(id);

  let token = localStorage.getItem("token");

  const getDataFromApi = () => {
    axios
      .get(`http://localhost:3000/membres/${id}`, {
        headers: {
          authorization: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setMember(response.data.dataValues);
        setSpecies(response.data.dataValues.all_species);
        console.log(response.data.dataValues);
      });
  };

  useEffect(() => {
    getDataFromApi();
  }, []);
  console.log(member);
  return (
    <div className="profil-page">
      <div className="profil-main-container">
        <div className="img-container">
          <img src={"http://localhost:3000/image/" + member.profile_picture} />
        </div>
        <div className="profil-important-infos">
          <p className="profil-pseudo">{member.username}</p>
          <p className="profil-location">{member.city}</p>
        </div>

        <div className="Profil_contetnt_container">
          <div className="profil-user-container">
            <p className="Profil-category">Présentation</p>
            <p className="profil-infos">{member.presentation}</p>
            <p className="Profil-category">Mes animaux</p>
            <p className="profil-infos">{species}</p>
          </div>
          <div></div>
        </div>
        <div>
          <Contact_button data={id} />
        </div>
      </div>
    </div>
  );
};
export default ProfilPage;
