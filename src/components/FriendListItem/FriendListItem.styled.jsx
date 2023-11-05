import styled from 'styled-components';

export const Status = styled.span`
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ $status }) => ($status ? 'green' : 'red')};
`;

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 320px;
  padding: 8px 36px;
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
    rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
    rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
`;

export const UserName = styled.p`
  font-size: 28px;
  font-weight: bold;
`;
