// == Import npm
import React from 'react';
import { BrowserRouter as Router , Switch, Route, } from 'react-router-dom'


// == Import
import LeftMenu from '../LeftMenu';

import Articles from '../Articles';
import Categorie_selector from '../Categorie_selector';
import Article_page from '../Article_page';
import Members from '../Members'
import Header from '../Header'
import './styles.scss';

// == Composant
const Arkeos = () => {
  
  return (
  <Router>
  <div className="arkeos">
  <LeftMenu />
  <Header />
  <Switch>
        <Route path="/message">
        {/* Message composant example  */}
        </Route>
       
        <Route exact path="/">
        <Categorie_selector/>
        <Articles />
        
        </Route>
        <Route path="/members">
        <Members />
        </Route>

        <Route exact path="/La-respiration-cutanée">
        <Article_page />
        </Route>
       
      </Switch>
    
  </div>
  </Router>
  )
  
  };

// == Export
export default Arkeos;
