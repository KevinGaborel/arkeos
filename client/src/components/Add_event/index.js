import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

const useStyles = makeStyles((theme) => ({
  button: {
    width: "15em",
    height: "5em",
    margin: "1em 0 0 2em",
    backgroundColor: "#A5C6BA",
    fontSize: 10,
    fontWeight: "bold",
    color: "#F9F7ED",

    "&:hover": {
      background: "#F9F7ED",
      color: "#6B6661",
    },
  },
}));

export default function Add_event() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        size="large"
        value="Connexion"
        href=  "https://calendar.google.com/calendar/embed?src=dv65fm3h31jdg5g41de7nti6qk%40group.calendar.google.com&ctz=Europe%2FParis"
        target="blank"
        className={classes.button}
        startIcon={<EventAvailableIcon />}
      >
        Ajouter un événement
      </Button>
    </div>
  );
}
