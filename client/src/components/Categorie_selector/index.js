import React from "react";
import "./style.css";
import Create_article from "../Create_article";

const Categorie_selector = (props) => {

  let token = localStorage.getItem("token");

  return (
  <div className="Selector_container">
    
    {token ? <Create_article /> : null}
    <label className="Label" htmlFor="category">
      Catégorie
    </label>
    <select
      className="Select"
      name="category"
      id="category"
      onChange={props.CategoryonChange}
    >
      <option value="false">Toutes les catégories</option>
      <option value="Serpents">Serpents</option>
      <option value="Lézards">Lézards</option>
      <option value="Tortues">Tortues</option>
      <option value="Amphibiens">Amphibiens</option>
    </select>

    <label className="Label" htmlFor="theme">
      Thème
    </label>
    <select
      className="Select"
      name="theme"
      id="theme"
      onChange={props.ThemeonChange}
    >
      <option value="false">Tous les thèmes</option>
      <option value="Terrarium">Terrarium</option>
      <option value="Alimentation">Alimentation</option>
      <option value="Génétique">Génétique</option>
      <option value="Anatomie et biologie">Anatomie et biologie</option>
      <option value="Biotope et histoire naturelle">
        Biotope et histoire naturelle
      </option>
      <option value="Soins et pathologies">Soins et pathologies</option>
      <option value="Législation">Législation</option>
    </select>
  </div>
  )};

export default Categorie_selector;
