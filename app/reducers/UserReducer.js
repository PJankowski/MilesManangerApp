export default function reducer(state={
  user: {
    username: null,
    id: null
  },
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch(action.type) {
    case "FETCH_USER": {
      return {...state, fetching: true}
    }
    case "FETCH_USER_SUCCESS": {
      return {...state, fethcing: false, fetched: true, user: action.payload}
    }
    case "FETCH_USER_ERROR": {
      return {...state, fetching: false, error: action.payload}
    }
  }

  return state
}
