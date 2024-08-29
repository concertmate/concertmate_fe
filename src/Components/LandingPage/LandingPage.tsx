import React from 'react'
import './LandingPage.css'
import MyEvents from '../MyEvents/MyEvents'
import FriendsList from '../FriendsList/FriendsList'





const LandingPage: React.FC = ({}) => {

  return (
    <div className="landing-page">
      <MyEvents />
      <FriendsList />
    </div>
  );
};

export default LandingPage;