import styled from 'styled-components';

export const Button = styled.button`
  display: inline-block;
  padding-top: ${props => props.theme.spacing(2)};
  padding-bottom: ${props => props.theme.spacing(2)};
  padding-left: ${props => props.theme.spacing(4)};
  padding-right: ${props => props.theme.spacing(4)};

  overflow: hidden;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;

  background: transparent;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  outline: ${props => props.theme.borders.none};
  border: 1px solid ${props => props.theme.colors.turquoise};

  cursor: pointer;

  :hover {
    opacity: 1;
    transform: scale(1, 1);
    background: ${props => props.theme.colors.turquoise};
  }
`;

export const DivBtn = styled.div`
  display: flex;
  justify-content: center;

  gap: 20px;
`;
