import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './AuthForm.css';

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    if (!name || !email) return;
    signup(name, email);
    navigate('/');
  }

  return (
    <div className="auth-page">
      <div className="auth-card">
        <p className="section-label">Join Curatorio</p>
        <h1 className="auth-title">Create Account</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="field">
            <label>Full Name</label>
            <input name="name" type="text" placeholder="Your name" required />
          </div>
          <div className="field">
            <label>Email</label>
            <input name="email" type="email" placeholder="you@example.com" required />
          </div>
          <div className="field">
            <label>Password</label>
            <input name="password" type="password" placeholder="••••••••" required />
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
