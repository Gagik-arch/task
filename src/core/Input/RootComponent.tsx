import React, {  ReactNode } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Icon from '@core/Icon';
import { RootComponentProps } from './types';
import styles from './styles.ts';
import Colors from '@resources/colors';

const RootComponent = React.forwardRef<ReactNode,RootComponentProps>(
  (
    {
      value,
      setVisibility,
      isValid,
      visibility,
      validationKey,
      containerStyles,
      inputStyles,
      buttons,
      frontIcon,
      secureTextEntry,
      onChangeText,
      ...props
    },
    ref
  ) => {
    return (
      <View
        style={[
          styles.container,
          {
            borderColor:
              validationKey && value
                ? isValid
                  ? (Colors.lightGray)
                  : Colors.red
                : Colors.lightGray,
          },
          containerStyles,
        ]}>
        {frontIcon}
        <View style={styles.inputView}>
          <TextInput
            onChangeText={onChangeText}
            ref={ref}
            value={value}
            secureTextEntry={visibility}
            style={[styles.input, inputStyles,{
              color:isValid ? Colors.lightGray : Colors.red,
            }]}
            selectTextOnFocus={true}
            {...props}
          />
        </View>
        {buttons}

        {secureTextEntry ? (
          <TouchableOpacity
            onPress={() => setVisibility(!visibility)}
          >
            <Icon name={visibility ? 'Eye' : 'EyeOff'}
                  strokeColor={( !isValid && value.length > 0)
                    ? Colors.red : undefined }
                  size={22} />
          </TouchableOpacity>
        ) : null}
      </View>
    );
  }
);

export default RootComponent;
