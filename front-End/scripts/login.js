/* eslint-disable no-undef */
document
  .querySelector('#login-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault()

    const email = document.querySelector('#email').value
    const senha = document.querySelector('#password').value

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      })

      if (response.ok) {
        const data = await response.json()
        alert('Login realizado com sucesso!')

        // Salva o token no localStorage
        localStorage.setItem('token', data.token)

        // Redireciona para a página principal
        window.location.href = 'aberturaChamado.html'
      } else {
        const error = await response.json()
        alert(`Erro: ${error.message}`)
      }
    } catch (err) {
      console.error('Erro ao enviar a requisição:', err)
      alert('Erro ao conectar ao servidor.')
    }
  })
