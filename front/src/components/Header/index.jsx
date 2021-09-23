import './style.css';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/arkeos.svg';
import { useState } from 'react';
import ModaleConnexion from '../ModaleConnexion';

function Header() {
  const [ hideMenu, setHideMenu ] = useState(true);
  const [ hideModale, setHideModale ] = useState(true);


  function getStatusMenu(){
    if (hideMenu){
      setHideMenu(false);
    } else{
      setHideMenu(true);
    }
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
          <span id="link-modale-connexion" onClick={(e) => setHideModale(false)} >Se connecter</span>
        </span>
        <nav hidden={hideMenu}>
          <ul>
            <a href="/accueil">
              <li>Accueil</li>
            </a>
            <a href="/">
              <li>Membres</li>
            </a>
            <a href="/">
              <li>Marketplace</li>
            </a>
            <a href="/">
              <li>Mon profil</li>
            </a>
          </ul>
        </nav>
      </header>
      {hideModale === false && <ModaleConnexion hideModale={hideModale} setHideModale={setHideModale}/>}
    </React.Fragment>
  );
}

export default Header;
