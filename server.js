const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const colors = require('colors')
const connectDb = require('./config/db')

// LOAD environment variables
dotenv.config({
  path: './config/config.env',
})

//connect to database
connectDb()
// Route files
const bootcamps = require('./routes/bootcamp')

const app = express()

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//Mount router
app.use('/api/v1/bootcamps', bootcamps)

const PORT = process.env.PORT || 9000

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`),
)

