export function getMiles(userId) {
  return (dispatch) => {
    dispatch({type: "FETCH_MILES"})
    fetch('https://milesmanager.herokuapp.com/api/miles/' + userId, {
      method: 'GET'
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.error && responseJson.error !== "") {
        dispatch({type: "FETCH_MILES_FAILURE", payload: error})
      } else {
        dispatch({type: "FETCH_MILES_SUCCESS", payload: responseJson})
      }
    })
    .catch((error) => {
      dispatch({type: "FETCH_MILES_FAILURE", payload: error})
    })
  }
}
