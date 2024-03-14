import React, { ReactElement } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import Text from '@core/Text';
import styles from './styles';
import { ButtonProps } from './types';

const Button = ({
  label,
  style,
  textStyle,
  textSize = '14_400',
  variant,
  isLoading = false,
  children,
  disabled = false,
}: ButtonProps): ReactElement => {
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        styles.container,
        styles['container_' + (variant ? variant + (disabled ? '_disabled' : '') : '')],
        style,
      ]}>
      {children || (label && (
        <Text
          size={textSize}
          style={[
            styles.label_,
            styles['label_' + (variant ? variant + (disabled ? '_disabled' : '') : '')],
            { ...textStyle },
          ]}
        >
          {label}
        </Text>)
      )}
      {isLoading && <ActivityIndicator style={{ marginLeft: 10 }} />}
    </TouchableOpacity>
  );
};

export default Button;
