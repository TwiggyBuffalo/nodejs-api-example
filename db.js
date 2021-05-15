var mongoose = require('mongoose')

var dbConnection = mongoose.connection
var dbURL = process.env.DB_URL || 'mongodb://localhost'
var dbConfig = { useNewUrlParser: true }

dbConnection.on('open', function () {
  console.log('Connected successfully to: ' + dbURL)
})

dbConnection.on('error', function (error) {
  console.log('Database connection error', error)
})

mongoose.connect(dbURL, dbConfig)