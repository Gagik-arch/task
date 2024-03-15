import React, { ReactElement, ReactNode, useEffect, useRef, useState } from 'react';
import Regex from './regex';
import { View } from 'react-native';
import Text from '@core/Text';
import { validateField } from './utils';
import { InputProps } from './types.ts';
import RootComponent from './RootComponent';
import styles from './styles.ts';

const doneTypingInterval = 240; //time in ms (240 seconds)

const Input = React.forwardRef<ReactNode, InputProps>((
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
      requiredMessage,
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
    return (
      <View style={[{ position: 'relative' }]}>
          {defaultFlow}
          {(validationKey && !isValid) ?
            (<Text size={'14_400'} style={styles.error}>
                {errorMassage || Regex[validationKey]?.errorMessage}
            </Text>) :
            (requiredMessage && defaultValue.length === 0 && <Text size={'12_500'}
                                                                   style={[styles.error]}
              >
                  {requiredMessage}
              </Text>
            )
          }
          {/*{renderCheck({ isValid, validationKey, errorMassage, defaultValue })}*/}
      </View>
    );
});


export default Input;
