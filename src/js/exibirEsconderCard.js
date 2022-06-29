let card = document.getElementById("id-card") 
let removeCard = document.getElementById("ocultarCard") 

function ocultarCard() {
         if (card.style.display == 'block'){
            card.style.display = 'none';
            removeCard.style.display = 'none';
     }else { 
        card.style.display = 'block' 
        removeCard.style.display = 'block' 
     }
     }

export default ocultarCard 