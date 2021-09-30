import url from '../utils/url';

const FetchPost = async (link, data) =>{
    const response = await fetch(`${url.baseUrl}${link}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return response
}

export default FetchPost