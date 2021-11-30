import './style.css';
import url from  '../../utils/url';
import Score from '../Score';
import styled from 'styled-components';
import Loader from '../Loader';
import { useEffect } from 'react';

const CardTheme = styled.div`
  background-color: ${props => props.theme_color};
  padding: 2px 5px;
  border-radius: 7px;
`;

const CardStyle = styled.article`
  width: ${props => props.width};
  margin: ${props => props.margin};
`;

function CardArticle({data, rating, setRating, margin, width}) {
  useEffect(() => {
  }, [rating]);

  return (
    <CardStyle width={width} margin={margin} className='cards'>
        {data.url_picture !== undefined ? 
          <>
            <div className='cards-top-container'>
            <div className={`theme-category ${!data.category_name ? 'theme-justify-end' : ''}`}>
              {data.category_name && <div className='category-label'>{data.category_name}</div>}
  
              <CardTheme theme_color={data.theme_color}>
                {data.theme_name}
              </CardTheme>
            </div>
            <div className='cards-top_center'>
              Le {data.created_at}
            </div> 
            <div className='cards-top_center'>
              {data.author_picture !== undefined && data.author_picture !== null && data.author_picture !== "" &&
              <img src={`${url.baseUrl}image/${data.author_picture}`} alt="L'auteur de l'article" className="card-author-img"/>}
              {data.author}
            </div>
          </div>
          <h2 className='cards-text_center' >{data.title}</h2>
  
          {data.url_picture !== undefined && data.url_picture !== null && data.url_picture !== "" ? 
          <img src={`${url.baseUrl}image/${data.url_picture}`} alt={`Un(e) ou des ${data.category_name}`} className='card-img'/>
          : <div className='card-img'></div>}
          
          {Array.isArray(data.content) ? data.content.map((p, index) => <p className='article-paragraph' key={index}>{p}</p>)
          : <p className='cards-text_center' >{data.content}</p>}
          <Score score={data.rating} setRating={setRating} />
        </>
      :

      <Loader />
      
      }
    </CardStyle>
  );
}

export default CardArticle;
