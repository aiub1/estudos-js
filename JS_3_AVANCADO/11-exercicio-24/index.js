function getImc(weigth,heigth) {
  return new Promise((resolve,reject) => {
    console.log(`Iniciando calculo de IMC...`)
    setTimeout(() => {
      if (isNaN(weigth) || isNaN(heigth)) {
        reject('peso e altura precisam ser números')
      }else{
        resolve(weigth/(heigth*heigth))
      }
    },1)
  })
}

function showImc(weight,height) {
  getImc(weight,height).then((result) => {
    console.log(`\nO resultado do IMC foi de ${result}.`)
  
    if (result < 18.5) console.log('Situação: MAGREZA')
    else if (result < 25) console.log('Situação: NORMAL')
    else if (result < 30) console.log('Situação: SOBREPESO')
    else if (result < 40) console.log('Situação: OBESIDADE')
    else console.log('Situação: OBESIDADE GRAVE')
    
  }).catch((err) => {
    console.log(err)
  })

  console.log(`\nCalculando o IMC para peso ${weight} e altura ${height}...`)
}


showImc(71, 1.74)
showImc(48, 1.60)
showImc(71, "texto")
showImc(82, 1.72)
showImc(120, 1.80)