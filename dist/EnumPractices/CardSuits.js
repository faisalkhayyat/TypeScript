"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateCard = exports.GetRandomCardSuit = exports.GenerateRandomNumber = void 0;
var Suits;
(function (Suits) {
    Suits["HEARTS"] = "red";
    Suits["DIAMONDS"] = "red";
    Suits["CLUBS"] = "black";
    Suits["SPADES"] = "black";
})(Suits || (Suits = {}));
function GenerateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.GenerateRandomNumber = GenerateRandomNumber;
function GetRandomCardSuit(suit) {
    console.log(`Card Suit: ${suit}, Card Color: ${Suits.HEARTS}`);
}
exports.GetRandomCardSuit = GetRandomCardSuit;
function GenerateCard(cardNumber, cardSuit) {
    console.log(`Card Number: ${cardNumber}, Card Suit: ${cardSuit}, Card Color: ${Suits}`);
}
exports.GenerateCard = GenerateCard;
let cardNumber = GenerateRandomNumber(1, 13);
let cardSuitIndex = GenerateRandomNumber(0, 3);
let cardSuit = Suits;
console.log(Suits);
GenerateCard(cardNumber, cardSuit.CLUBS);
//# sourceMappingURL=CardSuits.js.map