let addressCard = document.getElementById("address-id")
let sobreCard = document.getElementById("sobre-id")
let companyCard = document.getElementById("company-id")
let nameCard = document.getElementById("name-usuario")
import dados from '../data/index.js'
// import utils from './exibirEsconderCard.js'

function pegarDados() {    
    let resultadoPesquisado = document.getElementById("id-pesquisa").value 
    for (let usuario of dados) {
        if(usuario.id == resultadoPesquisado){
            sobreDataCard(usuario, sobreCard)        
            companyDataCard(usuario, companyCard)        
            addressDataCard(usuario, addressCard)        
            nameDataCard(usuario, nameCard)        
        }
    }   
}

function criarElemento() {
   const newElement = document.createElement('h4') 
   return newElement
}


function sobreDataCard(data, card) {
    const id = criarElemento()
    const nome = criarElemento()
    const nomeUsuario = criarElemento()
    const email = criarElemento()
    const phone = criarElemento()
    const website = criarElemento()

    id.textContent = `Id: ${data.id}`
    nome.textContent = `Name: ${data.name}`
    nomeUsuario.textContent = `User: ${data.username}`
    email.textContent = `Email: ${data.email}`
    phone.textContent = `Phone: ${data.phone}`
    website.textContent = `Website: ${data.website}`

    card.appendChild(id)
    card.appendChild(nome)
    card.appendChild(nomeUsuario)
    card.appendChild(email)
    card.appendChild(phone)
    card.appendChild(website)
} 


function companyDataCard(data, card) {
    const name = criarElemento()
    const catchPhrase = criarElemento()
    const bs = criarElemento()

    name.textContent = `Name: ${data.company.name}`
    catchPhrase.textContent = `CatchPhrase: ${data.company.catchPhrase}`
    bs.textContent = `Bs: ${data.company.bs}`

    card.appendChild(name)
    card.appendChild(catchPhrase)
    card.appendChild(bs)
}


function addressDataCard(data, card) {
    const street = criarElemento()
    const suite = criarElemento()
    const city = criarElemento()
    const zipcode = criarElemento()
    const geo = criarElemento()
    const lat = criarElemento()
    const lng = criarElemento()

    street.textContent = `Street: ${data.address.street}`
    suite.textContent = `Suite: ${data.address.suite}`
    city.textContent = `City: ${data.address.city}`
    zipcode.textContent = `Zipcode: ${data.address.zipcode}`
    // geo.textContent = `Geo {} ${data.address.geo}`
    lat.textContent = `Lat: ${data.address.geo.lat}`
    lng.textContent = `Ing: ${data.address.geo.lng}`

    card.appendChild(street)
    card.appendChild(suite)
    card.appendChild(city)
    card.appendChild(zipcode)
    // card.appendChild(geo)
    card.appendChild(lat)
    card.appendChild(lng)
}

function nameDataCard(data, card) {
    const name = criarElemento()

    name.textContent = data.name

    card.appendChild(name)
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