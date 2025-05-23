import { prisma } from '../../lib/prisma'

export async function verificaEmail(email: string) {
  const usuarioExistente = await prisma.usuarios.findUnique({
    where: { email },
  })

  if (usuarioExistente) throw new Error('E-mail já cadastrado')

  return true
}
