import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Curatorio</Link>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/">Browse</Link>
        <Link to="/">Collections</Link>
        <Link to="/">Sign In</Link>
      </div>
    </nav>
  );
}

export default Navbar;
