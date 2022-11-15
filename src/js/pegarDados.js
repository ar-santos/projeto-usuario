let addressCard = document.getElementById("address-id")
let sobreCard = document.getElementById("sobre-id")
let companyCard = document.getElementById("company-id")
let nameCard = document.getElementById("name-usuario")

import utils from './exibirEsconderCard.js'
import helpers from './helpers.js'

import getUsers from './request.js'

const getUserData = async () => {

    try {
        let resultadoPesquisado = document.getElementById("id-pesquisa").value
        let usuario = await getUsers(`https:jsonplaceholder.typicode.com/users/${resultadoPesquisado}`);
        console.log(usuario)
        console.log(resultadoPesquisado)
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

    } catch (error) {
        console.log(error)

    }

}

export default getUserData