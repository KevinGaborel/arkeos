import './style.css';
import { useEffect, useState } from 'react';
import utils from  '../../utils';

function Article() {
  const [ dataArticle, setDataArticle ] = useState([]);
  const idArticle = utils.getId();

  useEffect(() => {
      (async function () {
        try {
          const response = await fetch(`${utils.baseUrl}articles/${idArticle}`);
          let data = await response.json();
          data.content = data.content.split('   ');
          setDataArticle(data);
        } catch (error) {
          console.error(error);
        }
      })();
    }, [idArticle]);
    
    
  return (
    <main>
      <article className='main-article'>
        <h2>
          {dataArticle.title}
        </h2>
        {dataArticle.url_picture && <img className='article-img' src={`${utils.baseUrl}image/${dataArticle.url_picture}`} alt=""/>}

        {dataArticle.content && dataArticle.content.map((p, index) => <p className='article-paragraph' key={index}>{p}</p>)}
      </article>
    </main>
  );
}

export default Article;