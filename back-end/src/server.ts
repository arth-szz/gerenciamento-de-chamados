import fastify from 'fastify'
import cors from '@fastify/cors'
import { chamadosRotas } from './routes/chamados.js'
import { respostasRotas } from './routes/respostas.js'
import 'dotenv/config'
import { usuariosRotas } from './routes/usuarios.js'
import decorateRequest from './plugins/decorateRequest.js'

const app = fastify()

app.register(cors, {
  origin: true,
})

app.register(decorateRequest)

app.register(chamadosRotas)
app.register(respostasRotas)
app.register(usuariosRotas)

app
  .listen({
    port: 5000,
  })
  .then(() => {
    console.log('Servidor rodando em http://localhost:5000')
  })
