import './App.css';
import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import NavBar from './components/NavBar';
function App() {
  return (
      <>
        <GlobalStyle />
        <NavBar />
        <AboutUs />
      </>
  );
}

export default App;
