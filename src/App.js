import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
        <header>
          <Navbar/>
        </header>
        <div id="page">
          <Sidebar/>
          <div id="content">
            <Routes>
              <Route 
                path="/" 
                element={ <Home/> }
              />
              <Route 
                path ="about" 
                element={ <About/> }
              />
              <Route 
                path="contact" 
                element={ <Contact/> }
              />
            </Routes>
          </div>
        </div>
    </Router>
  );
}

const Home = (props) => {
  return(
    <div>
      <h3>Hi my name is,</h3>
      <h1>Mark Berney.</h1>
      <h2>I build things for the web.</h2>
    </div>
  );
}

export default App;