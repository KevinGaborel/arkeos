import './style.css';
import { Fragment, useState, useEffect, useRef } from 'react';
import ButtonGreen from "../ButtonGreen";
import RegexUtils from  '../../utils/regexUtils';
import FetchPost from '../../utils/fetchPost';


function ModaleConnexion({setHideModale, setInfos}) {
    const [ chooseOption, setChooseOption ] = useState('se connecter');
    const [ infosUser, setInfosUser ] = useState({});
    const [ sendDisabled, setSendDisabled ] = useState(true);
    const [ responseConnexion, setResponseConnexion ] = useState(false);
    const formElt = useRef(null);
    
    useEffect (() => {
        for (const input of formElt.current){
            input.value = ''
        }
        setInfosUser({});
        setSendDisabled(true);
    }, [chooseOption]);

    useEffect (() => {
        if(chooseOption === 'se connecter'){
            if(Object.keys(infosUser).length !== 2){
                return;
            }
        } else{
            if(Object.keys(infosUser).length !== 3){
                return;
            }
        }
        for (const value in infosUser){
            if(value === undefined || !infosUser[value]){
                setSendDisabled(true);
                return;
            }
        }
        setSendDisabled(false);
    }, [infosUser, chooseOption]);

    const connected = async (e) => {
        e.preventDefault();
        try {
            if (chooseOption === 'se connecter'){
                const response = await FetchPost('login', infosUser);
                const result = await response.json();

                if (response.status === 403){
                    setResponseConnexion(result);
                    return;
                }

                setInfos(result);
                window.location = window.location.href;

            } else{
                const response = await FetchPost('signin', infosUser);
                const result = await response.json();

                if (response.status === 403){
                    setResponseConnexion(result);
                }
                console.log(result, response.status);

                //todoo crée un message comme quoi l'inscription est bien faite et ou redirection avec la modale onglet connexion
            }

        } catch (error) {
            console.error(error);
        }
    };

    const controlForm = (e, input) =>{
        if (RegexUtils.controlForm(input, e.target.value)){
            const result = {};
            result[input] = e.target.value;
            setInfosUser({...infosUser, ...result});
        } else{
            const result = {};
            result[input] = false;
            setInfosUser({...infosUser, ...result});
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
                className={infosUser.username === undefined ? '' : infosUser.username === false ? 'input-value_invalid' : 'input-value_valid'}
                onChange={(e) => controlForm(e, 'username')} minLength="5" maxLength="20" required/>
                <div className="modale-main-input-container">
                    <span className="modale-main-input-rules" >Le pseudo doit contenir au moins 5 caractères</span>
                </div>

                <input type="email" name="email" id="input-register-email" placeholder="Email"
                className={infosUser.email === undefined ? '' : infosUser.email === false ? 'input-value_invalid' : 'input-value_valid'}
                onChange={(e) => controlForm(e, 'email')} minLength="5" maxLength="320" required/>

                <input type="password" name="password" id="input-register-password" placeholder="Mot de passe"
                className={infosUser.password === undefined ? '' : infosUser.password === false ? 'input-value_invalid' : 'input-value_valid'}
                onChange={(e) => controlForm(e, 'password')} minLength="8" maxLength="40" required/>
                <ul className="modale-main-input-container">
                    <li className="modale-main-input-rules">Il doit contenir au moins 8 caractères</li>
                    <li className="modale-main-input-rules">Contenir au moins une lettre</li>
                    <li className="modale-main-input-rules">Contenir au moins un nombre</li>
                    <li className="modale-main-input-rules">Contenir au moins un caractère spéciale</li>
                </ul>

                <ButtonGreen value="S'inscrire" disabled={sendDisabled}/>
                </>
                : 
                <>
                <input type="email" name="email" id="input-login-email" placeholder="Email" 
                className={infosUser.email === undefined ? '' : infosUser.email === false ? 'input-value_invalid' : 'input-value_valid'}
                onChange={(e) => controlForm(e, 'email')} minLength="5" maxLength="320" required/>

                <input type="password" name="password" id="input-login-password" placeholder="Mot de passe" 
                className={infosUser.password === undefined ? '' : infosUser.password === false ? 'input-value_invalid' : 'input-value_valid'}
                onChange={(e) => controlForm(e, 'password')} minLength="8" maxLength="40" required/>

                {responseConnexion && <p className="text-error">{responseConnexion}</p>}
                <ButtonGreen value="Se connecter" disabled={sendDisabled}/>
                </>
                }
                </div>
            </form>
        </div>
    </>
  );
}

export default ModaleConnexion;
