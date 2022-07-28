let card = document.getElementById("id-card") 
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
   if (card.style.display == 'block') {
      card.style.display = 'none';
      closeIcon.style.display = 'none';
   } else { 
   card.style.display = 'none' 
   closeIcon.style.display = 'none' 
   }
}

const utils =  {
   ocultarCard,
   exibirCard,
}

export default utils 
