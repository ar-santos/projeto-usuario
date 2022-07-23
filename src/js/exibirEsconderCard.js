let card = document.getElementById("id-card") 
let closeIcon = document.getElementById("ocultarCard") 

function ocultarCard() {
   if (card.style.display == 'none') {
      card.style.display = 'block';
      closeIcon.style.display = 'block';
   } else { 
   card.style.display = 'none' 
   closeIcon.style.display = 'none' 
   } 
}

function exibirCard() {

}

const utils=  {
   ocultarCard,
   exibirCard,
}

export default utils 
