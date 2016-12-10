export default function reducer(state={
  miles: [],
  fetching: false,
  fetched: false,
  error: null
}, action) {
  switch(action.type) {
    case "FETCH_MILES": {
      return {...state, fetching: true}
    }
    case "FETCH_MILES_SUCCESS": {
      return {...state, fethcing: false, fetched: true, miles: action.payload}
    }
    case "FETCH_MILES_FAILURE": {
      return {...state, fetching: false, error: action.payload}
    }
  }

  return state
}
