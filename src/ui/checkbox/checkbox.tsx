import React, {forwardRef} from 'react';

import {CheckboxProps} from './types';
import {Indicator, Label, NativeInput, Root} from './styled';


export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    {label, bgColor='default', disabled = false, checked = false, ...otherProps},
    ref
  ) {
    const hasLabel = Boolean(label);

    return (
      <Root hasLabel={hasLabel} disabled={disabled}>
        <NativeInput
          ref={ref}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          {...otherProps}
        />
        <Indicator checked={checked} bgColor={bgColor} />

        {hasLabel && <Label>{label}</Label>}
      </Root>
    );
  }
);
