import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Homepage from './components/Homepage';
import BookingPage from './components/BookingPage';
import Menu from './components/Menu';
import OrderNow from './components/OrderNow';


function App() {
  return (
    <div className="App">
      <Nav className="app-nav"/>
      <Header className="app-header"/>
      <Routes>
        <Route exact path='/home' element={<Homepage/>}/>
        <Route path='/reservations' element={<BookingPage/>}/>
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/order' element={<OrderNow/>} />
        <Route path='/about'element={<About/>} />
      </Routes>
      
      <Footer className="app-footer"/>
    </div>
  );
}

export default App;
