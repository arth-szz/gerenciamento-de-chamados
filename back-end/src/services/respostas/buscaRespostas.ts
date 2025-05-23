import { prisma } from '../../lib/prisma'

export async function buscaRespostas(usuarioId?: string) {
  let respostas

  if (usuarioId) {
    respostas = await prisma.chamados.findMany({
      where: {
        usuarioId,
      },
      orderBy: {
        dataCriacao: 'asc',
      },
      include: {
        Respostas: true,
      },
    })

    if (respostas.length === 0) {
      throw new Error('Este usuário não possui chamados concluídos')
    }
  } else {
    respostas = await prisma.chamados.findMany({
      orderBy: {
        dataCriacao: 'asc',
      },
      include: {
        Respostas: true,
      },
    })

    if (respostas.length === 0) {
      throw new Error('Não há chamados concluídos no sistema')
    }
  }

  return respostas
}
