import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="nav">
            <Link to="/">
                <h1>Mark Berney</h1>
            </Link>
            <div className="nav-links">    
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;