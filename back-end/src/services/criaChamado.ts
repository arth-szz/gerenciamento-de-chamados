import type { FastifyRequest } from 'fastify'
import { prisma } from '../lib/prisma'

export async function criaChamado(
  request: FastifyRequest<{
    Body: { usuarioId: string; titulo: string; descricao: string }
  }>,
) {
  const chamado = await prisma.chamados.create({
    data: {
      usuarioId: request.body.usuarioId,
      titulo: request.body.titulo,
      descricao: request.body.descricao,
    },
  })

  return chamado
}
