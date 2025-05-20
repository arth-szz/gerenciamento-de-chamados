import { z } from 'zod'
import type { FastifyRequest } from 'fastify'

export function validaBody(
  request: FastifyRequest<{
    Body: { usuarioId: string; titulo: string; descricao: string }
  }>,
) {
  const bodySchema = z.object({
    usuarioId: z.string().uuid(),
    titulo: z.string(),
    descricao: z.string(),
  })

  const bodyValido = bodySchema.parse(request.body)

  return bodyValido
}
