import './style.css';
import { useEffect, useState } from 'react';
import url from  '../../utils/url';
import CardArticle from '../../components/CardArticle';
import CommentModule from "../../components/CommentModule";

function Article() {
  const [ dataArticle, setDataArticle ] = useState([]);
  const [ rating, setRating ] = useState(Number);
  const [ isAuthor, setIsAuthor ] = useState(Boolean);

  const idArticle = url.getId();

  let localToken = localStorage.getItem("token");
  let localUser = {id: parseInt(localStorage.getItem("user").split(' ')[0]), username: localStorage.getItem("user").split(' ')[1]};

  useEffect(() => {
      (async function () {
        try {
          const response = await fetch(`${url.baseUrl}articles/${idArticle}`, {
            headers: {
              authorization: localToken,
              Accept: "application/json",
              "Content-Type": "application/json",
            }
          });
          let data = await response.json();
          data.content = data.content.split('   ');
          setDataArticle(data);
          console.log(data);
          
          if (data.author_id === localUser){
            setIsAuthor(true);
          }
          setIsAuthor(false);
          
        } catch (error) {
          console.error(error);
        }
      })();
    }, [idArticle]);
    
    
    return (
    <main>
      <CardArticle  data={dataArticle} rating={rating} setRating={setRating} />
      <CommentModule author={dataArticle.author_comment} 
        authorPicture={dataArticle.author_picture_comment} 
        authorId={dataArticle.author_id_comment} 
        comment={dataArticle.comment}
        createdAt={dataArticle.comment_created_at}/>
    </main>
  );
}

export default Article;