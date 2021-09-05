import { CostsVisitor } from "../costs/CostsVisitor";
import { Car } from "./Car";

export class BugattiCar implements Car {
  getPrice() {
    return 4;
  }

  accept(v: CostsVisitor) {
    return v.visitBugattiCar(this);
  }
}
