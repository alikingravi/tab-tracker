const AuthController = require('./controllers/AuthController')
const SongsController = require('./controllers/SongsController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')

module.exports = (app) => {
  // Root
  app.get('/', (req, res) => {
    res.send({
      message: 'Welcome!'
    })
  })

  // Register
  app.post('/register',
    AuthControllerPolicy.register,
    AuthController.register
  )

  // Login
  app.post('/login',
    AuthController.login
  )

  // Songs
  app.get('/songs',
    SongsController.index
  )
  app.post('/songs',
    SongsController.create
  )
}
