import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #cff2b5;
  width: 300px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  margin-bottom: 12px;
`;

export const Avatar = styled.img`
  width: 240px;
`;

export const UserName = styled.p`
  font-size: 36px;
  font-weight: bold;
`;

export const Tag = styled.p`
  font-weight: bold;
  font-style: italic;
  margin-bottom: 8px;
`;

export const Stats = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #b1cf9a;
  width: 84px;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
