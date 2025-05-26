import { FastifyRequest, FastifyReply } from 'fastify'

export async function autenticarAdmin(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  if (!request.user || request.user.ehAdm !== true) {
    return reply
      .status(403)
      .send({ message: 'Acesso restrito a administradores' })
  }
}
