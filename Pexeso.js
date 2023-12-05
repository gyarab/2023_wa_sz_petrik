let el = document.getElementById('stav-hry');
let counter = 5;

function mojeFce(counter) {
    el.innerHTML = counter;
    counter--;
    if (counter > 0) {
        setTimeout(mojeFce(counter), 1000);
    }
}



el.innerHTML = "Nová hra";


let card1 = document.getElementById('card-1');
let card2 = document.getElementById('card-2');
let card3 = document.getElementById('card-3');

function clickCard1() {
    card1.innerHTML = '<img src="Images/bedrock.png" alt="karta1">'
    mojeFce(5)
}

function clickCard2() {
    card2.innerHTML = '<img src="Images/bee_nest_front_honey.png" alt="karta2">'
    mojeFce(5)
}

function clickCard3() {
    card3.innerHTML = '<img src="Images/bee_nest_front_honey.png" alt="karta3">'
    mojeFce(5)
}
