import { Link } from 'react-router-dom';
import './AuthForm.css';

function Signup() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <p className="section-label">Join Curatorio</p>
        <h1 className="auth-title">Create Account</h1>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="field">
            <label>Full Name</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>
          <button type="submit" className="auth-btn">Create Account</button>
        </form>
        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
