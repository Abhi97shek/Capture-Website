import './App.css';
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
import NavBar from './components/NavBar';
import OurWork from './pages/OurWork';
import {Route,Routes} from "react-router-dom";
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
function App() {
  return (
      <>
        <GlobalStyle />
        <NavBar />
        <Routes>
            <Route path="/" element={<AboutUs />} exact />
            <Route path="/work" element={<OurWork />} exact/> 
            <Route path="/work/:id" element={<MovieDetail />} exact />
            <Route path="/contact" element={<ContactUs />} exact />
        </Routes>
        
        
        
      </>
  );
}

export default App;
