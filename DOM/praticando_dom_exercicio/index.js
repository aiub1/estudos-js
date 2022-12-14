function initAddPlayer() {
  const position = document.getElementById('position').value
  const name = document.getElementById('name').value
  const number = document.getElementById('number').value
  
  if(position != '' && name != '' && number !=''){
    const confirm = window.confirm(`Deseja escalar ${name}, como ${position} com número ${number} ?`)
    if (confirm === true) {
      addPlayer(position,name,number)
      document.getElementById('position').value = ""
      document.getElementById('name').value = ""
      document.getElementById('number').value = ""
    }
  }else{
    window.alert("Favor preencher todos os dados!")
  }
  function addPlayer(position,name,number){
  const li = document.createElement('li')
  li.innerText = `${position}: ${name} (${number})`
  li.setAttribute('id', number)

  const ul = document.getElementById('teamList')
  ul.appendChild(li)
}
}


function removePlayer() {
  const numberToRemove = document.getElementById('numberToRemove').value
  if (numberToRemove != "") {
    const player = document.getElementById(numberToRemove)
    console.log(player)
    if (player != null) {
      const confirmRemove = window.confirm(`Deseja remover ${player.textContent} ?`)
      if (confirmRemove === true) {
        const ul = document.getElementById('teamList')
        ul.removeChild(player)
        document.getElementById('numberToRemove').value = ""
      }
    }else{
      window.alert("Jogador não localizado")
    }
  }else{
    window.alert("Favor inserir um número para ser removido!")
  }
}