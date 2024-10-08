import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'
import { getAllUsers } from '../../APICall.tsx';
import { User } from '../../data/type.ts';

interface LoginPageProps {
  handleAuthentication: (isAuthenticated: boolean) => void;
  changeUser: (user: User) => void;
  changeFilteredUsers: (users: User[]) => void;
}

const LoginPage:React.FC<LoginPageProps> = ({ handleAuthentication, changeUser, changeFilteredUsers}) => {
  const [isLoggingIn, setIsLoggingIn] = useState(false)
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()  
  const handleLoginClick = () => {
    setIsLoggingIn(true)
  }

  async function handleFormSubmit() {
    let response = await getAllUsers();
    const foundUser = await response.data.find((user:User) => user.attributes.email === email);
    if (foundUser) {
      changeUser(foundUser)
      const filteredUsers = response.data.filter((user:User) => user.id !== foundUser.id)
      changeFilteredUsers(filteredUsers)
      setTimeout(() => {
        navigate('/landing');
      },300)
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