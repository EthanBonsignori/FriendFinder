const friends = require('../data/friends')

const apiRoutes = (app) => {
  app.get('/api/friends', (req, res) => {
    res.json(friends)
  })

  app.post('/api/friends', (req, res) => {
    const userData = req.body

    const match = {
      name: '',
      photo: '',
      difference: Infinity
    }

    for (let i = 0; i < friends.length; i++) {
      let difference = 0
      for (let j = 0; j < friends[i].scores.length; j++) {
        difference += Math.abs(parseInt(friends[i].scores[j] - parseInt(userData.scores[j])))
      }

      if (difference < match.difference) {
        match.name = friends[i].name
        match.photo = friends[i].photo
        match.difference = difference
      }
    }
    friends.push(userData)
    res.json(match)
  })
}

module.exports = apiRoutes
