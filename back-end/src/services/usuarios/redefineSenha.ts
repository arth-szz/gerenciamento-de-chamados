import { prisma } from '../../lib/prisma'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function redefineSenha(token: string, novaSenha: string) {
  const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
    id: string
  }
  const senhaCriptografada = await bcrypt.hash(novaSenha, 10)
  await prisma.usuarios.update({
    where: { id: decoded.id },
    data: { senha: senhaCriptografada },
  })
}
