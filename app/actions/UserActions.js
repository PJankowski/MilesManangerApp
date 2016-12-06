export function loginUser(user) {
  return (dispatch) => {
    fetch('http://localhost:8080/api/login', {
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
      let { username, id } = responseJson

      dispatch({type: "FETCH_USER_SUCCESS", payload: {username: username, id: id}})
    })
    .catch((error) => {
      dispatch({type: "FETCH_USER_SUCCESS", payload: err})
    })
  }
}
