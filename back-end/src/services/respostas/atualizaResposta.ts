import { prisma } from '../../lib/prisma'

export async function atualizaResposta(id: string, mensagem: string) {
  return prisma.respostas.update({
    where: {
      id,
    },
    data: {
      mensagem,
    },
  })
}
