import type { FastifyRequest } from 'fastify'
import { prisma } from '../../lib/prisma'
import bcrypt from 'bcrypt'

export async function verificaLogin(
  request: FastifyRequest<{
    Body: { email: string; senha: string }
  }>,
) {
  const usuario = await prisma.usuarios.findUnique({
    where: {
      email: request.body.email,
    },
  })

  if (!usuario) throw new Error('E-mail ou senha inválidos')

  const senhaCorreta = await bcrypt.compare(request.body.senha, usuario.senha)

  if (!senhaCorreta) throw new Error('E-mail ou senha inválidos')

  return usuario
}
