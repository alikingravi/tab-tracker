import Api from '@/services/Api'

export default {

  // Get All Songs
  index () {
    return Api().get('songs')
  },

  // Create Song
  post (song) {
    return Api().post('songs', song)
  }
}
