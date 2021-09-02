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
import Legislation from "../Legislation";
import Messagerie from "../Messagerie";
import Conversations from "../Conversations";
import Redirect_page from "../Redirect_page";
import Agenda from "../Agenda";

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
          <Route exact path="/message">
            <Conversations />
          </Route>

          <Route exact path="/message/:id">
            <Messagerie />
          </Route>

          <Route exact path="/">
            <Articles />
          </Route>

          <Route exact path="/messages/log">
            <Redirect_page />
          </Route>

          <Route exact path="/profil/log">
            <Redirect_page />
          </Route>

          <Route exact path="/member/log">
            <Redirect_page />
          </Route>

          <Route exact path="/marketplace">
            <Marketplace />
          </Route>

          <Route exact path="/marketplace/:id">
            <Sell_item_page />
          </Route>

          <Route path="/members">
            <Members />
          </Route>

          <Route path="/calendar">
            <Agenda />
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

          <Route exact path="/legislation">
            <Legislation />
          </Route>

          <Route exact path="/log">
            <Redirect_page />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

// == Export
export default Arkeos;
