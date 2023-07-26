import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../pages/HomeScreen';
import {
  home,
  pets,
  profile,
  petProfileOwnersPerspective,
  petProfile,
} from '../../utils/routes';
import CustomTabBar from '../components/CustomTabBar';
import PetListScreen from '../pages/PetListScreen';
import PetProfileOwnersPerspectiveScreen from '../pages/PetProfileOwnersPerspectiveScreen';
import ProfileScreen from '../pages/ProfileScreen';
import PerfilScreen from '../pages/PetProfileDonorsPerspectiveScreen';

const Tab = createBottomTabNavigator();

export default () => (
  <Tab.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName={home}
    tabBar={props => (
      <CustomTabBar icons={['home', 'paw', 'account']} {...props} />
    )}>
    <Tab.Screen name={home} component={HomeScreen} />
    <Tab.Screen name={pets} component={PetListScreen} />
    <Tab.Screen name={profile} component={ProfileScreen} />
    <Tab.Screen
      name={petProfileOwnersPerspective}
      component={PetProfileOwnersPerspectiveScreen}
    />
    <Tab.Screen name={petProfile} component={PerfilScreen} />
  </Tab.Navigator>
);
