import './style.css';
import React from 'react';
import { useState, useEffect } from 'react';

function Header() {
  const [ hideMenu, setHideMenu ] = useState(true);

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
          <h1>Arkeos</h1>
        </span>
        <nav hidden={hideMenu}>
          <ul>
            <a href="/">
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
    </React.Fragment>
  );
}

export default Header;
