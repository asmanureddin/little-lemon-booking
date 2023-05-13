import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Homepage from './components/Homepage';
import { Route, Routes } from 'react-router-dom';
import BookingPage from './components/BookingPage';


function App() {
  return (
    <div className="App">
      <Nav className="app-nav"/>
      <Header className="app-header"/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/booking' element={<BookingPage/>}/>
      </Routes>
      <About/>
      <Footer className="app-footer"/>
    </div>
  );
}

export default App;
