import PersonOutlineRoundedIcon from "@material-ui/icons/PersonOutlineRounded";
import React from "react";
import "./styles.scss";

function SearchbarMember(props) {
  return (
    <form className="search-bar">
      <div className="search-input">
        <input
          name="username"
          type="search"
          className="prompt"
          value={props.value}
          onChange={(event) => props.setSearchMembers(event.target.value)}
          placeholder="Pseudo"
        />
      </div>
    </form>
  );
}

export default SearchbarMember;
