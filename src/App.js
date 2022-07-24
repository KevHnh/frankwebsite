import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Shop from './components/Shop';
import Contact from './components/Contact';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <style>@import url('https://fonts.googleapis.com/css2?family=Kalam:wght@300&display=swap');</style>
      <Router>
        <Routes>
          <Route path = "/" element ={<Home/>} />
          <Route path = "/About/" element ={<About/>} />
          <Route path = "/Portfolio/" element ={<Portfolio/>} />
          <Route path = "/Experience/" element ={<Experience/>} />
          <Route path = "/Shop/" element ={<Shop/>} />
          <Route path = "/Contact/" element ={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
