import { CostsVisitor } from "../costs/CostsVisitor";
import { Car } from "./Car";

export class MercedesCar implements Car {
  getPrice() {
    return 5;
  }

  accept(v: CostsVisitor) {
    return v.visitMercedesCar(this);
  }
}
