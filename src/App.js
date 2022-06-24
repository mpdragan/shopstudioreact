import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Catalog />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
