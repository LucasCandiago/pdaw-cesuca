import './App.css';
import Header from './components/header';
import Products from './components/products';
import About from './components/about';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Products></Products>
     <About></About>
     <Footer></Footer>
    </div>
  );
}

export default App;
