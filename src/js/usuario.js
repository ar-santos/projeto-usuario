import modulePesquisar from "./main.js"
import dados from "../data/index.js"
let mostrarEoculta = document.getElementById("less")
let textoDoInput = document.getElementById("id-pesquisa")


const {btnSearch, pesquisa} = modulePesquisar

function mostrar() {
    if (mostrarEoculta.style.display == 'block'){
        mostrarEoculta.style.display = 'none';
}else { 
    mostrarEoculta.style.display = 'block' 
}
}

function pegarValue() {
    console.log(textoDoInput.value)
}

const result = dados.find(pegarValue)



// const {dadosUsuarios, usuario} = dados

// const procurarUsuario = (pesquisa) => {
//     for (let usuario of pesquisa){for (let usuario of lista){
//         console.log('O nome do usuario e ' + usuario.name)
//     }
// }
// const pesquisar = procurarUsuario(dadosUsuarios,usuario)

pesquisa(btnSearch,result)