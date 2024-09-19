import React from 'react';
import './LandingPage.css';
import MyEvents from '../MyEvents/MyEvents';
import FriendsList from '../FriendsList/FriendsList';
import { User } from '../../data/type';

interface LandingPageProps {
  loggedInUser: User;
  filteredUsers: User[]
}

const LandingPage: React.FC<LandingPageProps> = ({ loggedInUser, filteredUsers}) => {
  return (
    <div className="landing-page">
      <MyEvents user={loggedInUser}/>
      <FriendsList filteredUsers={filteredUsers}/>
    </div>
  );
};

export default LandingPage;
