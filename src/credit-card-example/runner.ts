/*
video: https://www.youtube.com/watch?v=TeZqKnC2gvA
*/

import { BronzeCreditCard } from "./creditCards/BronzeCreditCard";
import { GoldCreditCard } from "./creditCards/GoldCreditCard";
import { SilverCreditCard } from "./creditCards/SilverCreditCard";
import { GasOfferVisitor } from "./offers/GasOfferVisitor";
import { HotelOfferVisitor } from "./offers/HotelOfferVisitor";

const hotelVisitor = new HotelOfferVisitor();
const gasVisitor = new GasOfferVisitor();

const bronzeCreditCard = new BronzeCreditCard();
const silverCreditCard = new SilverCreditCard();
const goldCreditCard = new GoldCreditCard();

// when interaction with hotel
bronzeCreditCard.accept(hotelVisitor);
silverCreditCard.accept(hotelVisitor);
goldCreditCard.accept(hotelVisitor);

// when interaction with gas
bronzeCreditCard.accept(gasVisitor);
silverCreditCard.accept(gasVisitor);
goldCreditCard.accept(gasVisitor);
