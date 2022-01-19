import React from 'react';
import {
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';

import './App.css';

import HomePage from './pages/HomePage'
import ShopPage from './pages/Shop.jsx';

function App() {
  return (
    <BrowserRouter>
       <Switch> 
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} /> 
       </Switch>
    </BrowserRouter>
  );
}

export default App;