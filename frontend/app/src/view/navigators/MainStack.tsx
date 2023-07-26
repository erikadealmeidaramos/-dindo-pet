import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../pages/LoginScreen';
import { login, mainTab, userRegister, petRegister } from '../../utils/routes';
import MainTab from './MainTab';
import UserRegisterScreen from '../pages/UserRegisterScreen';
import PetRegisterScreen from '../pages/PetRegisterScreen';
import stylesGlobal from '../styles/GlobalStyle';
import stylesHeader from '../styles/HeaderStyle';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const MainStack = createStackNavigator();

export default () => (
  <MainStack.Navigator screenOptions={{ headerShown: false }}>
    <MainStack.Screen name={login} component={LoginScreen} />
    <MainStack.Screen name={mainTab} component={MainTab} />
    <MainStack.Screen
      name={userRegister}
      component={UserRegisterScreen}
      options={{
        headerShown: true,
        headerTitleStyle: stylesGlobal.header1,
        headerTitle: 'Cadastro',
        headerStyle: stylesHeader.headerStyle,
        headerTitleAlign: 'center',
        headerBackImage: () => (
          <Icon name="chevron-left" style={stylesHeader.backButtonStyle} />
        ),
      }}

    />
    <MainStack.Screen
      name={petRegister}
      component={PetRegisterScreen}
      options={{
        headerShown: true,
        headerTitleStyle: stylesGlobal.header1,
        headerTitle: 'Cadastro de Pet',
        headerStyle: stylesHeader.headerStyle,
        headerTitleAlign: 'center',
        headerBackImage: () => (
          <Icon name="chevron-left" style={stylesHeader.backButtonStyle} />
        ),
      }}

    />
  </MainStack.Navigator>
);
