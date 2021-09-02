import React, { useState, useEffect } from "react";
import Profile_modifier from '../Profile_modifier';
import axios from "axios";
import "./style.css";

const ProfilPage = (props) => {
  const [profildata, setProfildata] = useState([]);
  
  const address = window.location.href;

  let url = address.split("/");
  let id = url[url.length - 1];
  console.log(id);

  let token = localStorage.getItem("token");

  const getDataFromApi = () => {

    return axios
      .get(`http://localhost:3000/profil`, {
        headers: {
          authorization: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setProfildata(response.data.dataValues);
        console.log(response.data);
        console.log(response.data.dataValues);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  useEffect(() => {
    getDataFromApi();
    
  }, []);

  return (
    <div className="profil-page">
         <Profile_modifier data= {profildata} />
      <div className="profil-main-container">
   
       
        <div className="img-container">
          <img src={"http://localhost:3000/image/" + profildata.profile_picture} />
          {console.log(profildata.profile_picture)}
        </div>
         <div className="profil-important-infos">
              <p className="profil-pseudo">{profildata.username}</p>
            <p className="profil-location">{profildata.city}</p>
            </div>
        <div className="content-container">
          <div className="profil-user-container">
            
            

            <p className="Profil-category">Présentation</p>
            <p className="profil-infos">{profildata.presentation}</p>

            <p className="Profil-category">Mes animaux</p>
            <p className="profil-infos" >{profildata.species}</p>
          </div>
          <div>
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilPage;
