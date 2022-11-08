import styled from 'styled-components';

export const Root = styled.div`
  background-color: ${props => props.theme.main};
`;

export const Header = styled.header`
  margin-bottom: 25px;
  // display: flex;
  // justify-content: space-between;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 18px;
  // font-weight: 500;
  // font-family: 'Exo 2', sans-serif;

  @media (min-width: 768px) {
    font-size: 24px;
  }
`;

