let el = document.getElementById('stav-hry');

let turned = 0;
let cardTurn1
let cardTurn2
let Pairs = 0

const cardImageSources = [
    'Images/bedrock.png',
    'Images/bee_nest_front_honey.png',
    'Images/cactus_side.png',
    'Images/carved_pumpkin.png',
    'Images/cobblestone.png',
    'Images/crafting_table.png',
    'Images/diamond_ore.png',
    'Images/dirt.png',
    'Images/gold_block.png',
    'Images/nether_quartz_ore.png',
    'Images/oak_planks.png',
    'Images/On_Furnace.png',
    'Images/piston_side.png',
    'Images/prismarine_bricks.png',
    'Images/red_mushroom_block.png',

    'Images/bedrock.png',
    'Images/bee_nest_front_honey.png',
    'Images/cactus_side.png',
    'Images/carved_pumpkin.png',
    'Images/cobblestone.png',
    'Images/crafting_table.png',
    'Images/diamond_ore.png',
    'Images/dirt.png',
    'Images/gold_block.png',
    'Images/nether_quartz_ore.png',
    'Images/oak_planks.png',
    'Images/On_Furnace.png',
    'Images/piston_side.png',
    'Images/prismarine_bricks.png',
    'Images/red_mushroom_block.png',
];

//Randomizace listu
const newArray = cardImageSources 
for (let i = newArray.length - 1; i > 0; i--) {
    
    const j = Math.floor(Math.random() * (i + 1));
    
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
}



// Prirazeni obrazku k id
const cardImageMap = {};
for (let i = 0; i < cardImageSources.length; i++) {
    const cardId = `card-${i + 1}`;
    cardImageMap[cardId] = newArray[i];
}
el.innerHTML = "Nalezeny dvojice: " + Pairs;




//Zjisteni predni casti karty
function clickCard(card) {

    const imageSrc = cardImageMap[card.id];
    card.innerHTML = `<img src="${imageSrc}">`;    
    Otocit(card);
}


//Mechanismus otaceni a prirazeni otocenych karet
function Otocit(card) {
    
    if (card == cardTurn1 || card == cardTurn2) { return; }
    if (turned >= 2) { resetTurnedCards(); }


    if (turned < 2) {
        turned++;
        if (turned === 1) {
            cardTurn1 = card;
        } else if (turned === 2) {
            cardTurn2 = card;
            Match()
        }
    }
    el.innerHTML = "Nalezeny dvojice: " + Pairs;
    if(Pairs == cardImageSources.length/2){el.innerHTML = "Dobra prace!"}
}

// Zkouska podobnosti
function Match() {
    let img1 = cardTurn1.querySelector('img');
    let img2 = cardTurn2.querySelector('img');

    if (img1.src === img2.src) {
        cardTurn1.style.visibility = 'hidden';
        cardTurn1.style.pointerEvents = 'none';
        cardTurn2.style.visibility = 'hidden';
        cardTurn2.style.pointerEvents = 'none';
        Pairs++
    }
    
}


// reset karet na zadní stranu
function resetTurnedCards() {

    cardTurn1.innerHTML = '<img src="Images/end_portal_frame_top.png">';
    cardTurn2.innerHTML = '<img src="Images/end_portal_frame_top.png">';
    turned = 0;
    cardTurn1 = null;
    cardTurn2 = null;
}

