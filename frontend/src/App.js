import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/Home/home';
import Header from './components/Header/header';
import Footer from './Footer/Footer';
import About from './components/About/About';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path={"/"} element={<Home/>}/>
        <Route path={"/about"} element={<About/>}/>

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
