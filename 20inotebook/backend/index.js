const connectToMongo = require('./db');
const express = require('express')
const app = express()
const port = 3000

connectToMongo();

app.use(express.json())

// available notes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



