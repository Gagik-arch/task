import React, { ReactElement, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { validateFields } from '@resources/utils.ts';
import { SubmitProps } from './types';
import Button from '../../core/Button';
import { formQuery } from '@screens/Login/enums.ts';
import { useNavigation } from '@react-navigation/native';
import Routes from '@resources/routes';

const Submit = observer(({
                           body,
                           userStore,
                           label,
                           variant = 'primary',
                           onDisable,

                         }: SubmitProps): ReactElement => {
const navigation = useNavigation();

  const disableSubmitBtn: boolean = useMemo(() => {
    return validateFields(Object.values(formQuery), body) || userStore.isLoading;
  }, [body, userStore.isLoading]);

  return (
      <Button
        label={label}
        variant={variant}
        disabled={disableSubmitBtn}
        onPress={() => {
          userStore.authUser(body,()=>{
               navigation.reset({
            index: 0,
            routes: [{ name: Routes.Tabs }],
          });
          });
        }}
        onDisable={() => {
          onDisable?.();
        }}
      />
  );
});

export default Submit;
