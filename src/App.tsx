import React, {Component} from 'react';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';
import { Provider } from 'react-redux';
import { store } from './config/redux';
import { Signin } from './views/Signin';

const AuthStack = createStackNavigator({
  Signin,
});

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: AuthStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

const Navigator = createAppContainer(SwitchNavigator);

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

export { App };
