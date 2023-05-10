import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <body className="App">
      <Nav className="app-nav"/>
      <Header className="app-header"/>
      <main className="app-main">
        <section></section>
        <section></section>
        <section></section>
      </main>
      <Footer className="app-footer"/>
    </body>
  );
}

export default App;
