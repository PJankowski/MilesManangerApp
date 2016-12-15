import React, { Component } from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'

import Signup from './components/Signup'
import Home from './components/Home'

@connect((store) => {
  return {
    user: store.user.user
  }
})

class App extends Component {
  render() {
    console.log(this.props.user)
    const Rendered = this.props.user.id !== null ? <Home /> : <Signup />

    return (
      <View style={styles.container}>
        { Rendered }
      </View>
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

export default App
