import dados from '../data/index.js'
// let valorPesquisado = document.getElementById("id-pesquisa").value 

function pegarUsuario() {    
    let valorPesquisado = document.getElementById("id-pesquisa").value 
   for (let usuario of dados) {
        if(usuario.id == valorPesquisado){
            console.log(usuario)           
        }

    }
    
}

export default pegarUsuario