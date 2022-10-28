let card = document.getElementById("id-card") 
let form = document.getElementById("esconder-form")
let closeIcon = document.getElementById("ocultarCard") 
let campoObrigatorio= document.getElementById("campo-obrigatorio") 
let addressId = document.getElementById("address-id") 
let sobreId = document.getElementById("sobre-id") 
let companyId = document.getElementById("company-id") 

function exibirCard() {
   if (card.style.display == 'block') {
      card.style.display = 'block';
      closeIcon.style.display = 'block';
   } else { 
   card.style.display = 'block' 
   closeIcon.style.display = 'block' 
   } 
}

function ocultarCard() {
   if (card.style.display == 'none') {
      card.style.display = 'none';
      closeIcon.style.display = 'none';
   } else { 
   card.style.display = 'none' 
   closeIcon.style.display = 'none' 
   }
}

function ocultarForm() {
   if (form.style.display == 'none') {
      form.style.display = 'none';
   } else { 
   form.style.display = 'none'  
   } 
}

function exibirForm() {
   if (closeIcon.style.display == 'none') {
      form.style.display = 'block';
   } else { 
   form.style.display = 'block'  
   } 
}

function campo() {
   if (campoObrigatorio.style.display == 'none') {
      campoObrigatorio.style.display = 'block';
   } else { 
      campoObrigatorio.style.display = 'block'  
   } 
}

function OcultarCampo() {
   if (campoObrigatorio.style.display == 'block') {
      campoObrigatorio.style.display = 'none';
   } else { 
      campoObrigatorio.style.display = 'none'  
   } 
}

function exibirAddress() {
   if (addressId.style.display == 'block') {
      addressId.style.display = 'block';
      sobreId.style.display = 'none';
      companyId.style.display = 'none';
   }else { 
      addressId.style.display = 'block'  
      sobreId.style.display = 'none';
      companyId.style.display = 'none';
   } 
}

function exibirSobre() {
   if (sobreId.style.display == 'block') {
      sobreId.style.display = 'block';
      addressId.style.display = 'none';
      companyId.style.display = 'none';
   }else { 
      sobreId.style.display = 'block'  
      addressId.style.display = 'none';
      companyId.style.display = 'none';
   } 
}

function exibirCompany() {
   if (companyId.style.display == 'block') {
      companyId.style.display = 'block';
      sobreId.style.display = 'none';
      addressId.style.display = 'none';
   }else { 
      companyId.style.display = 'block'  
      sobreId.style.display = 'none';
      addressId.style.display = 'none';
   } 
}

const utils =  {
   ocultarCard,
   exibirCard,
   ocultarForm,
   exibirForm,
   campo,
   OcultarCampo,
   exibirAddress,
   exibirSobre,
   exibirCompany,
}

export default utils 
