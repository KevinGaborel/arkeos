import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Article from './pages/Article';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/accueil/">
          <Home />
        </Route>
        <Route exact path="/accueil/pages/:page">
          <Home />
        </Route>
        <Route exact path="/article/:title">
          <Article />
        </Route>
        <Route>
         <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);