import React, { ReactElement } from 'react';
import * as RN from 'react-native';
import { Fonts, Colors } from '@resources/';
import { TextProps } from './types';

const Text = ({
                  children = '',
                  style = {},
                  size = '12_400',
                  numberOfLines,
              }: TextProps): ReactElement | null => {
    if (children === undefined) {
        return null;
    }

    return (
      <RN.Text
        numberOfLines={numberOfLines}
        style={[
            {
                fontFamily: 'Inter',
                ...Fonts[size],
                color: Colors.black,
            },
            style,
        ]}>
          {children}
      </RN.Text>
    );
};

export default Text;
