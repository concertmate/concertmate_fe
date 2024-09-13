import React from 'react';
import SingleFriend from '../SingleFriendCard/SingleFriendCard';
import './FriendsList.css';
import { User } from '../../data/type';
import { user as allUsers } from '../../data/userData';

interface FriendsListProps {
  loggedInUser: User;
}

const FriendsList: React.FC<FriendsListProps> = ({ loggedInUser }) => {
  const friends = allUsers.filter((friend) => friend.id !== loggedInUser.id);
  return (
    <div className='friends-list'>
      <h2>My Friends</h2>
      <div className='friends-wrapper'>
        {friends.map((friend) => (
          <SingleFriend key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
