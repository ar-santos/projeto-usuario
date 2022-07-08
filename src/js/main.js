let btn = document.getElementById("id-search") 
let closeCard = document.getElementById("ocultarCard") 
let button = document.getElementById("primeiro-button")
let textoDoInput = document.getElementById("id-pesquisa")
import pegarUsuario from './usuario.js'
import ocultarCard from './exibirEsconderCard.js'

function pegarValue() {    
    pegarUsuario()
    textoDoInput.value =''  
    // ocultarCard()  
}

btn.addEventListener('click', pegarValue, false)
button.addEventListener('click', pegarValue, false)

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


