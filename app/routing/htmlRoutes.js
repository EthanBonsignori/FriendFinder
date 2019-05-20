const path = require('path')

const htmlRoutes = (app) => {
  app.get('/survey', (req, res) => {
    res.sendFile(path.join(`${__dirname}/../public/survey.html`))
  })

  app.use((req, res) => {
    res.sendFile(path.join(`${__dirname}/../public/home.html`))
  })
}

module.exports = htmlRoutes
