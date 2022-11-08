import React from 'react';

import {IconRoot} from './styled';

interface IconProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  source: any;
  block?: boolean;
  style?: any;
}

export const Icon = ({
  className,
  width = 16,
  height = 16,
  block = true,
  source: Source,
  style,
}: IconProps) => (
  <IconRoot style={style} className={className} block={block}>
    <Source width={width} height={height} />
  </IconRoot>
);
