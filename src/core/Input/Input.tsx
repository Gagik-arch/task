import React, {  ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import regex from './regex';
import { View } from 'react-native';
import Text from '@core/Text';
import { validateField } from './utils';
import { InputProps } from './types.ts';
import RootComponent from './RootComponent';
import styles from './styles.ts';

const doneTypingInterval = 240; //time in ms (240 seconds)

const Input = React.forwardRef<ReactNode,InputProps >((
    {
      value = '',
      containerStyles,
      inputStyles,
      buttons = null,
      validationKey,
      name,
      errorMassage = null,
      onChangeInput,
      onFinish,
      frontIcon = <></>,
      secureTextEntry = false,
      ...props
    }, ref
  ): ReactElement => {
    const [visibility, setVisibility] = useState<boolean>(secureTextEntry);
    const [defaultValue, setDefaultValue] = useState<string>(value);
    const [isValid, setIsValid] = useState<boolean>(false);
    let typingTimer = useRef<ReturnType<typeof setTimeout>>(); //timer identifier

    useEffect(() => {
      setDefaultValue(value);
    }, [value]);

    useEffect(() => {
      if (validationKey) {
        setIsValid(validateField(validationKey, defaultValue));
        onChangeInput?.({
          text: defaultValue,
          isValid: validateField(validationKey, defaultValue),
          name,
        });
      }
      onChangeInput?.({ text: defaultValue, name });
      setIsValid(true);
    }, []);

    const onTextChange = (text: string) => {
      setDefaultValue(text);

      if (validationKey) {
        // [--- handled when user finished typing >>>
        const _isValid = validateField(validationKey, text);
        setIsValid(_isValid);

        if (onFinish) {
          clearTimeout(typingTimer.current);
          return (typingTimer.current = setTimeout(() => {
            onFinish({ text, isValid: _isValid, name });
          }, doneTypingInterval));
        }
        return onChangeInput?.({ text, name, isValid: _isValid });
      }
      // [--- handled when user finished typing >>>
      if (onFinish) {
        clearTimeout(typingTimer.current);
        return (typingTimer.current = setTimeout(() => {
          onFinish({ text, name });
        }, doneTypingInterval));
      }
      return onChangeInput?.({ text, name });
    };

    const defaultFlow = (
      <RootComponent
        value={defaultValue}
        validationKey={validationKey}
        isValid={isValid}
        containerStyles={containerStyles}
        ref={ref}
        visibility={visibility}
        inputStyles={inputStyles}
        setVisibility={setVisibility}
        buttons={buttons}
        frontIcon={frontIcon}
        onChangeText={onTextChange}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    );

    return validationKey ? (
      <View>
        {defaultFlow}
        {(!isValid && defaultValue.length > 0) && (
          <Text size={'normal12'} style={styles.error}>
            {errorMassage || regex[validationKey]?.errorMessage}
          </Text>
        )}
      </View>
    ) : (
      defaultFlow
    );
  });


export default Input;
