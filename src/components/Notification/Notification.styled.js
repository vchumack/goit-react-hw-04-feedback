import styled from 'styled-components';

export const Text = styled.p`
  color: ${props => props.theme.colors.red};
  text-align: center;
  font-family: ${props => props.theme.fonts.heading}; ;
`;
