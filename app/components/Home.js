import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native'
import { connect } from 'react-redux'
// import moment from 'moment'

import { getMiles } from '../actions/MilesActions'

@connect((store) => {
  return {
    user: store.user.user,
    miles: store.miles
  }
})

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(getMiles(this.props.user.id))
  }

  render(){
    console.log(this.props.miles)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    const dataSource = ds.cloneWithRows(this.props.miles.miles)

    return (
      <View style={styles.container}>
        { this.props.miles.fetching ?
          <ListView
            dataSource={dataSource}
            renderRow={(rowData) => {
              <Text>
                {rowData.text}
              </Text>
            }}/>
          : <Text>Loading...</Text> }
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
