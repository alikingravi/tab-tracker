const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

require('./routes')(app)

// Database Connection
sequelize.sync()
  .then(() => {
    // Listen to server
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
