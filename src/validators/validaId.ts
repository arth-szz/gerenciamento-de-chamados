import { z } from 'zod'

export function validaId(id: string) {
  const idSchema = z.string().uuid()

  const idValidado = idSchema.parse(id)

  return idValidado
}
