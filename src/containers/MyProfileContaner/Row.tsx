import React, { ReactElement } from 'react';
import { View } from 'react-native';
import Text from '@core/Text';
import { RowProps } from '@containers/MyProfileContaner/types.ts';

const Row = ({title,label = ''}:RowProps):ReactElement=>{

    return (
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
          <Text size={'16_600'}>{title}</Text>
          <Text size={'14_400'}>{label}</Text>
      </View>
    );
};

export default Row;
