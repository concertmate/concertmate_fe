import React, {useContext} from 'react'
import './LandingPage.css'
import MyEvents from '../MyEvents/MyEvents'
import FriendsList from '../FriendsList/FriendsList'
import AppContext from  '../../Context/AppContext.tsx'


interface LandingPageProps {
  handleAuthentication: (isAuthenticated: boolean) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ handleAuthentication }) => {
  const authenticated = useContext(AppContext);

  if (!authenticated) {
    handleAuthentication(false);
    return null;
  }

  return (
    <div className="landing-page">
      <MyEvents />
      <FriendsList />
    </div>
  );
};

export default LandingPage;