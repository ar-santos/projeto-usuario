let btn = document.getElementById("id-search") // Trocar variavel btn por pesquisarBtn
let button = document.getElementById("primeiro-button") // Trocar nome do icone lupa para pesquisaUsuarioIcon 
let textoDoInput = document.getElementById("id-pesquisa")
import pegarUsuario from './usuario.js'
import utils from './exibirEsconderCard.js'
import Debug from './pegarDados.js'
let card = document.getElementById("id-card") 
let closeIcon = document.getElementById("ocultarCard") 

Debug()

function pesquisarUsuario() { 
    pegarUsuario()
    textoDoInput.value = '' 
}

btn.addEventListener('click', pesquisarUsuario, false)
button.addEventListener('click', pesquisarUsuario, false)

function apagarCard() {
    utils.ocultarCard()
}

closeIcon.addEventListener('click', apagarCard, false)
// card.style.display = 'none' 
// closeIcon.style.display = 'none' 
