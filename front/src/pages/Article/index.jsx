import './style.css';
import { useEffect, useState } from 'react';
import url from  '../../utils/url';
import CardArticle from '../../components/CardArticle';
import CommentModule from "../../components/CommentModule";

function Article() {
  const [ dataArticle, setDataArticle ] = useState([]);
  const idArticle = url.getId();

  useEffect(() => {
      (async function () {
        try {
          const response = await fetch(`${url.baseUrl}articles/${idArticle}`);
          let data = await response.json();
          data.content = data.content.split('   ');
          setDataArticle(data);
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      })();
    }, [idArticle]);
    
    
    return (
    <main>
      <CardArticle  data={dataArticle} />
      <CommentModule author={dataArticle.author_comment} 
        authorPicture={dataArticle.author_picture_comment} 
        authorId={dataArticle.author_id_comment} 
        comment={dataArticle.comment}/>
    </main>
  );
}

export default Article;