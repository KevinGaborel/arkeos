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
  const [ optionsFilter, setOptionsFilter ] = useState({category: 'false', theme: 'false', order: 'ASC', sort: 'created_at'});
  const [ firstRender, setFirstRender ] = useState(true);

  function changeCategory(e){
    setOptionsFilter({...optionsFilter, category: e.target.value});
  };
  function changeTheme(e){
    setOptionsFilter({...optionsFilter, theme: e.target.value});
  };
  function changeSearch(e){
    if (e.target.value){
      setOptionsFilter({...optionsFilter, search: e.target.value});
    } else{
      setOptionsFilter({...optionsFilter, search: false});
    }
  };
  function changeSortOrder(e){
    const [sort, order] = e.target.value.split('-');
    setOptionsFilter({...optionsFilter, sort: sort, order: order});
  };

  let { page } = useParams();
  if (page){
    page = parseInt(page, 10);
  }
  
  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(`${utils.baseUrl}articles/${page ? `?page=${page}` : ''}`);
        const data = await response.json()
        setDataCard(data.articles);
        setNumberResults(data.count);
        setDataLoading(true);
        console.log("useEffect 1");
      } catch (error) {
        console.error(error);
      }
    })();

  

  }, [page]);
  
  useEffect(() => {
    async function getDataFromAPI(options) {
      try {
        let query;
        for (const key in options){
          query = query !== undefined ? query + `&${key}=${optionsFilter[key]}` : `?${key}=${optionsFilter[key]}`;
        }
        console.log(options, query);
        const response = await fetch(`${utils.baseUrl}articles${query}`);
        const data = await response.json();
        
        setDataCard(data.articles);
        setNumberResults(data.count);
        setDataLoading(true);
        console.log("useEffect 2");
      } catch (error) {
        console.error(error);
      }
    };

    if (!firstRender){
      getDataFromAPI(optionsFilter);
    }
    setFirstRender(false);

  }, [optionsFilter]);

  return (
    <Fragment>
    	<main>
    	  <FilterNav category={changeCategory} theme={changeTheme} 
    	  search={changeSearch} sort={changeSortOrder}
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
