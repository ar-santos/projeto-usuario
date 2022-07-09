import dados from '../data/index.js'
import ocultarCard from './exibirEsconderCard.js'
let btn = document.getElementById("id-search") 
// let valorPesquisado = document.getElementById("id-pesquisa").value 

function pegarUsuario() {    
    let valorPesquisado = document.getElementById("id-pesquisa").value 
   for (let usuario of dados) {
        if(usuario.id == valorPesquisado){
            console.log(usuario)      
            ocultarCard()              
        }
    }
    
}
export default pegarUsuario