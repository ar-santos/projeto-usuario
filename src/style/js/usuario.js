import modulePesquisar from "./main.js"
let mostrarEoculta = document.getElementById("less")
let textoDoInput = document.getElementById("id-pesquisa")


const {btnSearch, pesquisa} = modulePesquisar

function mostrar() {
    if (mostrarEoculta.style.display == 'block'){
        mostrarEoculta.style.display = 'none';
}else { 
    mostrarEoculta.style.display = 'block' 
}
}

function pegarValue() {
    console.log(textoDoInput.value)
}

pesquisa(btnSearch,pegarValue)

