import React, { ReactElement } from 'react';
import * as Icons from '../../assets/icons';
import { IconProps } from './types.ts';

const Icon = ({
                  name = 'Eye',
                  strokeColor = 'rgba(135, 135, 135, .8)',
                  fillColor,
                  size = 22,
              }: IconProps): ReactElement | null => {
    if (!name && !Icons.hasOwnProperty(name)) {
        return null;
    }

    const I = Icons[name];
    if (fillColor) {
        return <I width={size} fill={fillColor} stroke={strokeColor} height={size} />;
    }
    return <I width={size} stroke={strokeColor} height={size} />;

};

export default Icon;
