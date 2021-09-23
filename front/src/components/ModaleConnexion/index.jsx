import './style.css';
import { Fragment, useState, useEffect } from 'react';
import ButtonGreen from "../ButtonGreen";
import utils from  '../../utils';

function ModaleConnexion({setHideModale}) {
    const [ chooseOption, setChooseOption ] = useState('se connecter');
    const [ infosConnexion, setInfosConnexion ] = useState({});

    const connected = async (e) => {
        e.preventDefault();
        try {
            console.log(infosConnexion, chooseOption);
            if (chooseOption === 'se connecter'){
                const response = await fetch(`${utils.baseUrl}login`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(infosConnexion)
                });
                const user = await response.json();
                console.log(user);
            }
        } catch (error) {
            console.log(error);
        }
    };

  return (
    <>
        <div className="modale-blur" onClick={(e) => setHideModale(true)}>

        </div>

        <div className='modale'>
            <form onSubmit={(e) => connected(e)}>
                <div className="modale-header-radio">
                    <div className="radio-container">
                        <label htmlFor="radio-se-connecter">Se connecter</label>
                        <input type="radio" name="radio-se-connecter" id="radio-se-connecter" className="header-radio" value="se connecter" 
                        placeholder="Se connecter" defaultChecked
                        onChange={(e) => setChooseOption(e.target.value)}
                        />
                    </div>
                    <div className="radio-container">
                        <label htmlFor="radio-s-inscrire">S'inscrire</label>
                        <input type="radio" name="radio-se-connecter" id="radio-s-inscrire" className="header-radio" value="s'inscrire" 
                        onChange={(e) => setChooseOption(e.target.value)}
                        />
                    </div>
                </div>

                <div className="modale-main-input">
                {chooseOption === "s'inscrire" ? 
                <>
                <input type="text" name="pseudo" id="input-register-pseudo" placeholder="Pseudo"
                onChange={(e) => setInfosConnexion({...infosConnexion, pseudo: e.target.value})}/>
                <input type="text" name="email" id="input-register-email" placeholder="Email"
                onChange={(e) => setInfosConnexion({...infosConnexion, email: e.target.value})}/>
                <input type="text" name="password" id="input-register-password" placeholder="Password"
                onChange={(e) => setInfosConnexion({...infosConnexion, password: e.target.value})}/>
                <ButtonGreen value="S'inscrire"/>
                </>
                : 
                <>
                <input type="text" name="email" id="input-login-email" placeholder="Email" 
                onChange={(e) => setInfosConnexion({...infosConnexion, email: e.target.value})} />
                <input type="text" name="password" id="input-login-password" placeholder="Mot de passe" 
                onChange={(e) => setInfosConnexion({...infosConnexion, password: e.target.value})} />
                <ButtonGreen value="Se connecter" />
                </>
                }
                </div>
            </form>
        </div>
    </>
  );
}

export default ModaleConnexion;
