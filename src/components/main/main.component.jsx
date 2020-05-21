import React from 'react'
import {Switch,Route} from "react-router-dom";
import Home from '../../pages/home'
import HomeContext from '../../contexts/homeContext';

function Main() {
 return (
  <main>
  <Switch>
  <HomeContext>
  <Route exact={true} path='/' component={Home} />
  </HomeContext>
  </Switch>
  </main>
 )
}

export default Main
