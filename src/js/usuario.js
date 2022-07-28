import dados from '../data/index.js'
import utils from './exibirEsconderCard.js'
let btn = document.getElementById("id-search") 

function pegarUsuario() {    
    let valorPesquisado = document.getElementById("id-pesquisa").value 
   for (let usuario of dados) {
        if(usuario.id == valorPesquisado){
            console.log(usuario)      
            utils.exibirCard()             
        }
    }    
}
export default pegarUsuario