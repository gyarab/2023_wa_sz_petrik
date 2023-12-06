let el = document.getElementById('stav-hry');
let counter = 5;

let turned = 0;
let cardTurn1
let cardTurn2


function mojeFce(counter) {
    el.innerHTML = counter;
    counter--;
    if (counter > 0) {
        setTimeout(mojeFce(counter), 1000);
    }
}

mojeFce(5)

function Otocit(card) {   
    if(card == cardTurn1 || card == cardTurn2){return;}
    
    if(turned >= 2){resetTurnedCards();}
    
    
    
    
    if (turned < 2) {
        turned++;
        if (turned === 1) {
            cardTurn1 = card;
        } else if (turned === 2) {
            cardTurn2 = card;
            Match()
        }
    }

    
}

function Match()
{
    let img1 = cardTurn1.querySelector('img');
    let img2 = cardTurn2.querySelector('img');
    
    if (img1 && img2 && img1.src === img2.src) {
        cardTurn1.style.visibility = 'hidden';
        cardTurn1.style.pointerEvents = 'none';
        cardTurn2.style.visibility = 'hidden';
        cardTurn2.style.pointerEvents = 'none';
    }
    
    
}



function resetTurnedCards() {
    
    cardTurn1.innerHTML = '<img src="Images/end_portal_frame_top.png" alt="karta1">';
    cardTurn2.innerHTML = '<img src="Images/end_portal_frame_top.png" alt="karta2">';
    
    turned = 0;
    cardTurn1 = null;
    cardTurn2 = null;
    

}


el.innerHTML = "Nová hra";

function clickCard(card) {
    let imageSrc;

    // Set image source based on card ID or other criteria
    if (card.id === 'card-1') {
        imageSrc = 'Images/bedrock.png';
    } else if (card.id === 'card-2') {
        imageSrc = 'Images/bee_nest_front_honey.png';
    } else if (card.id === 'card-3') {
        imageSrc = 'Images/bee_nest_front_honey.png';
    }

    card.innerHTML = `<img src="${imageSrc}" alt="${card.id}">`;
    Otocit(card);
}

