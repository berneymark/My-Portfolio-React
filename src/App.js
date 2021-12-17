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
        <Sidebar/>
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
    </Router>
  );
}

const Home = (props) => {
  return(
    <div>
      <h1>Home Page</h1>
      <p>Lorem ipsum.</p>
    </div>
  );
}

export default App;