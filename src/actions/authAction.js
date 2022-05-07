import axios from 'axios'

export const signupAction = async userData => {
  return axios.post('/api/auth/signup', userData)
}
export const signinAction = async (email, password) => {
  return axios.post('/api/auth/login', { email, password })
}
