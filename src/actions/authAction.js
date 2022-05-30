import axios from 'axios'

export const signupAction = (firstName, lastName, email, password) => {
  return axios.post('/api/auth/signup', {
    firstName,
    lastName,
    email,
    password
  })
}
export const signinAction =  (email, password) => {
  return axios.post('/api/auth/login', { email, password })
}
