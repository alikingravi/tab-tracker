const events = require('events')

const eventEmitter = new events.EventEmitter();

let connectHandler = function connected() {
  console.log('Connection succesful')

  eventEmitter.emit('data_received')
}

eventEmitter.on('connection', connectHandler)

eventEmitter.on('data_received', () => {
  console.log('Data received Successfully')
})

eventEmitter.emit('connection')
console.log('Program Ended')