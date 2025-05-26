/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
  const paginasLivres = [
    'login.html',
    'cadastro.html',
    'recuperar-senha.html',
    'redefinir-senha.html',
  ]
  const paginaAtual = window.location.pathname.split('/').pop()

  if (!paginasLivres.includes(paginaAtual)) {
    const token = localStorage.getItem('token')
    if (!token) {
      window.location.href = 'login.html'
    }
  }
})
