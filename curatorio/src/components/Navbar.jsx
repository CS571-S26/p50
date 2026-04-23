import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Curatorio</Link>
      <div className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/browse" className={({ isActive }) => isActive ? 'active' : ''}>Browse</NavLink>
        <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Sign In</NavLink>
        <NavLink to="/signup" className="nav-signup">Sign Up</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
