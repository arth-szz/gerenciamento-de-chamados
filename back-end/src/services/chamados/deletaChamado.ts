import { prisma } from '../../lib/prisma'

export async function deletaChamado(id: string) {
  await prisma.chamados.delete({
    where: {
      id,
    },
  })
}
