import React, { ReactElement,  useState } from 'react';
import { View } from 'react-native';
import Input from '@core/Input';
import Screen from '@core/Screen';
import styles from './styles';
import { BodyType, ChangeEventType, RequiredMessageType } from '@types';
import { onChangeBody, onRequiredFieldNotAvailable } from '@resources/utils.ts';
import Image from '../../core/Image';
import userStore from '@store/user';
import Submit from '@components/Submit';
import { formQuery } from './enums.ts';

const Login = (): ReactElement => {
  const [body, setBody] = useState<BodyType>({
    username:'kminchelle',
    password:'0lelplR',

  });
  const [requiredMessage, setRequiredMessage] = useState<RequiredMessageType>({});


  const onFinish = (e: ChangeEventType): void => {
    const copyBody = {...requiredMessage};
    if (e.name){
      delete copyBody[e.name];
    }
    setRequiredMessage(copyBody);
    onChangeBody(e, body, setBody);
  };


  const onDisable = () => {
    const result:{[key:string]:string} = {};

    onRequiredFieldNotAvailable(Object.values(formQuery), body, (item:string) => {
      result[item] = `${item[0].toUpperCase() + item.slice(1)} is required`;
    });
    setRequiredMessage(result);
  };

  return (
    <Screen contentContainerStyle={styles.root}>
      <Image uri={require('@assets/images/secure.png')} />
      <View style={styles.form}>
        <Input
          name={formQuery.username}
          placeholder={'Your username'}
          onFinish={onFinish}
          requiredMessage={requiredMessage[formQuery.username]}
          value={body[formQuery.username]}
        />
        <Input
          name={formQuery.password}
          placeholder={'Your password'}
          secureTextEntry={true}
          validationKey={'password'}
          onFinish={onFinish}
          requiredMessage={requiredMessage[formQuery.password]}
          value={body[formQuery.password]}
        />
        <Submit userStore={userStore}
                body={body}
                label={'Login'}
                onDisable={onDisable}
                onPress={()=>{}}
        />
      </View>
    </Screen>
  );
};


export default Login;
