let card = document.getElementById("id-card") 
let closeIcon = document.getElementById("ocultarCard") 

function ocultarCard() {
   if (card.style.display == 'block') {
      card.style.display = 'none';
      closeIcon.style.display = 'none';
   } else { 
   card.style.display = 'block' 
   closeIcon.style.display = 'block' 
   }
}

export default ocultarCard 