const { setupServer } = require('msw/node')
const { rest } = require('msw')

const { buildResponse } = require('./helpers')

async function result(req, res, ctx) {
  const [status, payload] = await buildResponse(req)
  return res(
    ctx.status(status),
    ctx.json(payload),
  )
}

function catchAll(req, res, ctx) {
  const message = `Endpoint [${req.method}] /${req.params['0']} does not exist`
  return res(
    ctx.status(404),
    ctx.json({ message }),
  )
}

const handlers = [
  rest.post('https://s9-sprint-challenge-solution-server.vercel.app/', result),
  rest.all('https://s9-sprint-challenge-solution-server.vercel.app/*', catchAll),
]

module.exports = setupServer(...handlers)
