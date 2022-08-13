let addressCard = document.getElementById("address-id")
let sobreCard = document.getElementById("sobre-id")
let companyCard = document.getElementById("company-id")
import dados from '../data/index.js'
// import utils from './exibirEsconderCard.js'

function pegarDados() {    
    let resultadoPesquisado = document.getElementById("id-pesquisa").value 
    for (let usuario of dados) {
        if(usuario.id == resultadoPesquisado){
            sobreDataCard(usuario, sobreCard)        
        }
    }   
}

function criarElemento() {
   const newElement = document.createElement('h4') 
   return newElement
}

function sobreDataCard(data, card) {
    const nome = criarElemento()
    const nomeUsuario = criarElemento()
    const email = criarElemento()

    nome.textContent = `Name: ${data.name}`
    nomeUsuario.textContent = `User: ${data.username}`
    email.textContent = `Email: ${data.email}`


    card.appendChild(nome)
    card.appendChild(nomeUsuario)
    card.appendChild(email)
} 


{/* 
    <div class="inform-sobre" id="sobre-id"> 
    <h4>Id: 1</h4>
    <h4>Name: Leanne Graham</h4>
    <h4>Username: Bret</h4>
    <h4>Email: Sincere@april.biz</h4>
    <h4>Phone: 1-770-736-8031 x56442</h4>
    <h4>Website: "hildegard.org"</h4>
    </div> 
*/}

export default pegarDados