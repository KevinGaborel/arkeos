import './style.css';
import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import utils from  '../../utils';
import CardArticle from '../../components/CardArticle';
import FilterNav from '../../components/FilterNav';
import SelectionPage from '../../components/SelectionPage';

function Home() {
  const [ cardData, setDataCard ] = useState([]);
  const [ dataLoading, setDataLoading ] = useState(false);
  const [ numberResults, setNumberResults ] = useState();
  
  let { page } = useParams();
  if (page){
    page = parseInt(page, 10);
  } else{
    page = 1;
  }
  
  const [ optionsFilter, setOptionsFilter ] = useState({category: 'false', theme: 'false', order: 'ASC', sort: 'created_at', page: page});
  
  useEffect(() => {
    async function getDataFromAPI(options) {
      try {
        if (options.page !== page){
          options.page = page;
        }

        let query;
        for (const key in options){
          query = query !== undefined ? query + `&${key}=${optionsFilter[key]}` : `?${key}=${optionsFilter[key]}`;
        }
        
        const response = await fetch(`${utils.baseUrl}articles${query}`);
        const data = await response.json();
        
        setDataCard(data.articles);
        setNumberResults(data.count);
        setDataLoading(true);

      } catch (error) {
        console.error(error);
      }
    };

    getDataFromAPI(optionsFilter);

  }, [optionsFilter, page]);

  return (
    <Fragment>
    	<main>
        <FilterNav optionsFilter={optionsFilter} setOptionsFilter={setOptionsFilter} 
    	  numberResults={numberResults} dataLoading={dataLoading} />
    	  <section id='card-container'>
    	    {cardData.map((card) => <a href={`/article/${utils.getSlug(card.title)}-${card.id}`} key={card.id}><CardArticle  data={card} /></a>) }
    	  </section>
      <SelectionPage numberResults={numberResults} page={page}/>
    	</main>
    </Fragment>
  );
}

export default Home;
