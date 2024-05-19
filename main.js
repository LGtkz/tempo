const chave = "222ea3f11ff766803735a4c5d7052fb0";

const btn = document.getElementById("btn");

btn.onclick = handleInput;

const input = document.getElementById("inputCidade");
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        handleInput();
    }
});

function handleInput() {
    const cidade = document.getElementById("inputCidade")
    console.log(cidade.value);  // Log the value of the input
    buscaCidade(cidade.value)
}


async function buscaCidade(cidade){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    colocaDados(dados)
}

function colocaDados(dados){
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".desc").innerHTML = dados.weather[0].description
    document.getElementById("umidade").innerHTML ="Umidade: " + dados.main.humidity + "%"
    document.querySelector(".prev").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
}

document.addEventListener("DOMContentLoaded", () => {
    buscaCidade("Monte Azul")
})