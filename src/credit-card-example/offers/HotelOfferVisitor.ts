import { BronzeCreditCard } from "../creditCards/BronzeCreditCard";
import { GoldCreditCard } from "../creditCards/GoldCreditCard";
import { SilverCreditCard } from "../creditCards/SilverCreditCard";
import { OfferVisitor } from "./OfferVisitor";

export class HotelOfferVisitor implements OfferVisitor {
  visitBronzeCreditCard(bronze: BronzeCreditCard) {
    bronze.getName();
    console.log(
      "we are computing the cashback for a bronze card buying hotel."
    );
  }

  visitSilverCreditCard(silver: SilverCreditCard) {
    silver.getName();
    console.log(
      "we are computing the cashback for a silver card buying hotel."
    );
  }

  visitGoldCreditCard(gold: GoldCreditCard) {
    gold.getName();
    console.log("we are computing the cashback for a gold card buying hotel.");
  }
}
