import { prisma } from '../lib/prisma'

export async function atualizaChamado(
  id: string,
  status: 'Aberto' | 'EmAndamento' | 'Concluido',
) {
  const chamado = prisma.chamados.update({
    where: {
      id,
    },
    data: {
      status,
    },
  })

  return chamado
}
