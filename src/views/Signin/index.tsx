import React, { Component } from 'react';
import { SigninLayout } from './components/Layout';

class Signin extends Component {
  public static navigationOptions = {
    header: null,
  };

  private initialFormValues = {
    username: '',
    password: '',
  };

  private handleSignin = () => {
    // tslint:disable-next-line
    console.log('sign in!');
  }

  public render() {
    return (
      <SigninLayout
        initialValues={this.initialFormValues}
        handleSignin={this.handleSignin}
      />
    );
  }
}

export { Signin };
