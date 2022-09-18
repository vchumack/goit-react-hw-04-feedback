import styled from 'styled-components';

export const TextStat = styled.p`
  display: flex;
  justify-content: center;
`;

export const TextStatGood = styled.p`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.goodFeedback};
`;

export const TextStatNeutral = styled.p`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.neiFeedback};
`;

export const TextStatBad = styled.p`
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.badFeedback};
`;
