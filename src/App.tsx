import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Signin } from './views/Signin';
import {
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
} from 'react-navigation';

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
