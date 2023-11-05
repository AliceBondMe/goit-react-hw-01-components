import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { FriendsListContainer } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsListContainer>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
          name={friend.name}
        />
      ))}
    </FriendsListContainer>
  );
};
