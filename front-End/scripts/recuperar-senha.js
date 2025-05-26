/* eslint-disable no-undef */
document
  .querySelector('#recuperar-form')
  .addEventListener('submit', async (event) => {
    event.preventDefault()
    const email = document.querySelector('#email').value
    try {
      const response = await fetch('http://localhost:5000/recuperar-senha', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (response.ok) {
        alert('E-mail de recuperação enviado!')
      } else {
        const error = await response.json()
        alert(`Erro: ${error.message}`)
      }
    } catch {
      alert('Erro ao conectar ao servidor.')
    }
  })
