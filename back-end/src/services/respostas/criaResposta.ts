import type { FastifyRequest } from 'fastify'
import { prisma } from '../../lib/prisma'

export async function criaResposta(
  request: FastifyRequest<{
    Body: { chamadoId: string; usuarioId: string; mensagem: string }
  }>,
) {
  const resposta = await prisma.respostas.create({
    data: {
      chamadoId: request.body.chamadoId,
      usuarioId: request.body.usuarioId,
      mensagem: request.body.mensagem,
    },
  })

  return resposta
}
