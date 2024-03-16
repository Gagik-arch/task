import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './styles.ts';
import Icon from '@core/Icon';
import Text from '@core/Text';
import { Colors } from '@resources/';
import * as Icons from '@assets/icons';
import { type BottomTabBarProps } from '@react-navigation/bottom-tabs';
import Routes from '@resources/routes.ts';

const TabBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View style={styles.container }>
      {state.routes.map((route, index:number) => {
        const { options } = descriptors[route.key];

        let icon: keyof typeof Icons = 'Home';

        switch (route.name) {
          case Routes.Home:
            icon = 'Home';
            break;
          case Routes.Categories:
            icon = 'Grid';
            break;
          case Routes.Wishlist:
            icon = 'Heart';
            break;
          case Routes.MyProfile:
            icon = 'User';
          case Routes.ProductList:
            icon = 'Package';
            break;
          default:
            break;
        }

        const isFocused: boolean = state.index === index;

        const onPress = (): void => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = ():void => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.name}
            style={styles.btn}
            accessibilityRole={'button'}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <Icon name={icon}
                  strokeColor={isFocused ? Colors.purple : 'rgba(70, 70, 70, 1)'}
                  size={20} />
            <Text
              style={[
                styles.label,
                {
                  color: isFocused ? Colors.purple : Colors.lightGray,
                },
              ]}
              size={'10_400'}>
              {route.name.charAt(0).toUpperCase() + route.name.slice(1)}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
