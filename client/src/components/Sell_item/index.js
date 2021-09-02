import React from "react";
import cameleon from "../../assets/images/cameleon.png";
import profil from "../../assets/images/profil.png";
import Redirect_page from "../Redirect_page";
import "./style.css";

const Sell_item = (props) => {
  console.log(props);
  let token = localStorage.getItem("token");
  return (
    <div className="Market_container">
      <a href={"/marketplace/" + props.item.dataValues.id}>
        <div className="Sell_item_container">
          <div className="Sell_item">
            <p className="Sell_item_info">
              {" "}
              Nom scientifique : {props.item.dataValues.scientific_name}
            </p>
            <p className="Sell_item_info">
              {" "}
              Localité : {props.item.dataValues.locality}
            </p>
            <p className="Sell_item_info">
              {" "}
              Phase : {props.item.dataValues.phase}
            </p>
            <p className="Sell_item_info">
              {" "}
              NC : {props.item.dataValues.born_captivity}
            </p>
            <p className="Sell_item_info">
              {" "}
              Pays de naissance : {props.item.dataValues.native_country}
            </p>
            <p className="Sell_item_info">
              {" "}
              Date de naissance :{props.item.dataValues.birth_date}
            </p>
            <span className="Price">{props.item.dataValues.price}€</span>
          </div>

          <div className="Sell_item_picture_container">
            <img
              className="Sell_item_picture"
              src={
                "http://localhost:3000/image/" +
                props.item.dataValues.url_picture
              }
              alt="Image de l'article"
            ></img>
          </div>
          <span className="Category">
            {props.item.dataValues.category_name}
          </span>
          <div className="Seller">
            <img
              className="Seller_picture"
              src={
                "http://localhost:3000/image/" +
                props.item.dataValues.profile_picture
              }
              alt="Image de profil du vendeur"
            ></img>{" "}
            {token ? (
              <a href={"/membres/" + props.item.dataValues.author_id}>
                <span className="Seller_pseudo">
                  {props.item.dataValues.author}
                </span>
              </a>
            ) : (
              <a href="/log">
                <span className="Seller_pseudo">
                  {props.item.dataValues.author}
                </span>
              </a>
            )}
          </div>
        </div>
      </a>
    </div>
  );
};

export default Sell_item;
