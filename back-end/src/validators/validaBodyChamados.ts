import { z } from 'zod'
import type { FastifyRequest } from 'fastify'

export function validaBodyChamados(
  request: FastifyRequest<{
    Body: { titulo: string; descricao: string }
  }>,
) {
  const bodySchema = z.object({
    titulo: z.string(),
    descricao: z.string(),
  })

  const bodyValido = bodySchema.parse(request.body)

  return bodyValido
}
