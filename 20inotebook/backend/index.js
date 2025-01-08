
const connectToMongo = require('./db.js')
const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

connectToMongo();
app.use(cors())
app.use(express.json())

// available notes
app.use('/api/auth', require('./routes/auth.js'))
app.use('/api/notes', require('./routes/notes.js'))

app.listen(port, () => {
  console.log(`iNotebook app listening on port ${port}`)
})



