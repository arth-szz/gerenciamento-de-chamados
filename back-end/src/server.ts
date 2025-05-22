import fastify from 'fastify'
import { chamadosRotas } from './routes/chamados.js'
import { respostasRotas } from './routes/respostas.js'
import 'dotenv/config'

const app = fastify()

app.register(chamadosRotas)
app.register(respostasRotas)

app
  .listen({
    port: 5000,
  })
  .then(() => {
    console.log('Servidor rodando em http://localhost:5000')
  })
