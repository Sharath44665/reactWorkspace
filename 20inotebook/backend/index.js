
const connectToMongo = require('./db.js')
const express = require('express')
// import express from 'express'
const app = express()
const port = 3000

connectToMongo();

app.use(express.json())

// available notes
app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes.js'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



