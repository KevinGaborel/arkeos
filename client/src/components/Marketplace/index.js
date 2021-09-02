import React, { useState, useEffect } from "react";
import axios from "axios";
import Create_sell_item from "../Create_sell_item";
import Sell_item from "../Sell_item";
import CategoryMarketplace_selector from "../CategoryMarketplace_selector";
import "./style.css";

const Marketplace = () => {
  let token = localStorage.getItem("token");
  const [items, setItems] = useState([]);
  const [category, setCategory] = useState(false);

  console.log(items);
  console.log(category);

  useEffect(() => {
    getDataFromApi(category);
  }, [category]);

  const getDataFromApi = () => {
    axios
      .get(`http://localhost:3000/marketplace/?category=${category}`, {
        headers: {
          authorization: token,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
    console.log(e);
  };

  return (
    <>
      <div className="Selectors">
        {token ? <Create_sell_item /> : null}
        <label className="Label" htmlFor="category"></label>
        <CategoryMarketplace_selector CategoryonChange={handleChangeCategory} />

      </div>
      <div className="markeplace-container">


        <div className="sellItems">
          {items.map((item) => (
            <Sell_item key={item.dataValues.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Marketplace;
