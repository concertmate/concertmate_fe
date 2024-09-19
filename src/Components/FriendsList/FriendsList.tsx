import React from 'react';
import SingleFriend from '../SingleFriendCard/SingleFriendCard';
import './FriendsList.css';
import { User } from '../../data/type';

interface FriendsListProps {
  filteredUsers: User[]
}

const FriendsList: React.FC<FriendsListProps> = ({filteredUsers}) => {
  console.log(filteredUsers)
  return (
    <div className='friends-list'>
      <h2>My Friends</h2>
      <div className='friends-wrapper'>
        {filteredUsers.length > 0 && filteredUsers.map((friend) => (
          <SingleFriend key={friend.id} friend={friend} />
        ))}
      </div>
    </div>
  );
};

export default FriendsList;
