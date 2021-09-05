import { OfferVisitor } from "../offers/OfferVisitor";
import { CreditCard } from "./CreditCard";

export class BronzeCreditCard implements CreditCard {
  getName() {
    return "bronze";
  }

  accept(v: OfferVisitor) {
    v.visitBronzeCreditCard(this);
  }
}
