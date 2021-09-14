import './style.css';
import { useEffect, useState } from 'react';
import utils from  '../../utils';
import CardArticle from '../../components/CardArticle';
import FilterNav from '../../components/FilterNav';

function Home() {
  const [ cardData, setDataCard ] = useState([]);
  const [ numberResults, setNumberResults ] = useState();
  const [ optionsFilter, setOptionsFilter ] = useState({category: 'false', theme: 'false'});

  function changeCategory(e){
    setOptionsFilter({...optionsFilter, category: e.target.value});
  }
  function changeTheme(e){
    setOptionsFilter({...optionsFilter, theme: e.target.value});
  }
  function changeSearch(e){
    setOptionsFilter({...optionsFilter, search: e.target.value});
  }

  function getSlug(title){
    return title.toLowerCase().replaceAll(' ', '-');
  };

  
  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(`${utils.baseUrl}articles`);
        const data = await response.json()
        setDataCard(data.articles);
        setNumberResults(data.count);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);
  
  useEffect(() => {
    async function getDataFromAPI(options) {
      try {
        let response;
        if (!options.search){
          response = await fetch(`${utils.baseUrl}articles?category=${options.category}&theme=${options.theme}`);
        } else{
          response = await fetch(`${utils.baseUrl}articles?category=${options.category}&theme=${options.theme}&search=${options.search}`);
        }
        const data = await response.json();
        
        setDataCard(data.articles);
        setNumberResults(data.count);
      } catch (error) {
        console.error(error);
      }
    };

    getDataFromAPI(optionsFilter);
  }, [optionsFilter]);


  return (
    <main>
      <FilterNav category={changeCategory} theme={changeTheme} search={changeSearch} numberResults={numberResults} />
      <section id='card-container'>
        {cardData.map((card) => <a href={`/article/${getSlug(card.title)}-${card.id}`} key={card.id}><CardArticle  data={card} /></a>) }
      </section>
    </main>
  );
}

export default Home;
