import React, { ReactElement } from 'react';
import Screen from '@core/Screen';
import Text from '@core/Text';
import { useRoute } from '@react-navigation/native';
import NavigationHeader from '@core/NavigationHeader';
import Edges from '@resources/edges';
import CategoryContainer from '@containers/CategoryContaner';

const Category = (): ReactElement => {
const route = useRoute();

    return (
      <Screen header={<NavigationHeader backHandler={true}
                                        title={<Text numberOfLines={1} size={'20_600'}>{(route.params.category )[0].toUpperCase() + route.params.category.slice(1)}</Text>}
      />}
              contentContainerStyle={{ ...Edges.padding(12) }}
      >
          <CategoryContainer/>
      </Screen>
    );
};

export default Category;
