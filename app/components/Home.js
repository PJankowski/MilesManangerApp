import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.setState({
      user: this.props.user
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.user.username}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Home
