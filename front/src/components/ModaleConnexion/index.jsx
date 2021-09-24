import './style.css';
import { Fragment, useState, useEffect, useRef } from 'react';
import ButtonGreen from "../ButtonGreen";
import url from  '../../utils/url';
import RegexUtils from  '../../utils/regexUtils';

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
        const fetchPost = async (link, data) =>{
            const response = await fetch(`${url.baseUrl}${link}`, {
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

    const controlForm = (e, input) =>{
        if (RegexUtils.controlForm(input, e.target.value)){
            const result = {};
            result[input] = e.target.value;
            setInfosUser({...infosUser, ...result});
        } else{
            const result = {};
            result[input] = 'invalid';
            setInfosUser({...infosUser, ...result});
        }
        console.log(e.target.value, input, infosUser);
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
                onChange={(e) => controlForm(e, 'username')}/>
                <input type="text" name="email" id="input-register-email" placeholder="Email"
                onChange={(e) => controlForm(e, 'email')}/>
                <input type="text" name="password" id="input-register-password" placeholder="Password"
                onChange={(e) => controlForm(e, 'password')}/>
                <ButtonGreen value="S'inscrire"/>
                </>
                : 
                <>
                <input type="text" name="email" id="input-login-email" placeholder="Email" 
                className={infosUser.email === undefined ? '' : infosUser.email === 'invalid' ? 'input-value_invalid' : 'input-value_valid'}
                onChange={(e) => controlForm(e, 'email')} />
                <input type="text" name="password" id="input-login-password" placeholder="Mot de passe" 
                className={infosUser.password === undefined ? '' : infosUser.password === 'invalid' ? 'input-value_invalid' : 'input-value_valid'}
                onChange={(e) => controlForm(e, 'password')} />
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
