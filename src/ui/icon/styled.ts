import styled from 'styled-components';

export const IconRoot = styled.span<{block: boolean}>`
  display: ${p => (p.block ? 'block' : 'inline-block')};
  vertical-align: top;

  svg {
    display: block;
    fill: currentColor;

    &:not(:root) {
      overflow: hidden;
    }
  }
`;
