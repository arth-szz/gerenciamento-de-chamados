// CRUD respostas

import type { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma.js'
import { z } from 'zod'

export async function respostasRotas(app: FastifyInstance) {
  //
  // 👑 GET - Puxa todas as respostas á chamados do sistema e ordena pelo mais antigo primeiro
  //
  app.get('/respostas', async (request, reply) => {
    const respostas = await prisma.respostas.findMany({
      orderBy: {
        dataEnvio: 'asc',
      },
    })

    return reply.status(200).send(respostas)
  })
  //
  // 👑 POST - Cria uma resposta a um chamado
  //
  app.post('/respostas/:chamadoId', async (request, reply) => {
    // Validação do id do chamado
    const paramsSchema = z.object({
      chamadoId: z.string().uuid(),
    })

    const { chamadoId } = paramsSchema.parse(request.params)

    // Validação do corpo da requisição
    const bodySchema = z.object({
      mensagem: z.string().min(1),
    })

    const { mensagem } = bodySchema.parse(request.body)

    // Verifica se o chamado existe
    const chamado = await prisma.chamados.findUnique({
      where: {
        id: chamadoId,
      },
      select: {
        usuarioId: true,
      },
    })

    if (!chamado) {
      throw new Error('Este chamado não existe')
    }

    const usuarioId = chamado.usuarioId

    const resposta = await prisma.respostas.create({
      data: {
        chamadoId,
        usuarioId,
        mensagem,
      },
    })

    return reply.status(200).send(resposta)
  })
  //
  // PUT
  //
  app.put('/respostas/:id', () => {})

  //
  // DELETE
  //
  app.delete('/respostas/:id', () => {})
}
