const {Song} = require('../models')

module.exports = {

  // Get all songs
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 50
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'No songs found'
      })
    }
  },

  // Create a song
  async create (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occured trying to create the song.'
      })
    }
  }
}
