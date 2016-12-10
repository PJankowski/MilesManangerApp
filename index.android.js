/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import { Provider } from 'react-redux'

import store from './app/Store'

import Signup from './app/components/Signup';
import Home from './app/components/Home'

class MilesManager extends Component {
  renderScene(route, navigator) {
    let _navigator = navigator
    switch(route.id) {
      case 'Signup':
        return (<Signup navigator={navigator} />)
      case 'Home':
        return(<Home navigator={navigator} />)
    }
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator
          initialRoute={{id: 'Signup'}}
          renderScene={this.renderScene}
        />
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('MilesManager', () => MilesManager);
