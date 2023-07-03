import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home.jsx";
import Vela from "./pages/vela";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vela" element={<Vela />} />
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
