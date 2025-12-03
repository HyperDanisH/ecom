import Fastify from "fastify"

const fastify = Fastify()

fastify.get('/', async (request, reply) => {
  return reply.send('Order Service is up and running!');
})

fastify.get('/health', async (request, reply) => {
  return reply.status(200).send({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: Date.now()
  })
});

const start = async () => {
  try {
    await fastify.listen({ port: 8001 })
    console.log("Order Service is running on port 8001")
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()