// pendente - pending
// resolvida - resolved
// rejeitada - rejected
// finalizada
const p = new Promise((resolve, reject) => {
  console.log('A promisse está sendo executada.')
  setTimeout(() => {
    if (true) {
      reject(false)
    }
    console.log('Resolvendo a promisse...')
    resolve(true)
  }, 1000 * 2)
})

console.log(p);


setTimeout(() => {
  console.log(p);
}, 1000 * 3)
