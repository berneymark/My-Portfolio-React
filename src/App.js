import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import About from './pages/About';
import Contact from './pages/Contact';

import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <Router>
      <Navbar />
      <div id="page">
        <Sidebar />
        <div id="content">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="about"
              element={<About />}
            />
            <Route
              path="contact"
              element={<Contact />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const Home = (props) => {
  return (
    <div>
      <h3>Hi my name is,</h3>
      <h1>Mark Berney.</h1>
      <h2>Software Developer.</h2>
    </div>
  );
};

export default App;
