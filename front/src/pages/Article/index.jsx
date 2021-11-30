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
  let localName = localStorage.getItem("username");
  let localId = localStorage.getItem("id");

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
          
          if (data.author_id === localId){
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
      <CardArticle  data={dataArticle} rating={rating} setRating={setRating} margin={'1rem 0'} width={'90%'} />
      <CommentModule />
    </main>
  );
}

export default Article;