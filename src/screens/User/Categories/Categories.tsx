import { ReactElement } from 'react';

import Screen from '@core/Screen';
import CategoriesContainer from '@containers/CategoriesContainer';
import NavigationHeader from '@core/NavigationHeader';
import productStore from '@store/product';
import Edges from '@resources/edges';

const Categories = (): ReactElement => {
  return (
    <Screen header={<NavigationHeader/>} contentContainerStyle={{...Edges.padding(12)}}>
        <CategoriesContainer productStore={productStore}/>
    </Screen>
  );
};

export default Categories;
