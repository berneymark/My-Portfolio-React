import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
    </div>
  );
}

export default App;