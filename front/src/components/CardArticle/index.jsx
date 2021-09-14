import './style.css';
import utils from  '../../utils';
import Score from '../Score';
import styled from 'styled-components';

const CardTheme = styled.div`
  background-color: ${props => props.theme_color};
  padding: 2px 5px;
  border-radius: 7px;
`;

function CardArticle({data}) {
  
  return (
    <article className='cards'>
        <div className='cards-top-container'>
          <div className={`theme-category ${!data.category_name ? 'theme-justify-end' : ''}`}>
            {data.category_name && <div className='category-label'>
              {data.category_name}
            </div>}
            <CardTheme theme_color={data.theme_color}>
              {data.theme_name}
            </CardTheme>
          </div>
          <div className='cards-top_center'>
            Le {data.created_at}
          </div> 
          <div className='cards-top_center'>
            <img src={`${utils.baseUrl}image/${data.author_picture}`} alt="L'auteur de l'article" className="card-author-img"/>
            {data.author}
          </div>
        </div>
        <h2 className='cards-text_center' >{data.title}</h2>
        {data.url_picture !== '' ? 
        <img src={`${utils.baseUrl}image/${data.url_picture}`} alt={`Un(e) ou des ${data.category_name}`} className='card-img'/>
        : <div className='card-img'></div>
      }
        <p className='cards-text_center' >{data.content}</p>
        <Score score={data.rating}/>
    </article>
  );
}

export default CardArticle;
