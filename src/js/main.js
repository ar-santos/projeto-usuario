let btn = document.getElementById("id-search") // Trocar variavel btn por pesquisarBtn
let closeCard = document.getElementById("ocultarCard") 
let button = document.getElementById("primeiro-button") // Trocar nome do icone lupa para pesquisaUsuarioIcon 
let textoDoInput = document.getElementById("id-pesquisa")
import pegarUsuario from './usuario.js'
import ocultarCard from './exibirEsconderCard.js'

function pesquisarUsuario() {    
    pegarUsuario()
    textoDoInput.value =''  
    // ocultarCard()  
}

btn.addEventListener('click', pesquisarUsuario, false)
button.addEventListener('click', pesquisarUsuario, false)

function cardClose() {
    ocultarCard()
    
}

closeCard.addEventListener('click', cardClose, false)

// function mostrar() {
//     if (mostrarEoculta.style.display == 'block'){
//         mostrarEoculta.style.display = 'none';
// }else { 
//     mostrarEoculta.style.display = 'block' 
// }
// }


