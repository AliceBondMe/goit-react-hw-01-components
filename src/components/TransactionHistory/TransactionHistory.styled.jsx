import styled from 'styled-components';

export const Table = styled.table`
  width: 800px;
  font-size: 24px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const TableHeader = styled.thead`
  background-color: #0c4892;
  color: white;
  height: 40px;
`;

export const TableRow = styled.tr`
  height: 40px;
  text-align: center;
  &:nth-of-type(even) {
    background-color: #d3e4f8;
  }
`;
