import { ReactElement } from 'react';

import Screen from '@core/Screen';
import CategoriesContainer from '@containers/CategoriesContainer';
import NavigationHeader from '@core/NavigationHeader';
import Edges from '@resources/edges';

const Categories = (): ReactElement => {
  return (
    <Screen header={<NavigationHeader/>} contentContainerStyle={{...Edges.padding(12)}}>
        <CategoriesContainer />
    </Screen>
  );
};

export default Categories;
