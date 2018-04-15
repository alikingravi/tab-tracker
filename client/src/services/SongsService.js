import Api from '@/services/Api'

export default {

  // Get All Songs
  index () {
    return Api().get('songs')
  },

  // Create Song
  post (song) {
    return Api().post('songs', song)
  },

  // Show Song
  show (songId) {
    return Api().get(`songs/${songId}`)
  },

  // Save Song
  put (song) {
    return Api().put(`songs/${song.id}`, song)
  }
}
