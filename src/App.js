import './App.css';
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import NFTPage from './components/NFTPage';
import ArtworkPage from './components/ArtworkPage';
import SketchbookPage from './components/SketchbookPage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <style>@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap');</style>
      <div className="appContainer">
        <div className="navBarContainer">
          <NavBar/>
        </div>
        <div className="appBody">
          <Home/>
          <About/>
          <Portfolio/>
          <NFTPage/>
          <ArtworkPage/>
          <SketchbookPage/>
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App;
