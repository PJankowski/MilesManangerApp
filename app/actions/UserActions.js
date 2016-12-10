export function loginUser(user) {
  return (dispatch) => {
    return fetch('https://milesmanager.herokuapp.com/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: user.username,
        password: user.password
      })
    })
    .then((response) => response.json())
    .then((responseJson) => {
      if (responseJson.error && responseJson.error !== "") {
        dispatch({type: "FETCH_USER_FAILURE", payload: error})
      } else {
        dispatch({type: "FETCH_USER_SUCCESS", payload: responseJson})
      }
    })
    .catch((error) => {
      dispatch({type: "FETCH_USER_FAILURE", payload: error})
    })
  }
}
