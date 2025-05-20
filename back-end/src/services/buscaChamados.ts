import { prisma } from '../lib/prisma'

export async function buscaChamados() {
  const chamados = await prisma.chamados.findMany({
    orderBy: {
      dataCriacao: 'asc',
    },
  })

  if (chamados.length === 0) {
    throw new Error('Não há chamados no sistema')
  }

  return chamados
}
