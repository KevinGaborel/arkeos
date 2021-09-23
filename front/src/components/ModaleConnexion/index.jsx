import './style.css';
import { Fragment, useState, useEffect, useRef } from 'react';
import ButtonGreen from "../ButtonGreen";
import utils from  '../../utils';

function ModaleConnexion({setHideModale}) {
    const [ chooseOption, setChooseOption ] = useState('se connecter');
    const [ infosUser, setInfosUser ] = useState({});
    const [ responseConnexion, setResponseConnexion ] = useState(false);
    const formElt = useRef(null);
    
    useEffect (() => {
        for (const input of formElt.current){
            input.value = ''
        }
        
        setInfosUser({});
    }, [chooseOption])

    const connected = async (e) => {
        e.preventDefault();
        const fetchPost = async (url, data) =>{
            const response = await fetch(`${utils.baseUrl}${url}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            })
            return response
        }
        try {
            console.log(infosUser, chooseOption);
            if (chooseOption === 'se connecter'){
                const response = await fetchPost('login', infosUser);
                const user = await response.json();

                if (response.status === 403){
                    setResponseConnexion(user);
                }
                console.log(user, response.status);
            } else{
                const response = await fetchPost('signin', infosUser);
                const user = await response.json();

                if (response.status === 403){
                    setResponseConnexion(user);
                }
                console.log(user, response.status);
            }

        } catch (error) {
            console.error(error);
        }
    };

  return (
    <>
        <div className="modale-blur" onClick={(e) => setHideModale(true)}>

        </div>

        <div className='modale'>
            <form onSubmit={(e) => connected(e)} ref={formElt}>
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
                <input type="text" name="username" id="input-register-username" placeholder="Pseudo"
                onChange={(e) => setInfosUser({...infosUser, pseudo: e.target.value})}/>
                <input type="text" name="email" id="input-register-email" placeholder="Email"
                onChange={(e) => setInfosUser({...infosUser, email: e.target.value})}/>
                <input type="text" name="password" id="input-register-password" placeholder="Password"
                onChange={(e) => setInfosUser({...infosUser, password: e.target.value})}/>
                <ButtonGreen value="S'inscrire"/>
                </>
                : 
                <>
                <input type="text" name="email" id="input-login-email" placeholder="Email" 
                onChange={(e) => setInfosUser({...infosUser, email: e.target.value})} />
                <input type="text" name="password" id="input-login-password" placeholder="Mot de passe" 
                onChange={(e) => setInfosUser({...infosUser, password: e.target.value})} />
                {responseConnexion && <p className="text-error">{responseConnexion}</p>}
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
