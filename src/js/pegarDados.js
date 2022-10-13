let addressCard = document.getElementById("address-id")
let sobreCard = document.getElementById("sobre-id")
let companyCard = document.getElementById("company-id")
let nameCard = document.getElementById("name-usuario")

import utils from './exibirEsconderCard.js'
import helpers from './helpers.js'

import getUsers from './request.js'

const getUserData = async () => {

    let resultadoPesquisado = document.getElementById("id-pesquisa").value 
    let usuario = await getUsers(`https:jsonplaceholder.typicode.com/users/${resultadoPesquisado}`);
   
        if(usuario.id == resultadoPesquisado){
            helpers.sobreDataCard(usuario, sobreCard)        
            helpers.companyDataCard(usuario, companyCard)        
            helpers.addressDataCard(usuario, addressCard)        
            helpers.nameDataCard(usuario, nameCard) 
            
            utils.exibirCard()
            utils.ocultarForm() 
            utils.OcultarCampo() 
        }else{
            utils.campo()
        }        
}

// TRATAR O ERRO DA REQUISIÇÃO QUANDO FOR PESQUISADO UM uSUÁRIO NÃO EXISTENTE OU FOR FEITA UMA PESQUISA EM BRANCO
// usuário não identificado ou não existe!
// Favor digiar um código de usuário!



export default getUserData