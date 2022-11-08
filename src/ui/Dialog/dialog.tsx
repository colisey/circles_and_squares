import {FC, useState} from 'react';
import {Checkbox} from 'ui/checkbox';
import {DialogProps} from '.';
import {
  Body,
  Checkboxes,
  Content,
  Filter,
  Header,
  Menu,
  MenuBox,
} from './styled';

import {Icon} from 'ui/icon';

// import {ReactComponent as DocIcon} from 'assets/svg/doc.svg';
//import img from 'assets/svg/checked.svg';

import {ReactComponent as MEnuIcon} from 'assets/svg/menuIcon.svg';

export const Dialog: FC<DialogProps> = ({children}) => {
  const [circleIsChecked, setCircleIsChecked] = useState<boolean>(false);
  const [squareIsChecked, setSquareIsChecked] = useState<boolean>(false);
  const [redIsChecked, setRedIsChecked] = useState<boolean>(false);

  return (
    <Body>
      <Header>Круги и квадраты, v.1.0</Header>
      <Filter>
        <Icon source={MEnuIcon} width={36} height={24} />
        <Checkboxes>
          <Checkbox
            label="круги"
            checked={circleIsChecked}
            onChange={() => setCircleIsChecked(!circleIsChecked)}
          />
          <Checkbox
            label="квадраты"
            checked={squareIsChecked}
            onChange={() => setSquareIsChecked(!squareIsChecked)}
          />
        </Checkboxes>
      </Filter>
      <Menu>
        <MenuBox>
          <Checkbox
            label="красные"
            checked={redIsChecked}
            onChange={() => setRedIsChecked(!redIsChecked)}
            bgColor="red"
          />
          <Checkbox
            label="зеленые"
            checked={redIsChecked}
            onChange={() => setRedIsChecked(!redIsChecked)}
            bgColor="green"
          />
          <Checkbox
            label="синие"
            checked={redIsChecked}
            onChange={() => setRedIsChecked(!redIsChecked)}
            bgColor="blue"
          />
          <Checkbox
            label="желтые"
            checked={redIsChecked}
            onChange={() => setRedIsChecked(!redIsChecked)}
            bgColor="yellow"
          />
        </MenuBox>
        <MenuBox>Radio</MenuBox>
        <MenuBox>Counter</MenuBox>
      </Menu>
      <Content>{children}</Content>
    </Body>
  );
};
