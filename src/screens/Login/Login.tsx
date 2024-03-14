import React, { ReactElement, useState } from 'react';
import {  View } from 'react-native';
import Text from '@core/Text';
import Button from '@core/Button';
import Input from '@core/Input';
import Screen from '@core/Screen';
import Edges from '@resources/edges';

const Login = (): ReactElement => {
  const [a, setA] = useState<string>('');

  return (
    <Screen contentContainerStyle={{ ...Edges.padding(12) }}>
      <Text>Login</Text>
      <View>
        <Button label={'Login'}
                variant={'primary'} />
        <Input secureTextEntry={true}
               validationKey={'password'}
               onFinish={(e)=>{
               }}
        />
      </View>
    </Screen>
  );
};

export default Login;
