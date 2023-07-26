import React from 'react';
import { View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import styles from '../styles/CustomTabBarStyle'

type CustomTabBarProps = {
    icons: string[];
  } & BottomTabBarProps;

function CustomTabBar({icons, state }: CustomTabBarProps) {
  const navigation = useNavigation();

  const handleTabPress = (routeName: string) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      {icons.map((icon, index) => {
        const routeName = state.routeNames[index];
        const isFocused = state.index === index;

        return (
          <TouchableHighlight
            key={index}
            style={styles.tab}
            underlayColor="transparent"
            onPress={() => handleTabPress(routeName)}>
            <Icon
              name={icon}
              size={35}
              color={isFocused ? '#FAF7F3' : '#704721'}
            />
          </TouchableHighlight>
        );
      })}
    </View>
  );
}

export default CustomTabBar;