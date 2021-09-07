import './style.css';
import utils from  '../../utils';

function CardArticle({data}) {
    console.log(data);
  return (
    <article className='cards'>
        <span className='cards-top-container'>
            <div>
                Le {data.created_at}
            </div> 
            <div>
                <img src={`${utils.baseUrl}image/${data.author_picture}`} alt="L'auteur de l'article" className="card-author-img"/>
                {data.author}
            </div>
        </span>
        <h2>{data.title}</h2>
        <img src={`${utils.baseUrl}image/${data.url_picture}`} alt={`Un(e) ou des ${data.category_name}`} className='card-img'/>
        <p>{data.content}</p>

    </article>
  );
}

export default CardArticle;
