import './style.css';
import { useEffect, useState, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import url from  '../../utils/url';
import CardArticle from '../../components/CardArticle';
import FilterNav from '../../components/FilterNav';
import SelectionPage from '../../components/SelectionPage';
import Loader from "../../components/Loader";

function Home() {
  const [ cardData, setCardData ] = useState([]);
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
        
        const response = await fetch(`${url.baseUrl}articles${query}`);
        const data = await response.json();
        
        setCardData(data.articles);
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
          {cardData[0] !== undefined ? cardData.map((card) => <a href={`/article/${url.getSlug(card.title)}-${card.id}`} key={card.id}>
            <CardArticle  data={card} />
            </a>) 
          : numberResults === '0' ?
          <span className="card-container-null">Il n'y a aucun résultat qui correspond à votre recherche</span>
          :
          <Loader />}
    	  </section>
      <SelectionPage numberResults={numberResults} page={page}/>
    	</main>
    </Fragment>
  );
}

export default Home;
