import './App.css';
import GlobalStyle from './components/GlobalStyle';
import AboutUs from './pages/AboutUs';
import NavBar from './components/NavBar';
import { useLocation } from 'react-router-dom';
import OurWork from './pages/OurWork';
import {Route,Routes} from "react-router-dom";
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';
import {AnimatePresence} from 'framer-motion';
function App() {
  const location = useLocation();
  return (
      <>
        <GlobalStyle />
          <NavBar />
        <AnimatePresence exitBeforeEnter>        
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AboutUs />} exact />
            <Route path="/work" element={<OurWork />} exact/> 
            <Route path="/work/:id" element={<MovieDetail />} exact />
            <Route path="/contact" element={<ContactUs />} exact />
        </Routes>
        </AnimatePresence>
      </>
  );
}

export default App;
