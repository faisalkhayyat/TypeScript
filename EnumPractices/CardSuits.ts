export enum Suits{
    HEARTS = "red",
    DIAMONDS = "red",
    CLUBS = "black",
    SPADES = "black"
}

export function GenerateRandomNumber(min: number, max: number): number{
    return Math.floor(Math.random() * (max - min)) + min;
}

export function GetRandomCardSuit(suit: Suits){
    console.log(`Card Suit: ${suit}, Card Color: ${Suits[suit]}`)
}

export function GenerateCard(cardNumber: number, cardSuit: Suits){
    console.log(`Card Number: ${cardNumber}, Card Suit: ${cardSuit}, Card Color: ${Suits[cardSuit]}`);
}

let cardNumber = GenerateRandomNumber(1, 13);
let cardSuitIndex = GenerateRandomNumber(0, 3);
let cardSuit =  Suits[cardSuitIndex];
console.log(Suits["DIAMONDS".toUpperCase()]);
GenerateCard(cardNumber, cardSuit)