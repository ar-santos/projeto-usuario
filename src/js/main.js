let btn = document.getElementById("id-search") // Trocar variavel btn por pesquisarBtn
let button = document.getElementById("primeiro-button") // Trocar nome do icone lupa para pesquisaUsuarioIcon 
let textoDoInput = document.getElementById("id-pesquisa")
import utils from './exibirEsconderCard.js'
import getUserData from './pegarDados.js'
let closeIcon = document.getElementById("ocultarCard") 

function pesquisarUsuario() {     
    getUserData()
    textoDoInput.value = '' 
}

btn.addEventListener('click', pesquisarUsuario, false)
button.addEventListener('click', pesquisarUsuario, false)

textoDoInput.addEventListener('keyup', (e)=> {
    (e.key === 'Enter' ? pesquisarUsuario(): null) 
})

function apagarCard() {
    utils.ocultarCard()
    utils.exibirForm()
}

closeIcon.addEventListener('click', apagarCard, false)






