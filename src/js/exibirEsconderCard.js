let card = document.getElementById("id-card") 
let form = document.getElementById("esconder-form")
let closeIcon = document.getElementById("ocultarCard") 

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

const utils =  {
   ocultarCard,
   exibirCard,
   ocultarForm,
   exibirForm,
}

export default utils 
