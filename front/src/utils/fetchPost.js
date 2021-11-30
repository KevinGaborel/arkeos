import url from '../utils/url';
const axios = require('axios');

const Axios = async (method, link, body, token) =>{
    
    try {
        switch (method) {
            case "post":
                return await axios.post(`${url.baseUrl}${link}`,
                    body,
                    {
                      headers: {
                        authorization: token ? token : null,
                        Accept: "application/json",
                        "Content-Type": "application/json"
                        }
                });
            
                break;

            case "get":
                return await axios.get(`${url.baseUrl}${link}`,
                    body,
                    {
                      headers: {
                        authorization: token ? token : null,
                        Accept: "application/json",
                        "Content-Type": "application/json"
                        }
                });
            
                break;
        
            default:
                break;
        }
    } catch (error) {
        return error.response;
    }





    /*
    try {
        const response = await fetch(`${url.baseUrl}${link}`, {
            method: 'POST',
            headers: {
                //authorization: token,
                'Content-Type': 'application/json',
                'Authorization': `${token}`,
            },
            body: JSON.stringify({ title: 'React POST Request Example' })
        })
        console.log("C'est la reponse du fetch", response.json());
        return await response.json()
    } catch (error) {
        console.error(error)
    }
    
    const requestOptions = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': token
        },
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(data)
    };
    
    fetch(`${url.baseUrl}${link}`, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));
    */


}

export default Axios