import './style.css';
import Loader from '../Loader';
import ButtonGreen from '../ButtonGreen';
import url from '../../utils/url';
import { useEffect, useState } from 'react';
import FetchPost from '../../utils/fetchPost';

function CommentModule(data) {
    const [ textAreaValue, setTextAreaValue ] = useState('');
    const [ buttonDisabled, setButtonDisabled ] = useState(true);

    let localToken = localStorage.getItem("token");
    let localUser = localStorage.getItem("user");
    

    function postComment(e){
        e.preventDefault();
        //todoo add token in body for back
        FetchPost(`${url.getId()}/comment`, textAreaValue);
    }
    
    useEffect(() => {
        textAreaValue.length > 10 && localToken && localUser ? setButtonDisabled(false) : setButtonDisabled(true);
    }, [textAreaValue]);

  return (
      <section id="comment-article">
          {data.comment === undefined ? 
            <Loader />
          :
            <>
                <form id="comment-article-form" onSubmit={(e) => postComment(e)}>
                    <textarea name="comment" id="comment" rows="5" onChange={(e) => setTextAreaValue(e.target.value)} minLength='10' required></textarea>
                    <ButtonGreen value="Commenter" disabled={buttonDisabled} />
                </form>
                <div className="comment-article-list-container">
                    {data.comment[0] !== null && data.comment.map((comment, index) => 
                        <div key={index} className="comment-article-container">
                            <div>
                                <span className="comment-article-author"> 
                                    {data.authorPicture && 
                                        <>
                                            <div className="comment-article-img-container">
                                                <img src={`${url.baseUrl}image/${data.authorPicture[index]}`} 
                                                alt="L'auteur du commentaire" className="card-author-img"/>
                                                {data.author[index]}
                                            </div> 
                                            {data.createdAt[index]}
                                        </>
                                    }
                                </span>
                            </div>
                            <p className="comment-article-content">{comment}</p>
                        </div>)}
                </div>
            </>}
      </section>
  );
}

export default CommentModule;