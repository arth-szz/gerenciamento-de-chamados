import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import jwt from 'jsonwebtoken'
import { validaBodyCadastro } from '../validators/validaBodyCadastro'
import { verificaEmail } from '../services/usuarios/verificaEmail'
import { criaUsuario } from '../services/usuarios/criaUsuario'
import { validaBodyLogin } from '../validators/validaBodyLogin'
import { verificaDadosLogin } from '../services/usuarios/verificaDadosLogin'

export async function usuariosRotas(app: FastifyInstance) {
  // POST - Cadastra um usuário

  app.post<{
    Body: { nome: string; sobrenome: string; email: string; senha: string }
  }>('/cadastro', async (request, reply) => {
    try {
      // Valida os dados do cadastro
      validaBodyCadastro(request)

      // Verifica se o e-mail já existe
      await verificaEmail(request.body.email)

      // Realiza o cadastro e retorna
      return reply.status(201).send(await criaUsuario(request))
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.log(err)
        return reply.status(400).send({ message: 'Dados inválidos' })
      } else if (
        err instanceof Error &&
        err.message === 'E-mail já cadastrado'
      ) {
        console.log(err)
        return reply.status(409).send({ message: err.message })
      }

      console.error(err)
      return reply.status(500).send({ message: 'Erro interno no servidor' })
    }
  })

  // POST - Loga um usuário

  app.post<{ Body: { email: string; senha: string } }>(
    '/login',
    async (request, reply) => {
      try {
        // Valida os dados do login
        validaBodyLogin(request)

        // Verifica os dados no banco
        const usuario = await verificaDadosLogin(request)

        // Gera um token JWT
        const token = jwt.sign(
          { id: usuario.id, email: usuario.email },
          process.env.JWT_SECRET!,
          {
            expiresIn: '1h',
          },
        )

        // Retorna os dados do login
        return reply.status(201).send({
          token,
          usuario: {
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email,
          },
        })
      } catch (err) {
        if (err instanceof z.ZodError) {
          console.log(err)
          return reply
            .status(400)
            .send({ message: 'Dados inválidos', errors: err.errors })
        } else if (
          err instanceof Error &&
          err.message === 'E-mail ou senha inválidos'
        ) {
          console.log(err)
          return reply.status(401).send({ message: err.message })
        }

        console.error(err)
        return reply.status(500).send({ message: 'Erro interno no servidor' })
      }
    },
  )
}
