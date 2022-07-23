let btn = document.getElementById("id-search") // Trocar variavel btn por pesquisarBtn
let button = document.getElementById("primeiro-button") // Trocar nome do icone lupa para pesquisaUsuarioIcon 
let textoDoInput = document.getElementById("id-pesquisa")
import pegarUsuario from './usuario.js'

let card = document.getElementById("id-card") 
let closeIcon = document.getElementById("ocultarCard") 

function pesquisarUsuario() { 
     pegarUsuario()
    textoDoInput.value = '' 

}

btn.addEventListener('click', pesquisarUsuario, false)
button.addEventListener('click', pesquisarUsuario, false)

card.style.display = 'none' 
closeIcon.style.display = 'none' 
