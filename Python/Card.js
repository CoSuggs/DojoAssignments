var deck = [];
var cards = [];
var convertedcards = [];
var kinds = [];
var phase = 1;
var displaycard = [];
var options = 0;
var endgame = false;

// Fill Deck //
for(i = 0; i < 52; i++){
    deck[deck.length] = i;          
}

// Distribute Cards //
for(i = 0; i < 7; i++){
    cards[cards.length] = Number(Math.floor(Math.random() * 52));
    if(deck.indexOf(cards[cards.length - 1]) === -1){
        cards.splice(cards.length - 1, cards.length);
        i = i - 1;
    }else{
        deck[cards[cards.length - 1]] = "|";
    }
}

// Convert Cards //
for(i = 0; i < 7; i++){
    convertedcards[i] = (cards[i] % 13) + 1;
}


// Cards Kind //
for(i = 0; i < 7; i++){
    if(cards[i] < 13){
        kinds[kinds.length] = "H";
    }else if(cards[i] < 27 && cards[i] > 12){
        kinds[kinds.length] = "C";
    }else if(cards[i] < 40 && cards[i] > 26){
        kinds[kinds.length] = "D";
    }else{
        kinds[kinds.length] = "S";
    }
}

// Card Display //
for(i = 0; i < 7; i++){
    displaycard[i] = convertedcards[i] + kinds[i];
}

// Hand Strenght //
var handstrenght = function(){
    var usedcards = [];
    var count = 0;
    var pairs = [];
    for(i = 0, a = 1; i < 7; a++){
        if(convertedcards[i] === convertedcards[a] && a < 7 && usedcards[i] != "|"){
            pairs[pairs.length] = convertedcards[i];
            usedcards[a] = "|";
        }else if(a > 6){
            i = i + 1;
            a = i;
        }
    }

    // Flush >.< //
    var flush = false;
    for(i = 0, a = 1; i < 7; i++, a++){
        if(kinds[i] === kinds[a] && kinds[i] != undefined){
            count++;
            if(a >= 6 && count >= 5){
                flush = true;
                count = 0;
            }else if(a >= 6 && count < 5){
                count = 0;
            }
        }
    }
    // Straight >.< //
    var straight = false;
    convertedcards = convertedcards.sort(function(a,b){return a-b});
    if(convertedcards[2] > 10 && convertedcards[3] > 10 && convertedcards[4] > 10){
        convertedcards[0] = 14;
        convertedcards = convertedcards.sort(function(a,b){return a-b});
    }
    alert(convertedcards);
    if(convertedcards[0] + 1 === convertedcards[1] && convertedcards[1] + 1 === convertedcards[2] && convertedcards[2] + 1 === convertedcards[3] && convertedcards[3] + 1 === convertedcards[4]){
        straight = true;
    }else if(convertedcards[1] + 1 === convertedcards[2] && convertedcards[2] + 1 === convertedcards[3] && convertedcards[3] + 1 === convertedcards[4] && convertedcards[4] + 1 === convertedcards[5]){
        straight = true;
    }else if(convertedcards[2] + 1 === convertedcards[3] && convertedcards[3] + 1 === convertedcards[4] && convertedcards[4] + 1 === convertedcards[5] && convertedcards[5] + 1 === convertedcards[6]){
        straight = true;
    }
    // Royal Flush, Straight Flush, Flush, Straight >.< //
    var royalflush = false;
    if(straight === true && flush === true && convertedcards[6] === 14){
        royalflush = true;
        alert("You have a Royal Flush");
    }
    else if(straight === true && flush === true && royalflush === false){
        alert("You have a straight flush");
    }else if(straight === true && flush === false){
        alert("You have a straight");
    }else if(straight === false && flush === true){
        alert("You have a flush");
    }
    // Full House >.< //
    if(pairs[0] === pairs[1] && pairs[1] != pairs[2] && pairs.length >= 3){
        fullhouse = true;
        alert("You have a fullhouse");
    }else if(pairs[0] != pairs[1] && pairs[1] === pairs[2] && pairs.length >= 3){
        fullhouse = true;
        alert("You have a fullhouse");
    }else if(pairs[0] != pairs[1] && pairs[1] != pairs[2] && pairs[2] === pairs[3] && pairs.length >= 3){
        fullhouse = true;
        alert("You have a fullhouse");
    }
    // Four of a kind >.< //
    else if(pairs[0] === pairs[1] && pairs[1] === pairs[2] && pairs.length > 0){
        alert("You have four of a kind");
    }
    // Three of a kind >.< //
    else if(pairs[0] === pairs[1] && flush === false && straight === false && pairs.length === 2){
        alert("You have three of a kind");
    }
    // Double Pair >.< //
    else if(pairs[0] != pairs[1] && flush === false && straight === false && pairs.length > 1){
        alert("You have a double pair");
    }
    // Pair >.< //
    else if(pairs.length === 1 && flush === false && straight === false && pairs.length === 1 ){
        alert("You have a pair");
    }
    alert(pairs);
};
while(endgame === false){
    if(phase === 1){
        options = Number(prompt("Your hand: " + displaycard[0] + " " + displaycard[1] + "\n\n" + "1. Check" + "\n" + "2. Fold"));
    }else if(phase === 2){
        options = Number(prompt("Your hand: " + displaycard[0] + " " + displaycard[1] + "\n\n" + displaycard[2] + " " + displaycard[3] + " " + displaycard[4] + "\n\n" + "1. Check" + "\n" + "2. Fold"));
    }else if(phase === 3){
        options = Number(prompt("Your hand: " + displaycard[0] + " " + displaycard[1] + "\n\n" + displaycard[2] + " " + displaycard[3] + " " + displaycard[4] + " " + displaycard[5] + "\n\n" + "1. Check" + "\n" + "2. Fold"));
    }else if(phase === 4){
        options = Number(prompt("Your hand: " + displaycard[0] + " " + displaycard[1] + "\n\n" + displaycard[2] + " " + displaycard[3] + " " + displaycard[4] + " " + displaycard[5] + " " + displaycard[6] + "\n\n" + "1. Check" + "\n" + "2. Fold"));
    }
    switch(options){
        case 1:
                if(phase === 5){
                    handstrenght();
                    endgame = true;
                }else{
                    phase++;
                }
                break;
        case 2:
                endgame = true;
                break;
        default:
                endgame = true;
                break;
    }
}
