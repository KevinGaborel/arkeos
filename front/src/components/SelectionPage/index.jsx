import './style.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SelectionPage({numberResults, page}) {
    const [ numberPages, setNumberPages ] = useState([]);

    const getNumberPages = (numberResults) => {
        
        let pages = [];
        while (numberResults > 0){
            if (numberResults > 0){
            pages.push(pages.length + 1);
            numberResults = numberResults - 10;
            }
        }
        setNumberPages(pages);
    }
    
    useEffect(()=> {
        if (numberResults) {
            getNumberPages(numberResults)
        }
    }, [numberResults]);
   
    return (
    <section id="page-selection">
       {numberPages && numberPages.map((value, index) => 
       <Link key={value + index} to={`/accueil/pages/${value}`} 
       className={`page-selection-link ${page === value ? 'link-disabled' : !page && value === 1 ? 'link-disabled' : ''}`}>
           {value > 1 ? value : value}
        </Link>)
        }
    </section>
  );
}

export default SelectionPage;
