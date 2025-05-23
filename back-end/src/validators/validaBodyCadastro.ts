import { z } from 'zod'
import type { FastifyRequest } from 'fastify'

export function validaBodyCadastro(
  request: FastifyRequest<{
    Body: { nome: string; sobrenome: string; email: string; senha: string }
  }>,
) {
  const bodySchema = z.object({
    nome: z.string(),
    sobrenome: z.string(),
    email: z.string().email(),
    senha: z.string().min(6),
  })

  const bodyValido = bodySchema.parse(request.body)

  return bodyValido
}
