import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './components/About';
import Homepage from './components/Homepage';


function App() {
  return (
    <body className="App">
      <Nav className="app-nav"/>
      <Header className="app-header"/>
      <main className="app-main">
        <Homepage/>
        <section></section>
        <About/>
      </main>
      <Footer className="app-footer"/>
    </body>
  );
}

export default App;
