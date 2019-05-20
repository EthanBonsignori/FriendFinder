const path = require('path')
const express = require('express')

const app = express()
const port = process.env.port || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./app/routing/apiRoutes')(app)
// require('./app/routing/htmlRoutes')(app)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
