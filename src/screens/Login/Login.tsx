import React, { ReactElement, useMemo, useState } from 'react';
import { View } from 'react-native';
import Input from '@core/Input';
import Screen from '@core/Screen';
import styles from './styles';
import { BodyType, ChangeEventType, RequiredMessageType, UserStore } from '@types';
import { onChangeBody, onRequiredFieldNotAvailable, validateFields } from '@resources/utils.ts';
import Image from '../../core/Image';
import { formQuery } from './enums.ts';
import Button from '../../core/Button';
import { useAppDispatch } from '../../store';
import { login } from '../../store/asyncThunks/user.ts';
import { useNavigation } from '@react-navigation/native';
import Routes from '@resources/routes.ts';
import { useSelector } from 'react-redux';

const Login = (): ReactElement => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation();
    const userStore = useSelector((state: { user: UserStore }) => state.user);

    const [body, setBody] = useState<BodyType>({});
    //   {
    //     username: 'kminchelle',
    //     password: '0lelplR'
    // }


    const [requiredMessage, setRequiredMessage] = useState<RequiredMessageType>({});


    const onFinish = (e: ChangeEventType): void => {
        const copyBody = { ...requiredMessage };
        if (e.name) {
            delete copyBody[e.name];
        }
        setRequiredMessage(copyBody);
        if (body) {
            onChangeBody(e, body, setBody);
        }
    };

    const disableSubmitBtn: boolean = useMemo(() => {
        return validateFields(Object.values(formQuery), body) || userStore.isLoading;
    }, [body, userStore.isLoading]);

    const onDisable = () => {
        const result: { [key: string]: string } = {};
        if (body) {
            onRequiredFieldNotAvailable(Object.values(formQuery), body, (item: string) => {
                result[item] = `${item[0].toUpperCase() + item.slice(1)} is required`;
            });
        }

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
              <Button
                label={'Login'}
                variant={'primary'}
                disabled={disableSubmitBtn}
                onDisable={onDisable}
                onPress={() => {
                    dispatch(login({
                        body, navigate: () => {
                            navigation.reset({
                                index: 0,
                                routes: [{ name: Routes.Tabs }],
                            });
                        },
                    }));
                }}
              />
          </View>
      </Screen>
    );
};


export default Login;
