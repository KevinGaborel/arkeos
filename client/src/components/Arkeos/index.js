// == Import npm
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// == Import
import LeftMenu from "../LeftMenu";

import Articles from "../Articles";
import Categorie_selector from "../Categorie_selector";
import Article_page from "../Article_page";
import Members from "../Members";
import Header from "../Header";
import "./styles.scss";
import SignInPage from "../SignInPage";
import SignUpPage from "../SignUpPage";
import Marketplace from "../Marketplace";
import Sell_item_page from "../Sell_item_page";
import ProfilPage from "../ProfilPage";
import My_profile from "../My_profile";
import Create_article from "../Create_article";

// == Composant
const Arkeos = () => {
  let token = localStorage.getItem("token");
  console.log(token);
  return (
    <Router>
      <div className="arkeos">
        <LeftMenu />
        <Header />
        <Switch>
          <Route path="/message">{/* Message composant example  */}</Route>

          <Route exact path="/">
            <Categorie_selector />
            <Create_article />
            <Articles />
          </Route>

          <Route exact path="/marketplace">
            <Marketplace />
          </Route>

          <Route exact path="/marketplace/item">
            <Sell_item_page />
          </Route>

          <Route path="/members">
            <Members />
          </Route>

          <Route path="/profile">
            <My_profile />
          </Route>

          <Route exact path="/articles/:id">
            <Article_page />
          </Route>

          <Route exact path="/signin">
            <SignInPage />
          </Route>
          <Route exact path="/signup">
            <SignUpPage />
          </Route>

          <Route path="/membres/:id">
            <ProfilPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

// == Export
export default Arkeos;
