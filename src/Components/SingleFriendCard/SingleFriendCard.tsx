import React from 'react';
import { User } from '../../data/type';
import './SingleFriendCard.css'
interface SingleFriendProps {
  friend: User;
}

const SingleFriend: React.FC<SingleFriendProps> = ({ friend }) => {
  return (
    <div className='single-friend'>
      <p className='friend-text'><span className='friend-property'>User: </span>{friend.name}</p>
    
      <p className='friend-text'><span className='friend-property'>Email: </span> {friend.email}</p>
    </div>
  );
};

export default SingleFriend;
