import { prisma } from '../../lib/prisma'

export async function buscaUsuario(id: string) {
  const usuario = await prisma.usuarios.findUnique({
    where: {
      id,
    },
  })

  if (!usuario) throw new Error('Este usuário não existe')

  return usuario
}
