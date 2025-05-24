import type { FastifyInstance } from 'fastify'
import { validaId } from '../validators/validaId.js'
import { validaBodyRespostas } from '../validators/validaBodyRepostas.js'
import { buscaChamado } from '../services/chamados/buscaChamado.js'
import { criaResposta } from '../services/respostas/criaResposta.js'
import { buscaUsuario } from '../services/usuarios/buscaUsuario.js'
import { buscaRespostas } from '../services/respostas/buscaRespostas.js'
import { z } from 'zod'
import { atualizaResposta } from '../services/respostas/atualizaResposta.js'
import { deletaResposta } from '../services/respostas/deletaResposta.js'

export async function respostasRotas(app: FastifyInstance) {
  // GET - Puxa todas as respostas á chamados do sistema e ordena pelo mais antigo primeiro

  app.get<{ Querystring: { usuarioId?: string } }>(
    '/respostas',
    async (request, reply) => {
      try {
        let usuarioId = request.query.usuarioId

        if (usuarioId) {
          usuarioId = validaId(usuarioId)

          await buscaUsuario(usuarioId)
        }

        return reply.status(200).send(await buscaRespostas(usuarioId))
      } catch (err) {
        if (err instanceof z.ZodError) {
          console.log(err)
          return reply.status(400).send({ message: 'Formato de id inválido' })
        } else if (
          err instanceof Error &&
          err.message === 'Este usuário não existe'
        ) {
          console.log(err)
          return reply.status(404).send({ message: err.message })
        } else if (
          err instanceof Error &&
          err.message === 'Este usuário não possui chamados concluídos'
        ) {
          console.log(err)
          return reply.status(404).send({ message: err.message })
        } else if (
          err instanceof Error &&
          err.message === 'Não há chamados concluídos no sistema'
        ) {
          console.log(err)
          return reply.status(404).send({ message: err.message })
        }

        console.log(err)
        return reply.status(500).send({ message: 'Erro interno no servidor' })
      }
    },
  )

  // POST - Cria uma resposta a um chamado

  app.post<{
    Body: { chamadoId: string; usuarioId: string; mensagem: string }
  }>('/respostas', async (request, reply) => {
    try {
      validaBodyRespostas(request.body.mensagem)

      await buscaChamado(request.body.chamadoId)

      await buscaUsuario(request.body.usuarioId)

      return reply.status(200).send(await criaResposta(request))
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.log(err)
        return reply.status(400).send({ message: 'Formato de campo inválido' })
      } else if (
        err instanceof Error &&
        err.message === 'Este chamado não existe'
      ) {
        console.log(err)
        return reply.status(404).send({ message: err.message })
      }

      console.log(err)
      return reply.status(500).send({ message: 'Erro interno no servidor' })
    }
  })

  // PUT

  app.put<{
    Body: { mensagem: string }
    Params: { id: string }
  }>('/respostas/:id', async (request, reply) => {
    try {
      const id = validaId(request.params.id)

      validaBodyRespostas(request.body.mensagem)

      return reply
        .status(200)
        .send(await atualizaResposta(id, request.body.mensagem))
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.log(err)
        return reply.status(400).send({ message: 'Formato de campo inválido' })
      }

      console.log(err)
      return reply.status(500).send({ message: 'Erro interno no servidor' })
    }
  })

  // DELETE

  app.delete<{ Params: { id: string } }>(
    '/respostas/:id',
    async (request, reply) => {
      try {
        const id = validaId(request.params.id)

        await deletaResposta(id)

        return reply
          .status(200)
          .send({ message: 'Resposta apagada com sucesso!' })
      } catch (err) {
        if (err instanceof z.ZodError) {
          console.log(err)
          return reply
            .status(400)
            .send({ message: 'Formato de campo inválido' })
        }

        console.log(err)
        return reply.status(500).send({ message: 'Erro interno no servidor' })
      }
    },
  )
}
