import React from "react";
import './style.css'

const CategoryMarketplace_selector = (props) => {
  return (
    <>
      <select
        className=" Marketplace_selector"
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
    </>
  );
};

export default CategoryMarketplace_selector;
