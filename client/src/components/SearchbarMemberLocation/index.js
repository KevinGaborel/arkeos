import { checkPropTypes } from "prop-types";
import React from "react";
import "./styles.scss";

function SearchbarMemberLocation(props) {
  return (
    <form className="search-bar">
      <div className="search-input">
        <input
          type="search"
          name="city"
          className="prompt"
          value={props.value}
          onChange={(event) => props.setSearchCity(event.target.value)}
          placeholder="Ville"
        />
      </div>
    </form>
  );
}

export default SearchbarMemberLocation;
