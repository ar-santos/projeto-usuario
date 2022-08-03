let addressCard = document.getElementById("address-id")
let sobreCard = document.getElementById("sobre-id")
let companyCard = document.getElementById("company-id")
import dados from '../data/index.js'
import utils from './exibirEsconderCard.js'

function pegarDados() {
    let resultadoPesquisado = document.getElementById("id-pesquisa").value 
    for (let usuario of dados) {
        if(usuario.id == resultadoPesquisado){
            addressCard.innerHTML = usuario.address
            sobreCard.innerHTML = usuario.name
            companyCard.innerHTML = usuario.company
            utils.exibirCard()             
        }
    }   
}

export default pegarDados