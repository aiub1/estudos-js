document.getElementById('sessionBtn').addEventListener('click', function() {
  const input = document.getElementById('session')
  sessionStorage.setItem('info',input.value)
  input.value = ''
})

document.getElementById('readSesssion').addEventListener('click',function () {
  const info = sessionStorage.getItem('info')
  alert(`A informação guardada é: ${info}`)
})

document.getElementById('localBtn').addEventListener('click',function(){
  const input = document.getElementById('local')
  localStorage.setItem('text', input.value)

  input.value = ''
})

document.getElementById('readLocal').addEventListener('click',function () {
  const info = localStorage.getItem('text')
  alert(`A informação guardada no local storage é: ${info}`)
})

document.getElementById('cookieBtn').addEventListener('click',function(){
  const input = document.getElementById('cookie')
  const cookie = `info=${input.value};`
  const expiration = `expires=${new Date(2022,11,22)};`
  const path = 'path=/;'
  document.cookie = cookie + expiration + path
  input.value = ''
})
