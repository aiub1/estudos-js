const dayjs = require("dayjs")

let day = 05
let mounth = 08
let year = 2003

const dateBirthday = dayjs(`${year}-${mounth}-${day}`)
const currentDate = dayjs() 
const yearsOld = currentDate.diff(dateBirthday, 'years')
const nextBirthday = dateBirthday.add(yearsOld+1,'year')

console.log(`Sua data de aniversario: ${dayjs(dateBirthday).format('DD/MM/YYYY')}`);

console.log(`Sua idade é: ${yearsOld}`);

console.log(`Seu próximo aniversario será em: ${nextBirthday.format('DD/MM/YYYY')}`);

console.log(`Dias restantes para seu proximo aniversario: ${nextBirthday.diff(currentDate, 'day')+1}`);
