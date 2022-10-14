// SEMANA 1

const heroi1 = "Homem de Ferro";
const idade1 = 53;
const possuiSuperPoder1 = false;


const heroi2 = "Homem Aranha";
const idade2 = 17;
const possuiSuperPoder2 = true;

const heroi3 = "Viuva Negra";
const idade3 = 34;
const possuiSuperPoder3 = false;

console.log(`A média das idades dos Heróis é de ${(idade1+idade2+idade3)/3} anos.`);

const verificaSuperpoder = possuiSuperPoder1 && possuiSuperPoder2 && possuiSuperPoder3;
console.log(verificaSuperpoder);

console.log(`${heroi1} possui super poderes?\n - ${possuiSuperPoder1}\n${heroi2} possui super poderes?\n - ${possuiSuperPoder2} \n${heroi3} possui super poderes?\n - ${possuiSuperPoder3}`)

// SEMANA 2
const habilidadesHeroi1 = ["Inteligência", "Armadura", "Velocidade"]
const habilidadesHeroi2 = ["Agilidade", "Reflexo", "Acrobacia"]
const habilidadesHeroi3 = ["Artes Marciais", "Espionagem", "Hacker"]

console.log(`Herói: ${heroi1} \nIdade: ${idade1} \nPossui Super Poderes? -${possuiSuperPoder1}\n Habilidades: ${habilidadesHeroi1}`)
console.log(`Herói: ${heroi2} \nIdade: ${idade2} \nPossui Super Poderes? -${possuiSuperPoder2}\n Habilidades: ${habilidadesHeroi2}`)
console.log(`Herói: ${heroi3} \nIdade: ${idade3} \nPossui Super Poderes? -${possuiSuperPoder3}\n Habilidades: ${habilidadesHeroi3}`)

// SEMANA 3

const superHerois = []

const homemDeFerro = {
    Heroi: "Homem de Ferro",
    Idade: 53,
    Possui_Super_Poderes: false,
    Habilidades: ["Inteligência", "Armadura", "Velocidade"]}

const homemAranha = {
    Heroi: "Homem Aranha",
    Idade: 17,
    Possui_Super_Poderes: true,
    Habilidades: ["Agilidade", "Reflexo", "Acrobacia"]}

const viuvaNegra ={
    Heroi: "Viuva Negra",
    Idade: 34,
    Possui_Super_Poderes: false,
    Habilidades: ["Artes Marciais", "Espionagem", "Hacker"]}

superHerois.push(homemDeFerro);
superHerois.push(homemAranha);
superHerois.push(viuvaNegra);

// console.log(superHerois);

// SEMANA 4

// console.log("----------------------------------------------------")

// if (homemDeFerro.Possui_Super_Poderes === true){
//     superHerois.push(homemDeFerro)
// } else {
//     alert ("Usuário não foi adicionado!")
// }

// if (homemAranha.Possui_Super_Poderes === true){
//     superHerois.push(homemAranha)
// } else {
//     alert ("Usuário não foi adicionado!")
// }

// if (viuvaNegra.Possui_Super_Poderes === true){
//     superHerois.push(viuvaNegra)
// } else {
//     alert ("Usuário não foi adicionado!")
// }

// console.log(superHerois);

// SEMANA 5
console.log("----------------------------------------------------")

for (let i = 0; i<superHerois.length; i++){
    console.log(`Herói: ${superHerois[i].Heroi}\nIdade: ${superHerois[i].Idade}\nPossui Super Poderes? ${superHerois[i].Possui_Super_Poderes}\nHabilidades: ${superHerois[i].Habilidades}`)
}

console.log("----------------------------------------------------")

// SEMANA 6

const arrayDeHerois = superHerois;
// console.log(arrayDeHerois)

const heroisMapeados = arrayDeHerois.map(function(Herois) {
    return `Herói: ${Herois.Heroi} - Idade: ${Herois.Idade} - Possui Super Poderes? ${Herois.Possui_Super_Poderes} - Habilidades: ${Herois.Habilidades}`
});
console.log(heroisMapeados)

//SEMANA 7

function filtrarHeroi(arrayDeObj, valorString) {
    let objARetornar = {}

    for (let i = 0; i < arrayDeObj.length; i++) {
        if (arrayDeObj[i].Heroi === valorString) {

            objARetornar.Heroi = arrayDeObj[i].Heroi;
            objARetornar.Idade = arrayDeObj[i].Idade;
            objARetornar.Possui_Super_Poderes = arrayDeObj[i].Possui_Super_Poderes;
            objARetornar.Habilidades = arrayDeObj[i].Habilidades;
        }
    }

    if (objARetornar.Heroi !== valorString) {
        alert("Não encontrei o herói");
    } else {
        return objARetornar;
    }
}

const objHomemdeFerro = filtrarHeroi(arrayDeHerois, "Homem de Ferro");
console.log(objHomemdeFerro)


const listaHerois = document.createElement("ul")
const container = document.getElementById("container")
container.insertAdjacentElement('beforebegin', listaHerois)
console.log(listaHerois)
listaHerois.setAttribute("id","lista-herois")


function buscarHeroi() {

    const elementoDeCampo = document.getElementById("campo");
    const textoABuscar = elementoDeCampo.value;
    console.log(textoABuscar)
    //chamando a função que recebe um array e um parâmetro, e passando como argumento, o array dos meus itens, e a string com o value do campo.
    const heroiRetornado = filtrarHeroi(arrayDeHerois, textoABuscar);
    if (heroiRetornado.Heroi) {
        const elementoDeLista = document.getElementById("lista-herois");
        elementoDeLista.innerHTML += `<li>Herói: ${heroiRetornado.Heroi}</li>`;
        elementoDeLista.innerHTML += `<li>Idade: ${heroiRetornado.Idade}</li>`;
        elementoDeLista.innerHTML += `<li>Possui Super Poderes? ${heroiRetornado.Possui_Super_Poderes}</li>`;
        elementoDeLista.innerHTML += `<li>Habilidades: ${heroiRetornado.Habilidades}</li>`;
        elementoDeLista.setAttribute("style","font-weight: bold")
      
    }else{
        alert("Herói não Localizado");
    }
}
