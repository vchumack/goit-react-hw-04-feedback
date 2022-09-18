import styled from 'styled-components';

function btnColor(props) {
  switch (props.children) {
    case 'good':
      return 'rgba(37, 158, 37, 0.621)';
    case 'neutral':
      return 'grey';
    case 'bad':
      return `rgba(165, 39, 39, 0.748)`;

    default:
      return 'transparent';
  }
}

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

  background-color: transparent;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  outline: ${props => props.theme.borders.none};
  border: 1px solid ${props => props.theme.colors.turquoise};
  transition: 250ms background-color ease-in-out, 250ms transform ease-in-out;

  cursor: pointer;

  :hover {
    opacity: 1;
    transform: scale(1.1);
    background-color: ${props => btnColor(props)};
  }
`;

export const DivBtn = styled.div`
  display: flex;
  justify-content: center;

  gap: 20px;
`;
