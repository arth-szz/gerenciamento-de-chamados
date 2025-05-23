import { prisma } from '../../lib/prisma'

export async function buscaChamado(id: string) {
  const chamado = await prisma.chamados.findUnique({
    where: {
      id,
    },
    include: {
      Respostas: true,
    },
  })

  if (!chamado) throw new Error('Este chamado não existe')

  return chamado
}
