"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateCard = exports.GetRandomCardSuit = exports.GenerateRandomNumber = exports.Suits = void 0;
var Suits;
(function (Suits) {
    Suits["HEARTS"] = "red";
    Suits["DIAMONDS"] = "red";
    Suits["CLUBS"] = "black";
    Suits["SPADES"] = "black";
})(Suits || (exports.Suits = Suits = {}));
function GenerateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
exports.GenerateRandomNumber = GenerateRandomNumber;
function GetRandomCardSuit(suit) {
    console.log("Card Suit: ".concat(suit, ", Card Color: ").concat(Suits[suit]));
}
exports.GetRandomCardSuit = GetRandomCardSuit;
function GenerateCard(cardNumber, cardSuit) {
    console.log("Card Number: ".concat(cardNumber, ", Card Suit: ").concat(cardSuit, ", Card Color: ").concat(Suits[cardSuit]));
}
exports.GenerateCard = GenerateCard;
var cardNumber = GenerateRandomNumber(1, 13);
var cardSuitIndex = GenerateRandomNumber(0, 3);
var cardSuit = Suits[cardSuitIndex];
console.log(Suits["DIAMONDS".toUpperCase()]);
GenerateCard(cardNumber, cardSuit);
