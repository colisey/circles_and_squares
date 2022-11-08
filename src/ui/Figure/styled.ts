import styled from 'styled-components';

export const Root = styled.div`
  width: 128px;
  height: 128px;
`;

export const Header = styled.header`
  margin-bottom: 25px;
`;

const Color = styled.span<{color: string; type: string}>`
  background-color: ${props => props.theme.figure[`${props.color}`]};
  border-radius: ${p => (p.type === 'circle' ? '50%' : 0)};
`;

export const Item = styled(Color)`
  width: 128px;
  height: 128px;
  margin: 13px 11px;
`;
