import { prisma } from '../lib/prisma'

export async function buscaChamados(usuarioId?: string) {
  let chamados

  if (usuarioId) {
    chamados = await prisma.chamados.findMany({
      where: {
        usuarioId,
      },
      orderBy: {
        dataCriacao: 'asc',
      },
    })

    if (chamados.length === 0) {
      throw new Error('Este usuário não possui chamados')
    }
  } else {
    chamados = await prisma.chamados.findMany({
      orderBy: {
        dataCriacao: 'asc',
      },
    })

    if (chamados.length === 0) {
      throw new Error('Não há chamados no sistema')
    }
  }

  return chamados
}
