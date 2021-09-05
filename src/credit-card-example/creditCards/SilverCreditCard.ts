import { OfferVisitor } from "../offers/OfferVisitor";
import { CreditCard } from "./CreditCard";

export class SilverCreditCard implements CreditCard {
  getName() {
    return "silver";
  }

  accept(v: OfferVisitor) {
    v.visitSilverCreditCard(this);
  }
}
