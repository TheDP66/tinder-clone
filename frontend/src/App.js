// rfc = snippet for react template
// imp = snippet for import

import React from "react";
import { Helmet } from "react-helmet";

import "./App.css";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";

const TITLE = "Tinder Clone";

function App() {
  return (
    // BEM class naming convention
    <div className="app">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
}

export default App;
