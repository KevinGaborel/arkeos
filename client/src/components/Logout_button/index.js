
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import CancelIcon from '@material-ui/icons/AccountCircle';

const removeToken = () => {
  localStorage.removeItem('token');
  window.location = "/";
}




const useStyles = makeStyles((theme) => ({
  button: {
    width: "12em",
    height: "3em",
    margin: "1em 0 0 2em",
    backgroundColor: "#A5C6BA",
    fontSize: "0.8rem",
    fontWeight: "bold",
    color: "#F9F7ED",

    '&:hover': {
      background: "rgb(249, 247, 237,0.5)",
      color: "#6B6661"
      
   },
    
  },

}));

export default function Log_out_button() {
  const classes = useStyles();


  return (
    <div>
 
      <Button onClick= {removeToken}
        variant="contained"
        color="primary"
        size="large"
        value="Déconnexion"
        
        className={classes.button}
        startIcon={<CancelIcon />}
      >
       Déconnexion
      </Button>
    </div>
  );
}
