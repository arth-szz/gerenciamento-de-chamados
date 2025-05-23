import type { FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function validaBodyLogin(
  request: FastifyRequest<{ Body: { email: string; senha: string } }>,
) {
  const bodySchema = z.object({
    email: z.string().email({ message: 'E-mail inválido' }),
    senha: z
      .string()
      .min(6, { message: 'A senha deve ter pelo menos 6 caracteres' }),
  })

  return bodySchema.parse(request.body)
}
