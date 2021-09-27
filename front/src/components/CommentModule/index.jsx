import './style.css';
import Loader from '../Loader';
import ButtonGreen from '../ButtonGreen';
import url from '../../utils/url';

function CommentModule(data) {
    
  return (
      <section id="comment-article">
          {data.comment === undefined ? 
            <Loader />
          :
            <>
                <textarea name="comment" id="comment" rows="5"></textarea>
                <div>
                    <ButtonGreen value="Commenter" />
                </div>
                <div className="comment-article-list-container">
                    {data.comment[0] !== null && data.comment.map((comment, index) => 
                        <div key={index} className="comment-article-container">
                            <span className="comment-article-author"> {data.authorPicture && 
                                <img src={`${url.baseUrl}image/${data.authorPicture[index]}`} alt="L'auteur du commentaire" className="card-author-img"/>} 
                                {data.author[index]}
                            </span>
                            <p className="comment-article-content">{comment}</p></div>)}
                </div>
            </>}
      </section>
  );
}

export default CommentModule;