import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Estatico from "./pages/Estatico";
import Medias from "./pages/Medias";
import Responsivo from "./pages/Responsivo";

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/estatico" component={Estatico} />
        <Route exact path="/medias" component={Medias} />
        <Route exact path="/responsivo" component={Responsivo} />
        <Route path="/" component={Home}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;