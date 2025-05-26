import type { FastifyRequest } from 'fastify'
import { prisma } from '../../lib/prisma'

export async function criaResposta(
  request: FastifyRequest<{
    Body: { chamadoId: string; mensagem: string }
  }>,
) {
  await prisma.respostas.create({
    data: {
      chamadoId: request.body.chamadoId,
      usuarioId: request.user.id,
      mensagem: request.body.mensagem,
    },
  })

  await prisma.chamados.update({
    where: {
      id: request.body.chamadoId,
    },
    data: {
      status: 'Concluido',
    },
  })

  const chamadoRespondido = await prisma.chamados.findUnique({
    where: {
      id: request.body.chamadoId,
    },
    include: {
      Respostas: true,
    },
  })

  return chamadoRespondido
}
