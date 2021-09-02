import React from "react";
import cameleon_vector from "../../assets/images/cameleon_vector.svg";
import "./style.css";

const Redirect_page = () => {
  return (
    <div className="Redirect_container">
      <div className="Redirect">
        <h1 className="Oops"> Oops !</h1>
        <div className="Redirect_picture_container">
          <img className="Redirect_picture" src={cameleon_vector} />
        </div>

        <p> Vous devez vous connecter pour accéder à cette page :</p>
      </div>
    </div>
  );
};

export default Redirect_page;
