import { OfferVisitor } from "../offers/OfferVisitor";
import { CreditCard } from "./CreditCard";

export class GoldCreditCard implements CreditCard {
  getName() {
    return "gold";
  }

  accept(v: OfferVisitor) {
    v.visitGoldCreditCard(this);
  }
}
