const AuthController = require('./controllers/AuthController')
const AuthControllerPolicy = require('./policies/AuthControllerPolicy')

module.exports = (app) => {
  app.post('/register',
    AuthControllerPolicy.register,
    AuthController.register
  )

  app.get('/', (req, res) => {
    res.send({
      message: 'Welcome!'
    })
  })
}
