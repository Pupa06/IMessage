import Axios from '../services/Axios'

export function signInApi(email, password) {
  return Axios.getInstance().post('/api/v1/login', {
    email,
    password,
  })
}
