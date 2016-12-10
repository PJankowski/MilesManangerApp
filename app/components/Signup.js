import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput
} from 'react-native'

import { connect } from 'react-redux'

import { loginUser } from '../actions/UserActions'

@connect((store) => {
  return {
    user: store.user
  }
})

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: '',
      error: ''
    };

    this.submitForm = this.submitForm.bind(this)
  }

  submitForm() {
    const { username, password } = this.state
    this.props.dispatch(loginUser({username: username, password: password}))
      .then((data) => {
        if (this.props.user.user.error) {
          this.setState({
            error: this.props.user.user.error
          })
        } else {
          this.props.navigator.push({
            id: 'Home'
          })
        }
      })
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.error}>{this.state.error}</Text>
          <TextInput style={styles.input} onChangeText={(text) => {this.setState({username: text})}}/>
          <TextInput style={styles.input} onChangeText={(text) => {this.setState({password: text})}} />
          <Button onPress={this.submitForm} title="Signup" />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333'
  },
  form: {
    backgroundColor: '#E5E5E5',
    padding: 100
  },
  input: {
    borderWidth: 1,
    borderColor: '#333333',
    height: 30,
    width: 200,
    padding: 8
  },
  error: {
    color: "#F44336"
  }
})

export default Signup
