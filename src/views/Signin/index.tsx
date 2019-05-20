import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Signin extends Component {
  private signin = () => {
    // tslint:disable-next-line
    console.log('sign in!');
  }

  public render() {
    this.signin();
    return (
      <View>
        <Text>Sign in view</Text>
      </View>
    )
  }
}

export { Signin };
