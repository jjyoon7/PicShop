import React from 'react';
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

import {Switch, Link, Route} from "react-router-dom";

function App() {
  return (
      <div>
        <Link to="/">
          <Header/>
        </Link>
        
        <Switch>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route>
            <Photos path="/photos"/>
          </Route>
        </Switch>
      </div>
  )
}

export default App;
