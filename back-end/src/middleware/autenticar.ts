import { FastifyReply, FastifyRequest } from 'fastify'
import jwt from 'jsonwebtoken'

export async function autenticar(request: FastifyRequest, reply: FastifyReply) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    return reply.status(401).send({ message: 'Token não fornecido' })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!)
    request.user = decoded

    console.log(request.user)
  } catch (err) {
    console.log(err)
    return reply.status(401).send({ message: 'Token inválido ou expirado' })
  }
}
