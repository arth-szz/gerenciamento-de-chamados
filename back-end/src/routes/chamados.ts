// CRUD para chamados

import type { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma.js'
import { z } from 'zod'
import type { Chamados } from '../generated/prisma/index.js'
import { validaId } from '../validators/validaId.js'
import { validaBody } from '../validators/validaBody.js'
import { buscaChamados } from '../services/buscaChamados.js'
import { buscaUsuario } from '../services/buscaUsuario.js'
import { criaChamado } from '../services/criaChamado.js'
import { buscaChamado } from '../services/buscaChamado.js'
import { atualizaChamado } from '../services/atualizaChamado.js'
import { deletaChamado } from '../services/deletaChamado.js'

export async function chamadosRotas(app: FastifyInstance) {
  // 👑 GET - Puxa todos os chamados do sistema

  app.get<{ Querystring: { usuarioId?: string } }>(
    '/chamados',
    async (request, reply) => {
      try {
        let usuarioId = request.query.usuarioId

        if (usuarioId) usuarioId = validaId(usuarioId)

        const chamados = await buscaChamados(usuarioId)

        return reply.status(200).send(chamados)
      } catch (err) {
        if (
          err instanceof Error &&
          err.message === 'Não há chamados no sistema'
        ) {
          console.log(err)
          return reply.status(404).send(err.message)
        }

        console.log(err)
        return reply.status(500).send('Erro interno no servidor')
      }
    },
  )

  // GET - Filtra os chamados pelo id do usuário

  app.get<{ Params: { usuarioId: string } }>(
    '/chamados/:usuarioId',
    async (request, reply) => {
      try {
        // Valida o usuarioId
        const idValido = validaId(request.params.usuarioId)

        // Verifica se o usuário existe
        await buscaUsuario(idValido)

        // Verifica se o chamado existe
        const buscaChamado = await prisma.chamados.findMany({
          where: {
            usuarioId: idValido,
          },
        })

        if (buscaChamado.length === 0) {
          throw new Error('Este usuário não possui chamados')
        }

        const chamados = buscaChamado

        return reply.status(200).send(
          chamados.map((chamado: Chamados) => {
            return {
              titulo: chamado.titulo,
              status: chamado.status,
              dataCriacao: chamado.dataCriacao,
            }
          }),
        )
      } catch (err) {
        if (err instanceof z.ZodError) {
          console.log(err)
          return reply.status(400).send('Formato de id inválido')
        } else if (
          err instanceof Error &&
          err.message === 'Este usuário não existe'
        ) {
          console.log(err)
          return reply.status(404).send(err.message)
        } else if (
          err instanceof Error &&
          err.message === 'Este usuário não possui chamados'
        ) {
          console.log(err)
          return reply.status(404).send(err.message)
        }

        console.log(err)
        return reply.status(500).send('Erro interno no servidor')
      }
    },
  )

  // GET - Puxa um único chamado pelo id dele

  app.get<{ Params: { id: string } }>(
    '/chamado/:id',
    async (request, reply) => {
      try {
        // Validação do id
        const idValido = validaId(request.params.id)

        //  Verifica se o chamado existe
        const chamadoExiste = await prisma.chamados.findUnique({
          where: {
            id: idValido,
          },
        })

        if (!chamadoExiste) {
          throw new Error('Este chamado não existe')
        }

        const chamado = await prisma.chamados.findUnique({
          where: {
            id: idValido,
          },
          include: {
            Respostas: true,
          },
        })

        return chamado
      } catch (err) {
        if (err instanceof z.ZodError) {
          console.log(err)
          return reply.status(400).send('Formato de id inválido')
        } else if (
          err instanceof Error &&
          err.message === 'Este chamado não existe'
        ) {
          console.log(err)
          return reply.status(404).send(err.message)
        }

        console.log(err)
        return reply.status(500).send('Erro interno no servidor')
      }
    },
  )

  // POST - Cria um novo chamado

  app.post<{
    Body: { usuarioId: string; titulo: string; descricao: string }
  }>('/chamados', async (request, reply) => {
    try {
      validaBody(request)

      await buscaUsuario(request.body.usuarioId)

      return reply.status(201).send(await criaChamado(request))
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.log(err)
        return reply
          .status(400)
          .send('Formato de dados inválido ou campos não preenchidos')
      } else if (
        err instanceof Error &&
        err.message === 'Este usuário não existe'
      ) {
        console.log(err)
        return reply.status(400).send(err.message)
      }

      console.log(err)
      return reply.status(500).send({ erro: 'Erro interno no servidor' })
    }
  })

  // PUT - Editar chamado

  app.put<{
    Body: { status: string }
    Params: { id: string }
  }>('/chamados/:id', async (request, reply) => {
    const statusSchema = z.string()

    try {
      const idValido = validaId(request.params.id)

      await buscaChamado(idValido)

      const status = statusSchema.parse(request.body.status)

      const chamado = await atualizaChamado(idValido, status)

      return chamado
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.log(err)
        return reply
          .status(400)
          .send('Formato de dados inválido ou campo não preenchido')
      } else if (
        err instanceof Error &&
        err.message === 'Este chamado não existe'
      ) {
        console.log(err)
        return reply.status(404).send(err.message)
      }

      console.log(err)
      return reply.status(500).send('Erro interno no servidor')
    }
  })

  // DELETE - Deleta um chamado

  app.delete<{ Params: { id: string } }>(
    '/chamados/:id',
    async (request, reply) => {
      try {
        const idValido = validaId(request.params.id)

        await buscaChamado(idValido)

        await deletaChamado(idValido)

        return reply.status(200).send('Chamado excluído com sucesso!')
      } catch (err) {
        if (err instanceof z.ZodError) {
          console.log(err)
          return reply
            .status(400)
            .send('Formato de id inválido ou campo não preenchido')
        } else if (
          err instanceof Error &&
          err.message === 'Este chamado não existe'
        ) {
          console.log(err)
          return reply.status(404).send(err.message)
        }

        console.log(err)
        return reply.status(500).send('Erro interno no servidor')
      }
    },
  )
}
