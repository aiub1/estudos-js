const sendBtn = document.getElementById('sendBtn')


sendBtn.addEventListener('click', function(ev){
  const emailToVerify = document.getElementById('email')
  try {
    verifyEmail(emailToVerify.value)
  } catch (error){
    window.alert(error.message)
  }
})

const verifyEmail = email => {
  console.log(email);
  if (email == ''){
    throw new Error('E-mail vazio')
  } else if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    throw new Error('E-mail invalido')
  }
}