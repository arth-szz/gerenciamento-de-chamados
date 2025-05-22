import { z } from 'zod'

export function validaBodyRespostas(mensagem: string) {
  const bodySchema = z.string()

  const bodyValido = bodySchema.parse(mensagem)

  return bodyValido
}
