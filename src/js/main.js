let btn = document.getElementById("id-search") // Trocar variavel btn por pesquisarBtn
let button = document.getElementById("primeiro-button") // Trocar nome do icone lupa para pesquisaUsuarioIcon 
let textoDoInput = document.getElementById("id-pesquisa")
import pegarUsuario from './usuario.js'
import utils from './exibirEsconderCard.js'
import getUsers from './request.js'
import getUserData from './pegarDados.js'
let card = document.getElementById("id-card") 
let closeIcon = document.getElementById("ocultarCard") 


// let url = 'https:jsonplaceholder.typicode.com/users'

// (async () => {
//     let data = await getUsers(url);
//     console.log(data)


// })

function pesquisarUsuario() { 
    pegarUsuario()
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






