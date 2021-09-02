import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import BorderColorIcon from "@material-ui/icons/BorderColor";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "11em",
    height: "3em",
    margin: "1em 0 0 2em",
    backgroundColor: "#A5C6BA",
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "#F9F7ED",

    "&:hover": {
      background: "rgb(249, 247, 237,0.5)",
      color: "#6B6661",
    },
  },
}));

export default function Sign_up_button() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        value="Inscription"
        href="/signup"
        className={classes.button}
        startIcon={<BorderColorIcon />}
      >
        Inscription
      </Button>
    </div>
  );
}
