/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', async () => {
  const token = localStorage.getItem('token')
  const tabela = document.querySelector('#tabela-chamados tbody')

  try {
    const response = await fetch('http://localhost:5000/chamados', {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })

    if (!response.ok) {
      throw new Error('Erro ao buscar chamados')
    }

    const chamados = await response.json()

    if (chamados.length === 0) {
      tabela.innerHTML =
        '<tr><td colspan="3">Nenhum chamado encontrado.</td></tr>'
      return
    }

    tabela.innerHTML = chamados
      .map(
        (chamado) => `
      <tr>
        <td>${chamado.titulo}</td>
        <td>${chamado.status}</td>
        <td>${new Date(chamado.dataCriacao).toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        })}</td>
      </tr>
    `,
      )
      .join('')
  } catch (err) {
    tabela.innerHTML = `<tr><td colspan="3">Erro ao carregar chamados.</td></tr>`
  }
})
