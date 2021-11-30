import './style.css';
import Loader from '../Loader';
import ButtonGreen from '../ButtonGreen';
import url from '../../utils/url';
import { useEffect, useState } from 'react';
const axios = require('axios');

function CommentModule() {
    const [ textAreaValue, setTextAreaValue ] = useState('');
    const [ buttonDisabled, setButtonDisabled ] = useState(true);
    const [ data, setData ] = useState();
    const [ isSend, setIsSend ] = useState(false);

    let localToken = localStorage.getItem("token");
    let localName = localStorage.getItem("username");
    let localId = localStorage.getItem("id");

    async function postComment(e){
        e.preventDefault();

        try {
            //const response = await FetchPost('post', `${url.getId()}/comment`, textAreaValue, localToken);
            //console.log(response);
            
            const response = await axios.post(`${url.baseUrl}articles/${url.getId()}/comment`,
                {
                  content: textAreaValue,
                },
                {
                  headers: {
                    authorization: localToken,
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            });

            setIsSend(true);
            setTextAreaValue("");
        } catch (error) {
            console.log(error);
        }
        
    }
    
    useEffect(() => {
        (async () => {
            try {
                setIsSend(false);
                const response = await axios.get(`${url.baseUrl}articles/${url.getId()}/comment`);

                setData(response.data);
                
            } catch (error) {
                console.log(error);
            }
        })();
    }, [isSend]);
    
    useEffect(() => {
        textAreaValue.length > 10 && localToken && localId ? setButtonDisabled(false) : setButtonDisabled(true);
    }, [textAreaValue]);

  return (
      <section id="comment-article">
          {data === undefined || data[0].comment === undefined ? 
            <Loader />
          :
            <>
                <form id="comment-article-form" onSubmit={(e) => postComment(e)}>
                    <textarea name="comment" id="comment" rows="5" 
                    onChange={(e) => setTextAreaValue(e.target.value)} 
                    minLength='10' required disabled={localId && false}
                    value={textAreaValue}
                    >
                    </textarea>
                    <ButtonGreen value="Commenter" disabled={buttonDisabled} />
                </form>
                
                {data[0].comment !== null &&
                    <div className="comment-article-list-container">
                        {data[0].comment[0] !== null && data.map(comment => 
                            <div key={comment.id} className="comment-article-container">
                                <div>
                                    <span className="comment-article-author"> 
                                        {comment.author_picture && 
                                            <>
                                                <div className="comment-article-img-container">
                                                    <img src={`${url.baseUrl}image/${comment.author_picture}`} 
                                                    alt="L'auteur du commentaire" className="card-author-img"/>
                                                    {comment.author_comment}
                                                </div> 
                                                {comment.created_at}
                                            </>
                                        }
                                    </span>
                                </div>
                                <p className="comment-article-content">{comment.comment}</p>
                            </div>)}

                    </div>
                }
            </>}
      </section>
  );
}

export default CommentModule;