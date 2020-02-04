import React from 'react';
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

import {Switch, Route} from "react-router-dom";

function App() {
  return (
      <div>
        <Header/>

        <Switch>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route>
            <Photos exact path="/"/>
          </Route>
        </Switch>
      </div>
  )
}

export default App;
