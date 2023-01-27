document.getElementById('sendBtn').addEventListener('click', function(ev){
  const emailToVerify = document.getElementById('email')
  const passwordVerify = document.getElementById('password')
  try {
    verifyEmail(emailToVerify.value)
    verifyPassword(passwordVerify.value)
  } catch (error){
    window.alert(error.message)
  }
})

const verifyEmail = email => {
  console.log(email);
  if (email == '') {
    throw new Error('E-mail vazio!')
  } else if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    throw new Error('E-mail invalido')
  }
}

const verifyPassword = password => {
  console.log(password);
  if (password == '') {
    throw new Error('Senha vazia!')
  } else if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/)) {
    throw new Error('Senha precisa: letra minuscula, letra maiuscula, número, um caractere especial e pelo menos 8 caracteres.')
  }
}

// senha:
// /^
//   (?=.*\d)               deve conter ao menos um dígito
//   (?=.*[a-z])            deve conter ao menos uma letra minúscula
//   (?=.*[A-Z])            deve conter ao menos uma letra maiúscula
//   (?=.*[$*&@#])          deve conter ao menos um caractere especial
//   [0-9a-zA-Z$*&@#]{8,}   deve conter ao menos 8 dos caracteres mencionados
// $/