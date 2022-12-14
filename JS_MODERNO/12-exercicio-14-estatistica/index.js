let accumNum = 0
let accumPound = 0

const simpleAverageOperation = (...n) => n.reduce((accum,n) => (accum + n))/n.length

const mediana = (...n) => {
  n.sort((a,b) => a - b)
  console.log(n)

  let i = n.length/2

  if((n.length)% 2 == 0){
    i -= 1
    j = (i+1)
   
    console.log((n[i]+n[j])/2);
  
  }else{
    console.log(n[i-0.5]);
  }
}

const mediaPonderada = (n) => {
  accumNum = 0
  accumPound = 0
  n.forEach((n) => {
    accumNum += (n[0]*n[1])
    accumPound += (n[1])    
  })
  console.log(`Média ponderada: ${accumNum/accumPound}`);
}

const moda = (...n) => {
  
}

// const teste = [[10,8],[10,1],[10,1]]
// const simpleAverageMenu = () => {
//   let number = []
//   let choice = null
//   while(choice != ''){
//     choice = prompt('Insira número:')
//     if (choice != "") {
//       console.log(choice);
//       number.push(Number(choice))
//     }
//     console.log(number);
//   }
//   let resultSimpleAverage = simpleAverageOperation(...number)
//   alert(`Resultado da média simples de ${number.join(', ')} é : ${resultSimpleAverage}`)
// }

// const mainMenu = () => prompt(`ESCOLHA:
//   1-) Média Aritmética Simples
//   2-) Média Aritmética Ponderada
//   3-) Mediana
//   4-) Moda`)


// switch (Number(mainMenu())) {
//   case 1:
//     simpleAverageMenu()
//     break;
// }