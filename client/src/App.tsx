import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import LinkGeneratorPage from "./pages/LinkGeneratorPage";
import RedirectPage from "./pages/RedirectPage";

interface Props {}

const App: React.FunctionComponent<Props> = (props) => {
  return (
    <div className="app">
      <Route exact path="/" component={LinkGeneratorPage} />
      <Route path="/:alias" component={RedirectPage} />
    </div>
  );
};

export default App;
