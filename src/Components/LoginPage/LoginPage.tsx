import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'
import { user } from '../../data/userData.ts'



const LoginPage = () => {
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleLoginClick = () => {
    setIsLoggingIn(true)
  }

  const handleFormSubmit = () => {
    for (var i = 0; i < user.length; i++){
      if (email === user[i].email) {
        navigate('/landing');
      } else {
        setError('Could not find user');
        return;
      }
    }
  }


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