import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './style.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline';



const useStyles = makeStyles((theme) => ({
  button: {
    width: "11em",
    height: "3em",
    margin: "1em 0 1em 0",
    backgroundColor: "#A5C6BA",
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "#F9F7ED",

    "&:hover": {
      background: "rgba(98, 63, 138, 0.5)",
      color: "#F9F7ED",
      transition: "0.5s"
    },
  },
}));

export default function Contact_button(props) {
  const classes = useStyles();
console.log(props)
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<MailOutlineIcon />}
       
      > 
      <a href={"/message/" + props.data}>
      Contacter
         </a>
       
      </Button>
      </div>
  );
  };
