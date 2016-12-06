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
    user: store.user.user
  }
})

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: ''
    };
  }

  updateUsername(username) {
    this.setState({
      username: username
    })
  }

  updatePassword(password) {
    this.setState({
      password: password
    })
  }

  submitForm() {
    this.props.dispatch(loginUser({username: this.state.username, password: this.state.password}))
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput style={styles.input} onChangeText={this.updateUsername.bind(this)}/>
          <TextInput style={styles.input} onChangeText={this.updatePassword.bind(this)} />
          <Button onPress={this.submitForm.bind(this)} title="Signup" />
          <Text>{this.props.user.username}</Text>
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
  }
})

export default Signup
