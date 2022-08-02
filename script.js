// Semana 1

//Heróis Marvel

const heroi1 = "Homem de Ferro"
const idade1 = 53
const possuiSuperPoder1 = false

const heroi2 = "Homem Aranha"
const idade2 = 17
const possuiSuperPoder2 = true

const heroi3 = "Viuva Negra"
const idade3 = 34
const possuiSuperPoder3 = false

console.log(`A média das idades dos Heróis é de ${(idade1+idade2+idade3)/3} anos.`)

const verificaSuperpoder = possuiSuperPoder1 && possuiSuperPoder2 && possuiSuperPoder3
console.log(verificaSuperpoder)

console.log(`${heroi1} possui super poderes?\n - ${possuiSuperPoder1}\n${heroi2} possui super poderes?\n - ${possuiSuperPoder2} \n${heroi3} possui super poderes?\n - ${possuiSuperPoder3}`)
