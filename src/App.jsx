import { useState } from 'react';
import './App.css';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import CartPage from './pages/cart/CartPage';

function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Login} />
        <Route path='/home' Component={Home} />
        <Route path='/cart' Component={CartPage} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
