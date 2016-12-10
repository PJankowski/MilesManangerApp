import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native'
import { connect } from 'react-redux'
import { getMiles } from '../actions/MilesActions'

@connect((store) => {
  return {
    user: store.user.user,
    miles: store.miles.miles
  }
})

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getMiles(this.props.user.id))
  }

  render(){
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    dataSource = ds.cloneWithRows(this.props.miles)

    return (
      <View style={styles.container}>
        <ListView
          dataSource={dataSource}
          renderRow={(rowData) => <Text>{rowData.value}</Text>}/>
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
