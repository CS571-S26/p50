import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Navbar.css';

function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">Curatorio</Link>
      <div className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
        <NavLink to="/browse" className={({ isActive }) => isActive ? 'active' : ''}>Browse</NavLink>
        {user ? (
          <>
            <NavLink to="/collections" className={({ isActive }) => isActive ? 'active' : ''}>Collections</NavLink>
            <span className="navbar-user">{user.name}</span>
            <button className="nav-logout" onClick={handleLogout}>Sign Out</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>Sign In</NavLink>
            <NavLink to="/signup" className="nav-signup">Sign Up</NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
