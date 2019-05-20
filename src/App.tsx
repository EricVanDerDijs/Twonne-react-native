import React, {Component} from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { Signin } from './views/Signin';

const AuthStack = createStackNavigator({
  Signin,
});

const MainNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  }
)

export const App = createAppContainer(MainNavigator);
