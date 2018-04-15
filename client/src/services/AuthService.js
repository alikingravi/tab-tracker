import Api from '@/services/Api'

export default {

  // Register
  register (credentials) {
    return Api().post('register', credentials)
  },

  // Login
  login (credentials) {
    return Api().post('login', credentials)
  }
}
