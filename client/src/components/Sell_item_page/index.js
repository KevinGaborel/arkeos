import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import StarsIcon from "@material-ui/icons/Stars";
import cameleon from "../../assets/images/cameleon.png";
import Sell_item_modifier from "../Sell_item_modifier";
import axios from "axios";
import "./style.css";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "10em",
    height: "3em",
    margin: "1em 0 0 2em",
    backgroundColor: "#A5C6BA",
    fontSize: 15,
    fontWeight: "bold",
    color: "#F9F7ED",

    "&:hover": {
      background: "#F9F7ED",
      color: "#6B6661",
    },
  },
}));

const Sell_item_page = () => {
  let token = localStorage.getItem("token");
  let user_id = localStorage.getItem("user");
  const address = window.location.href;
  let url = address.split("/");
  let id = url[url.length - 1];

  const [articledata, setArticledata] = useState([]);

  useEffect(() => {
    getDataFromApi();
  }, []);

  const getDataFromApi = () => {
    axios
      .get(`http://localhost:3000/marketplace/${id}`, {
        headers: {
          authorization: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setArticledata(response.data.dataValues);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const classes = useStyles();

  return (
    <>
      <div className="Sell_item_page">
        {user_id == articledata.author_id ? (
          <Sell_item_modifier data={articledata} />
        ) : null}
        <div className="Sell_item_infos">
          <div className="Sell_item_picture_container">
            <img
              className="Sell_item_picture"
              src={"http://localhost:3000/image/" + articledata.url_picture}
              alt="Image de l'article"
            ></img>
          </div>
          <div className="Sell_item_description_container">
             <p className="Sell_item_description">
              {" "}
              <span className="Sell_item_title">Nom scientifique :</span> {articledata.scientific_name}
            </p>
           
            <p className="Sell_item_description">
              {" "}
              <span className="Sell_item_title">Localité : </span>{articledata.locality}{" "}
            </p>
            <p className="Sell_item_description">
              {" "}
              <span className="Sell_item_title">Phase :</span> {articledata.phase}
            </p>
            <p className="Sell_item_description">
              {" "}
              <span className="Sell_item_title">NC :</span> {articledata.born_captivity}
            </p>
            <p className="Sell_item_description">
              {" "}
              <span className="Sell_item_title">Pays de naissance :</span> {articledata.native_country}
            </p>
            <p className="Sell_item_description">
              {" "}
              <span className="Sell_item_title">Date de naissance :</span> {articledata.birth_date}
            </p>
            <p className="Sell_item_description">
              {" "}
              <span className="Sell_item_title">Informations complémentaires :</span> 
            </p>
            <p className="Sell_item_description">
              {" "}
           {articledata.content}
            </p>
            <div className="Price_container">
              <p className="Price Sell_item_price">{articledata.price} €</p>
            </div>
          </div>
         
           
          </div>
        </div>
      
    </>
  );
};

export default Sell_item_page;
