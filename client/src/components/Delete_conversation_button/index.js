import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import axios from "axios";

const address = window.location.href;
let url = address.split("/");
let id = url[url.length - 1];



const useStyles = makeStyles((theme) => ({
  button: {
    width: "7rem",
    height: "2.5rem",
    margin: "auto",
    backgroundColor: "#A5C6BA",
    color: "#F9F7ED",
    fontSize: "0.7rem",
    padding: "1rem",
    "&:hover": {
      background: "rgb(249, 247, 237, 0.8)",
      color: "#6B6661",
      
    },
  },
}));

const Delete_conversation_button = (props) => {
  
  let token = localStorage.getItem("token");
  const classes = useStyles();

  console.log(props)

  const discussion_id = props.data[0].discussion_id
  console.log(discussion_id)

  const onClick = () => {

    axios
      .delete(
        `http://localhost:3000/messages/${discussion_id}`,
        {
          headers: {
            authorization: token,
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        window.location.reload()
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
  };

  

  return (
    <div>
      <Button
        onClick={() => onClick()}
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<DeleteForeverIcon />}
      >
        Supprimer
      </Button>
    </div>
  );
};
export default Delete_conversation_button;
