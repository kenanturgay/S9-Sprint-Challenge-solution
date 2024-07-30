const server = require('https://s9-sprint-challenge-solution-server.vercel.app/')

const PORT = process.env.PORT || 9000

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})
