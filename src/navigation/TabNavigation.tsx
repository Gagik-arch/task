import React from 'react';
import TabBar from '@components/TabBar';
import Home from '@screens/User/Home';
import Categories from '@screens/User/Categories';
import MyProfile from '@screens/User/MyProfile';
import Wishlist from '@screens/User/Wishlist';
import {
  createBottomTabNavigator,
  type BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import Routes from '@resources/routes.ts';
import ProductList from '@screens/User/ProductList';

const Tab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props: BottomTabBarProps) => <TabBar {...props} />}
      screenOptions={() => ({ headerShown: false, tabBarShowLabel: false })}
    >
      <Tab.Screen name={Routes.Home} component={Home} />
      <Tab.Screen name={Routes.Categories} component={Categories} />
      <Tab.Screen name={Routes.ProductList} component={ProductList} />
      <Tab.Screen name={Routes.Wishlist} component={Wishlist} />
      <Tab.Screen name={Routes.MyProfile} component={MyProfile} />
    </Tab.Navigator>
  );
};

export default TabsNavigator;
