import type { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { autenticar } from '../middleware/autenticar'
import { autenticarAdmin } from '../middleware/autenticarAdmin'
import { validaId } from '../validators/validaId'
import { validaBodyRespostas } from '../validators/validaBodyRepostas'
import { buscaChamado } from '../services/chamados/buscaChamado'
import { atualizaChamado } from '../services/chamados/atualizaChamado'
import { buscaUsuario } from '../services/usuarios/buscaUsuario'
import { buscaRespostas } from '../services/respostas/buscaRespostas'
import { criaResposta } from '../services/respostas/criaResposta'
import { atualizaResposta } from '../services/respostas/atualizaResposta'
import { deletaResposta } from '../services/respostas/deletaResposta'
import { enviaEmail } from '../email_services/enviaEmail'

export async function adminRotas(app: FastifyInstance) {
  app.register(async (rotasAdmin) => {
    rotasAdmin.addHook('preHandler', autenticar)
    rotasAdmin.addHook('preHandler', autenticarAdmin)

    // PUT - Editar chamado

    rotasAdmin.put<{
      Body: { status: string }
      Params: { id: string }
    }>('/chamados/:id', async (request, reply) => {
      const statusSchema = z.enum(['Aberto', 'EmAndamento', 'Concluido'])

      try {
        const idValido = validaId(request.params.id)

        await buscaChamado(idValido)

        const status = statusSchema.parse(request.body.status)

        return reply.status(200).send(await atualizaChamado(idValido, status))
      } catch (err) {
        if (err instanceof z.ZodError) {
          console.log(err)
          return reply
            .status(400)
            .send({ message: 'Formato de dados inválido' })
        } else if (
          err instanceof Error &&
          err.message === 'Este chamado não existe'
        ) {
          console.log(err)
          return reply.status(404).send({ message: err.message })
        }

        console.log(err)
        return reply.status(500).send({ message: 'Erro interno no servidor' })
      }
    })

    // GET - Puxa todas as respostas á chamados do sistema e ordena pelo mais antigo primeiro

    rotasAdmin.get<{ Querystring: { usuarioId?: string } }>(
      '/respostas',
      async (request, reply) => {
        try {
          let usuarioId = request.query.usuarioId

          if (usuarioId) {
            usuarioId = validaId(usuarioId)

            await buscaUsuario(usuarioId)
          }

          return reply.status(200).send(await buscaRespostas(usuarioId))
        } catch (err) {
          if (err instanceof z.ZodError) {
            console.log(err)
            return reply.status(400).send({ message: 'Formato de id inválido' })
          } else if (
            err instanceof Error &&
            err.message === 'Este usuário não existe'
          ) {
            console.log(err)
            return reply.status(404).send({ message: err.message })
          } else if (
            err instanceof Error &&
            err.message === 'Este usuário não possui chamados concluídos'
          ) {
            console.log(err)
            return reply.status(404).send({ message: err.message })
          } else if (
            err instanceof Error &&
            err.message === 'Não há chamados concluídos no sistema'
          ) {
            console.log(err)
            return reply.status(404).send({ message: err.message })
          }

          console.log(err)
          return reply.status(500).send({ message: 'Erro interno no servidor' })
        }
      },
    )

    // POST - Cria uma resposta a um chamado

    rotasAdmin.post<{
      Body: { chamadoId: string; mensagem: string }
    }>('/respostas', async (request, reply) => {
      try {
        validaBodyRespostas(request.body.mensagem)

        const chamado = await buscaChamado(request.body.chamadoId)

        const usuario = await buscaUsuario(chamado.usuarioId)

        const chamadoRespondido = await criaResposta(request)

        const link = `http://127.0.0.1:5501/front-end/pages/acompanhar-chamados.html`

        await enviaEmail(
          usuario.email,
          'UNICLASS - RECUPERAÇÃO DE SENHA',
          `
          <p>Seu chamado foi respondido, segue link do acompanhamento de chamados:</p>
          <a href="${link}">${link}</a>
          `,
        )

        return reply.status(200).send(chamadoRespondido)
      } catch (err) {
        if (err instanceof z.ZodError) {
          console.log(err)
          return reply
            .status(400)
            .send({ message: 'Formato de campo inválido' })
        } else if (
          err instanceof Error &&
          err.message === 'Este chamado não existe'
        ) {
          console.log(err)
          return reply.status(404).send({ message: err.message })
        }

        console.log(err)
        return reply.status(500).send({ message: 'Erro interno no servidor' })
      }
    })

    // PUT - Muda a resposta de um chamado

    rotasAdmin.put<{
      Body: { mensagem: string }
      Params: { id: string }
    }>('/respostas/:id', async (request, reply) => {
      try {
        const id = validaId(request.params.id)

        validaBodyRespostas(request.body.mensagem)

        return reply
          .status(200)
          .send(await atualizaResposta(id, request.body.mensagem))
      } catch (err) {
        if (err instanceof z.ZodError) {
          console.log(err)
          return reply
            .status(400)
            .send({ message: 'Formato de campo inválido' })
        }

        console.log(err)
        return reply.status(500).send({ message: 'Erro interno no servidor' })
      }
    })

    // DELETE - Deleta uma resposta de um chamado

    rotasAdmin.delete<{ Params: { id: string } }>(
      '/respostas/:id',
      async (request, reply) => {
        try {
          const id = validaId(request.params.id)

          await deletaResposta(id)

          return reply
            .status(200)
            .send({ message: 'Resposta apagada com sucesso!' })
        } catch (err) {
          if (err instanceof z.ZodError) {
            console.log(err)
            return reply
              .status(400)
              .send({ message: 'Formato de campo inválido' })
          }

          console.log(err)
          return reply.status(500).send({ message: 'Erro interno no servidor' })
        }
      },
    )
  })
}
