
let btn = document.getElementById("id-search") 
let textoDoInput = document.getElementById("id-pesquisa")
import pegarUsuario from './usuario.js'

function pegarValue() {    
    pegarUsuario()
    textoDoInput.value =''    
}

btn.addEventListener('click', pegarValue, false)

// function mostrar() {
//     if (mostrarEoculta.style.display == 'block'){
//         mostrarEoculta.style.display = 'none';
// }else { 
//     mostrarEoculta.style.display = 'block' 
// }
// }


