import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">Curatorio</Link>
          <p>The world's art, brought together. Search, collect, and share masterpieces from museums across the globe.</p>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/browse">Browse All</Link>
        </div>
        <div className="footer-col">
          <h4>Account</h4>
          <a href="#">Sign Up</a>
          <a href="#">Log In</a>
          {/*<a href="#">My Collections</a>*/}
        </div>
        {/*<div className="footer-col">
          <h4>About</h4>
         {/* <a href="#">About Curatorio</a>*/}
         {/* <a href="#">Contact</a>>*/}
         {/* <a href="#">Privacy</a>>
        </div>*/}
      </div>
      <div className="footer-bottom">
        <span>© 2026 Curatorio. All rights reserved.</span>
        <span>Art belongs to everyone.</span>
      </div>
    </footer>
  );
}

export default Footer;
