import { CostsVisitor } from "../costs/CostsVisitor";

export interface Car {
  getPrice(): number;
  accept(v: CostsVisitor): void;
}
