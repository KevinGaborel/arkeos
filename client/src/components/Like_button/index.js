import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteIcon from "@material-ui/icons/Favorite";
import axios from "axios";

const address = window.location.href;
let url = address.split("/");
let id = url[url.length - 1];

let token = localStorage.getItem("token");

const useStyles = makeStyles((theme) => ({
  button: {
    width: "6em",
    height: "3em",
    margin: "1em 0 0 2em",
    backgroundColor: "#A5C6BA",
    color: "#F9F7ED",
    "&:hover": {
      background: "rgb(249, 247, 237)",
      color: "#6B6661",
    },
  },
}));

const IconLabelButtons = (props) => {
  const [counter, setCounter] = useState("0");
  const classes = useStyles();

  const onClick = () => {
    axios
      .post(
        `http://localhost:3000/articles/${props.data.id}/raiting`,
        {
          raiting: counter,
        },

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

  useEffect(() => {
    setCounter(props.data.rating);
  }, [props.data.rating]);

  return (
    <div>
      <Button
        onClick={() => onClick()}
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<FavoriteIcon />}
        value={counter}
      >
        {counter}
      </Button>
    </div>
  );
};
export default IconLabelButtons;
