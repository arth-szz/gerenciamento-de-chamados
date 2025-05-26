import { prisma } from '../../lib/prisma'

export async function verificaEmail(email: string) {
  const usuarioExistente = await prisma.usuarios.findUnique({
    where: { email },
  })

  return usuarioExistente
}
