let addressCard = document.getElementById("address-id")
let sobreCard = document.getElementById("sobre-id")
let companyCard = document.getElementById("company-id")
let nameCard = document.getElementById("name-usuario")
import dados from '../data/index.js'
import getUsers from './request.js'
// import utils from './exibirEsconderCard.js'

const getUserData = async(f) => {
    let data = await f;
    console.log(data)

    let resultadoPesquisado = document.getElementById("id-pesquisa").value 
    for (let usuario of data) {
        if(usuario.id == resultadoPesquisado){
            sobreDataCard(usuario, sobreCard)        
            companyDataCard(usuario, companyCard)        
            addressDataCard(usuario, addressCard)        
            nameDataCard(usuario, nameCard)        
        }
    } 
}

getUserData(getUsers('https:jsonplaceholder.typicode.com/users/1'))

// function pegarDados() {    
     
// }

function criarElemento() {
   const newElement = document.createElement('h4') 
   return newElement
}

function apagarElementoFilho(elemento){
   let qntFilho = elemento.childElementCount
   let tipoFilho = elemento.children

   console.log(tipoFilho)

    if (qntFilho > 0){
        elemento.removeChild(tipoFilho[0])
    }
}

function apagarElementos(elemento){

    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild)
    }
}

function sobreDataCard(data, card) {
    const id = criarElemento()
    const nome = criarElemento()
    const nomeUsuario = criarElemento()
    const email = criarElemento()
    const phone = criarElemento()
    const website = criarElemento()

    apagarElementos(sobreCard)

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

    apagarElementos(companyCard)

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

    apagarElementos(addressCard)

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
    apagarElementoFilho(nameCard)

    name.textContent = data.name
    card.appendChild(name)
    
}

export default getUserData