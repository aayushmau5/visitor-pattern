import { OfferVisitor } from "../offers/OfferVisitor";

export interface CreditCard {
  getName(): string;
  accept(v: OfferVisitor): void;
}
