import './style.css';
import CardArticle from '../../components/CardArticle';
import { useEffect, useState } from 'react';
import utils from  '../../utils';

function Home() {
  const [ cardData, setDataCard ] = useState([]);

  function getSlug(title){
    return title.toLowerCase().replaceAll(' ', '-');
  };

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(`${utils.baseUrl}articles`);
        const data = await response.json()
        setDataCard(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <main>
      <section id='card-container'>
        {cardData.map((card) => <a href={`/article/${getSlug(card.title)}-${card.id}`} key={card.id}><CardArticle  data={card} /></a>) }
      </section>
    </main>
  );
}

export default Home;
