import fastify from 'fastify'
import '@controllers/UsersController'

const app = fastify()

app.get('/', async (request, reply) => {
  return reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')  
    .send({ hello: 'world' })
})

app.listen(3333, '127.0.0.1', (err, address) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
})