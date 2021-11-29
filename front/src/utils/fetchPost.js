import url from '../utils/url';

const FetchPost = async (link, data, token) =>{
    console.log(link, data, token);
    console.log(`${url.baseUrl}${link}`);
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
    */

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
}

export default FetchPost