const spock = document.getElementById('spock')
const lagarto = document.getElementById('lagarto')
const pedra = document.getElementById('pedra')
const papel = document.getElementById('papel')
const tessoura = document.getElementById('tessoura')
const aqui = document.getElementById('aqui')
const p = document.getElementById('p')
const src = document.getElementById('img')


const playman = (jogadahumana) => {
    playGame(jogadahumana, playmachine())

}

const playmachine = () => {

    const options = ['spock', 'lagarto', 'pedra', 'papel', 'tessoura']
    const numero = Math.floor(Math.random() * 5);
    return options[numero]
}
const deboche = () => {

    const options = ['Ganhei','Penny é você?','Tão inutil como o <br> Howard Wolowitz','Não sou maluco <br> minha mãe me testou','Sou um Gênio']
    const numero = Math.floor(Math.random() * 6);
    return options[numero]
}

const playGame = (humano, machine) => {
    console.log("humano: " + humano + "maquina  " + machine)
    if (humano === machine) {
        aqui.innerHTML = "EMPATOU"
        src.src = "./img"
    }
    else if ((humano === "spock" && machine === "tessoura") || (humano === "spock" && machine === "pedra") || (humano === "lagarto" && machine === "spock") ||
        (humano === "lagarto" && machine == "papel") || (humano === "pedra" && machine === "lagarto") || (humano === "pedra" && machine === "tessoura") ||
        (humano === "papel" && machine === "pedra") || (humano === "papel" && machine === "spock") || (humano === "tessoura" && machine === "papel") ||
        (humano === "tessoura" && machine === "lagarto")) {

        aqui.innerHTML = `"VOCÊ GANHOU!!!! "`
        src.src = "./img"

    }
    else {
        
        src.src = "./IMG/the-big-bang-theory-sheldon-bazinga-phuoc-thinh.jpg";
        aqui.innerHTML=`${deboche()}`
        
    }



}

