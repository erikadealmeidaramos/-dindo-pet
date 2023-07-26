import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/view/navigators/MainStack';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import store from './src/data/store';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

const AppContainer = () => (
  <Provider store={store}>
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  </Provider>
);

export default AppContainer;
