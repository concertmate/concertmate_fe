import React from 'react';
import './LandingPage.css';
import MyEvents from '../MyEvents/MyEvents';
import FriendsList from '../FriendsList/FriendsList';
import { User } from '../../data/type';

interface LandingPageProps {
  loggedInUser: User;
}

const LandingPage: React.FC<LandingPageProps> = ({ loggedInUser }) => {
  return (
    <div className="landing-page">
      <MyEvents />
      <FriendsList loggedInUser={loggedInUser} />
    </div>
  );
};

export default LandingPage;
