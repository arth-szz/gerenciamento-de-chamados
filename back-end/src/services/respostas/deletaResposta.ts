import { prisma } from '../../lib/prisma'

export async function deletaResposta(id: string) {
  await prisma.respostas.delete({
    where: {
      id,
    },
  })
}
