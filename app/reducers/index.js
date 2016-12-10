import { combineReducers } from 'redux'

import user from './UserReducer'
import miles from './MilesReducer'

export default combineReducers({
  user,
  miles
})
