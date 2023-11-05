import styled from 'styled-components';

export const StatisticsWrap = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px;
  width: 600px;
  background-color: #f8ddef;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  margin: 0 auto 20px auto;
`;

export const StatList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc((100% - 48px) / 4);
  background-color: ${({ color }) => color};
  padding: 8px 0;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 1px 1px 12px #fff;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

export const Percentage = styled.span`
  font-size: 32px;
`;
