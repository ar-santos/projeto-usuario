let pesquisarBtn = document.getElementById("id-search")
let button = document.getElementById("pesquisaUsuarioIcon") 
let textoDoInput = document.getElementById("id-pesquisa")
let addressId = document.getElementById("address") 
let sobreButton = document.getElementById("sobre-button") 
let companyId = document.getElementById("company") 
import utils from './exibirEsconderCard.js'
import getUserData from './pegarDados.js'
let closeIcon = document.getElementById("ocultarCard") 

function pesquisarUsuario() {     
    getUserData()
    textoDoInput.value = '' 
}



pesquisarBtn.addEventListener('click', pesquisarUsuario, false)
button.addEventListener('click', pesquisarUsuario, false)

textoDoInput.addEventListener('keyup', (e)=> {
    (e.key === 'Enter' ? pesquisarUsuario(): null) 
})

function apagarCard() {
    utils.ocultarCard()
    utils.exibirForm()
}

closeIcon.addEventListener('click', apagarCard, false)



function exibirConteudo() {
    utils.exibirAddress()
}

addressId.addEventListener('click', exibirConteudo, false)

function exibirConteudoSobre() {
    utils.exibirSobre()
}

sobreButton.addEventListener('click', exibirConteudoSobre, false)

function exibirConteudoCompany() {
    utils.exibirCompany()
}

companyId.addEventListener('click', exibirConteudoCompany, false)