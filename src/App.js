import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Header from './Header';
import Home from './Home';
import Coins from './Coins';
import Exchanges from './Exchanges';
import CoinDetails from './CoinDetails';
import Footer from "./Footer";
function App() {
  return (
  <Router>
  <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/coins" element={<Coins/>} />
      <Route path="/exchanges" element={<Exchanges/>} />
      <Route path="/coin/:id" element={<CoinDetails/>} />

    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
