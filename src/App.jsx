import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './Components/Footer/Footer';
import LoginPage from './Components/LoginPage/LoginPage';

function App() {
  
    const[showLogin,setShowLogin] = useState(false);
  return (
    <>
     {showLogin? <LoginPage setShowLogin={setShowLogin} /> : <></>}
    <div className="App">
     
     <Navbar setShowLogin = {setShowLogin} />
     <Routes>
      
      <Route path='/' element = {<Home/>} />
      <Route path='/cart' element = {<Cart/>} />
      <Route path='/order' element = {<PlaceOrder/>} />
     

     </Routes>
    
       
    </div>
     <Footer/>
     </>

  )
}

export default App;
