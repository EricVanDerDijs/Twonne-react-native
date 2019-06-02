import React, { Component } from 'react';
import { SigninLayout } from './components/Layout';

class Signin extends Component {
  public static navigationOptions = {
    header: null,
  };

  private handleSignin = () => {
    // tslint:disable-next-line
    console.log('sign in!');
  }

  public render() {
    return (
      <SigninLayout
        username='eric'
        handleSignin={this.handleSignin}
      />
    );
  }
}

export { Signin };
