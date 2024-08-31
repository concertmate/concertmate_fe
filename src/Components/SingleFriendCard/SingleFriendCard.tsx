import React from 'react';
import { User } from '../../data/type';

interface SingleFriendProps {
  friend: User;
}

const SingleFriend: React.FC<SingleFriendProps> = ({ friend }) => {
  return (
    <div className='single-friend'>
      <h3>{friend.username}</h3>
      <p>{friend.email}</p>
    </div>
  );
};

export default SingleFriend;
