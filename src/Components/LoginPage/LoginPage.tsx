import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'
import { user } from '../../data/userData.ts'


interface LoginPageProps {
  handleAuthentication: (isAuthenticated: boolean) => void;
}

const LoginPage:React.FC<LoginPageProps> = ({ handleAuthentication }) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()  
  const handleLoginClick = () => {
    setIsLoggingIn(true)
  }

  const handleFormSubmit = () => {
    const foundUser = user.find((u) => u.email === email);
  
    if (foundUser) {
      navigate('/landing');
      handleAuthentication(true);
    } else {
      setError('Could not find user');

      const errorTimeout = setTimeout(() => {
        setError('');
      }, 3000);
      
      return () => clearTimeout(errorTimeout);
    }
  };
  


  return (
    <div className="login-page"> 
      <h1> Welcome to Concert Buddy!</h1>
    {!isLoggingIn? (
      <button onClick={handleLoginClick}>Login with Spotify</button>
    ) : (
      <div className="login-form">
        <label htmlFor='email'>Email</label>
        <input
        name='email'
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}></input>
        <button onClick={handleFormSubmit}>Login</button>
        {error && <p className="error">{error}</p>}
      </div>
    )}
    </div>
  )
}

export default LoginPage