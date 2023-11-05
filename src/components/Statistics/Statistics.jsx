import {
  StatisticsWrap,
  Title,
  StatList,
  StatItem,
  Percentage,
} from './Statistics.styled';
import { getRandomHexColor } from 'helpers/getRandomColors';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsWrap>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(item => (
          <StatItem key={item.id} color={getRandomHexColor()}>
            <span>{item.label}</span>
            <Percentage>{item.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsWrap>
  );
};
