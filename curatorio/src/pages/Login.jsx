import { Link } from 'react-router-dom';
import './AuthForm.css';

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <p className="section-label">Welcome back</p>
        <h1 className="auth-title">Sign In</h1>
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>
          <div className="field">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>
          <button type="submit" className="auth-btn">Sign In</button>
        </form>
        <p className="auth-switch">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
