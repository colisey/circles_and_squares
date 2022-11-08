import styled from 'styled-components';

export const Body = styled.div`
  position: relative;
  width: 640px;
  background-color: ${props => props.theme.secondary};
  padding: 10px 20px 47px;
  box-sizing: border-box;
`;
export const Header = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 42px;
  line-height: 51px;
  color: #3e4797;
  text-align: center;
  margin: 0 0 28px;
`;
export const Filter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;
export const Checkboxes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  > *:first-child {
    margin-right: 28px;
  }

  // > * {
  //   &:first-child {
  //     margin-right: 28px;
  //   }
  // }
`;

export const Menu = styled.div`
  position: absolute;
  width: 208px;
  height: 1030px;
  left: 0px;
  top: 159px;
  background-color: rgba(217, 217, 217, 0.9);
  padding: 40px 11px;
  > div {
    margin-bottom: 72px;
  }
`;
export const MenuBox = styled.div`
> label {
  margin-bottom: 16px;
}
`;

export const Content = styled.div`
  padding-top: 67px;
`;
