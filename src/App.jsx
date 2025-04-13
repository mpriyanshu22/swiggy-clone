import React from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import './App.css'
import Home from './components/Home';
import Restaurant from './components/Restaurant';
import RestaurantMenu from './components/RestaurantMenu';
import SearchFood from './components/SearchFood';
import SecondaryHome from './components/SecondaryHome';
import { store } from './Stored/stores';
import { Provider } from "react-redux";
import Checkout from './components/Checkout';
function App() {


  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route element={<SecondaryHome></SecondaryHome>}>
              <Route path='/restaurant' element={<Restaurant></Restaurant>}></Route>
              <Route path='/city/bhopal/:id' element={<RestaurantMenu></RestaurantMenu>}></Route>
              <Route path='/city/bhopal/:id/search' element={<SearchFood></SearchFood>}></Route>
            </Route>
            <Route path='/Checkout' element={<Checkout></Checkout>}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
