import { prisma } from '../lib/prisma'
import type { Chamados } from '../generated/prisma'

export async function buscaChamados(usuarioId?: string) {
  let chamados: Chamados[]

  if (usuarioId) {
    chamados = await prisma.chamados.findMany({
      where: {
        usuarioId,
      },
      orderBy: {
        dataCriacao: 'asc',
      },
    })
  } else {
    chamados = await prisma.chamados.findMany({
      orderBy: {
        dataCriacao: 'asc',
      },
    })
  }

  if (chamados.length === 0) {
    throw new Error('Não há chamados no sistema')
  }

  return chamados
}
