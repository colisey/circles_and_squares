import {FC} from 'react';
import {IShape} from 'api/shapes/types';
import { Item } from './styled';

export const Figure: FC<IShape> = ({form, color, dark, id}) => {
  console.log('Figure');
  
  const bgColor = dark ? `dark_${color}`: color;
  return <Item color={bgColor} type={form} />;
};