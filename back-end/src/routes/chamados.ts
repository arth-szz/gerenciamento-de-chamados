import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { validaId } from '../validators/validaId.js'
import { validaBodyChamados } from '../validators/validaBodyChamados.js'
import { buscaChamados } from '../services/chamados/buscaChamados.js'
import { buscaUsuario } from '../services/usuarios/buscaUsuario.js'
import { criaChamado } from '../services/chamados/criaChamado.js'
import { buscaChamado } from '../services/chamados/buscaChamado.js'
import { atualizaChamado } from '../services/chamados/atualizaChamado.js'
import { deletaChamado } from '../services/chamados/deletaChamado.js'
import { autenticar } from '../middleware/autenticar.js'

export async function chamadosRotas(app: FastifyInstance) {
  // GET - Puxa todos os chamados do sistema

  app.get<{ Querystring: { usuarioId?: string } }>(
    '/chamados',
    { preHandler: [autenticar] },
    async (request, reply) => {
      try {
        let usuarioId = request.query.usuarioId

        if (usuarioId) {
          usuarioId = validaId(usuarioId)

          await buscaUsuario(usuarioId)
        }

        const chamados = await buscaChamados(usuarioId)

        return reply.status(200).send(chamados)
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
          err.message === 'Este usuário não possui chamados'
        ) {
          console.log(err)
          return reply.status(404).send({ message: err.message })
        } else if (
          err instanceof Error &&
          err.message === 'Não há chamados no sistema'
        ) {
          console.log(err)
          return reply.status(404).send({ message: err.message })
        }

        console.log(err)
        return reply.status(500).send({ message: 'Erro interno no servidor' })
      }
    },
  )

  // GET - Puxa um único chamado

  app.get<{ Params: { id: string } }>(
    '/chamado/:id',
    async (request, reply) => {
      try {
        const idValido = validaId(request.params.id)

        return reply.status(200).send(await buscaChamado(idValido))
      } catch (err) {
        if (err instanceof z.ZodError) {
          console.log(err)
          return reply.status(400).send({ message: 'Formato de id inválido' })
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
    },
  )

  // POST - Cria um novo chamado

  app.post<{
    Body: { usuarioId: string; titulo: string; descricao: string }
  }>('/chamados', async (request, reply) => {
    try {
      validaBodyChamados(request)

      await buscaUsuario(request.body.usuarioId)

      return reply.status(201).send(await criaChamado(request))
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.log(err)
        return reply.status(400).send({ message: 'Formato de dados inválido' })
      } else if (
        err instanceof Error &&
        err.message === 'Este usuário não existe'
      ) {
        console.log(err)
        return reply.status(400).send({ message: err.message })
      }

      console.log(err)
      return reply.status(500).send({ message: 'Erro interno no servidor' })
    }
  })

  // PUT - Editar chamado

  app.put<{
    Body: { status: string }
    Params: { id: string }
  }>('/chamados/:id', async (request, reply) => {
    const statusSchema = z.enum(['Aberto', 'EmAndamento', 'Concluido'])

    try {
      const idValido = validaId(request.params.id)

      await buscaChamado(idValido)

      const status = statusSchema.parse(request.body.status)

      return reply.status(200).send(await atualizaChamado(idValido, status))
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.log(err)
        return reply.status(400).send({ message: 'Formato de dados inválido' })
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

  // DELETE - Deleta um chamado

  app.delete<{ Params: { id: string } }>(
    '/chamados/:id',
    async (request, reply) => {
      try {
        const idValido = validaId(request.params.id)

        await deletaChamado(idValido)

        return reply.status(200).send('Chamado excluído com sucesso!')
      } catch (err) {
        if (err instanceof z.ZodError) {
          console.log(err)
          return reply.status(400).send({ message: 'Formato de id inválido' })
        }

        console.log(err)
        return reply.status(500).send({ message: 'Erro interno no servidor' })
      }
    },
  )
}
