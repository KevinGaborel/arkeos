import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/arkeos.svg';
import { useState, useEffect } from 'react';
import ModaleConnexion from '../ModaleConnexion';

function Header() {
  const [ hideMenu, setHideMenu ] = useState(true);
  const [ hideModale, setHideModale ] = useState(true);
  const [ user, setUser] = useState({});

  let localToken = localStorage.getItem("token");
  let localUser = localStorage.getItem("user");

  useEffect(()=>{
    if (user.token && user.user){
      localStorage.setItem('token', user.token);
      localStorage.setItem('user', user.user);
    }
  }, [user])

  function logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location = "/";
  };

  function getStatusMenu(){
    if (hideMenu){
      setHideMenu(false);
    } else{
      setHideMenu(true);
    }
  };

  if (user){
    console.log(user);
  }

  return (
    <React.Fragment>
      <header>
        <span id='container-btn-menu'>
          <button id="btn-menu" onClick={(e) => getStatusMenu()}>
            {hideMenu ? 
              <React.Fragment>
                <span className='btn-menu-barre'></span>
                <span className='btn-menu-barre'></span>
                <span className='btn-menu-barre'></span>
              </React.Fragment>
            :
              <React.Fragment>
                <span className='btn-menu-barre' id='croix-gauche'></span>
                <span className='btn-menu-barre' id='croix-droite' ></span>
              </React.Fragment>
            }
          </button>
          <Link to="/accueil"><img src={logo} alt="Le logo du site arkéos" id='header-logo'/></Link>
          {localToken ? <span id="link-modale-connexion" onClick={(e) => logout()} >Se déconnecter</span> 
          : <span id="link-modale-connexion" onClick={(e) => setHideModale(false)} >Se connecter</span>}
        </span>

        <nav  id="header-menu" hidden={hideMenu}>
          <ul>
            <a href="/accueil">
              <li>Accueil</li>
            </a>
            <a href="/membres">
              <li>Membres</li>
            </a>
            <a href="/marketplace">
              <li>Marketplace</li>
            </a>
            <a href="/profil">
              <li>Mon profil</li>
            </a>
          </ul>
        </nav>
      </header>
      {hideModale === false && <ModaleConnexion hideModale={hideModale} setHideModale={setHideModale} setUser={setUser} />}
    </React.Fragment>
  );
}

export default Header;
