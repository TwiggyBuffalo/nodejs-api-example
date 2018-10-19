var express = require('express')
var app = express()

var port = process.env.PORT || 3000

var db = require('./db') // eslint-disable-line

var routes = require('./routes')

var UserController = require('./controllers/UserController')

app.use(routes.users, UserController)

app.listen(port, function () {
  console.log('Server is running on ' + port)
})
