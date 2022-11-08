import styled from 'styled-components';
import {hideVisually} from 'polished';
import img from 'assets/svg/checked.svg';

export const Root = styled.label<{hasLabel: boolean; disabled: boolean}>`
  display: ${p => (p.hasLabel ? 'flex' : 'inline-flex')};
  opacity: ${p => (p.disabled ? '0.5' : '1')};
  cursor: ${p => (p.disabled ? 'not-allowed' : 'pointer')};
`;

export const NativeInput = styled.input`
  ${hideVisually()};
`;

export const Indicator = styled.span<{checked: boolean; bgColor: string}>`
  position: relative;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  border-width: 3px;
  border-style: solid;
  border-color: ${props =>
    props.checked ? props.theme.text.secondary : props.theme.text.main};

  background-color: ${props => {
    switch (props.bgColor) {
      case 'red':
        return props.theme.figure.red;
      case 'green':
        return props.theme.figure.green;
      case 'blue':
        return props.theme.figure.blue;
      case 'yellow':
        return props.theme.figure.yellow;
      default:
        return '#fff';
    }
  }};

  transition: border-color 0.2s, background-color 0.2s;

  ${props =>
    props.checked
      ? `&::after {
      content: '';
      position: absolute;
      top: -10px;
      left: 1px;
      width: 32px;
      height: 37px;
      background-image: url(${img});
      background-size:100% 100%;
      -o-background-size: 100% 100%;
      -webkit-background-size: 100% 100%;
      background-size:cover;
    }`
      : null};

  ${NativeInput}:focus ~ & {
    box-shadow: 0 0 0 2px rgba(11, 116, 242, 0.4);
  }

  // prettier-ignore
  ${NativeInput}:focus:not(.focus-visible) ~ & {
    box-shadow: none;
  }

  // prettier-ignore
  ${NativeInput}:focus:not(:focus-visible) ~ & {
    box-shadow: none;
  }
`;

export const Label = styled.span`
  user-select: none;
  margin-left: 8px;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  color: ${props => props.theme.text.main};
`;
