import { BronzeCreditCard } from "../creditCards/BronzeCreditCard";
import { GoldCreditCard } from "../creditCards/GoldCreditCard";
import { SilverCreditCard } from "../creditCards/SilverCreditCard";

export interface OfferVisitor {
  visitBronzeCreditCard(bronze: BronzeCreditCard): void;
  visitSilverCreditCard(bronze: SilverCreditCard): void;
  visitGoldCreditCard(bronze: GoldCreditCard): void;
}
