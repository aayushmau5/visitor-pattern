import { CostsVisitor } from "../costs/CostsVisitor";
import { Car } from "./Car";

export class BMWCar implements Car {
  getPrice() {
    return 2;
  }

  accept(v: CostsVisitor) {
    return v.visitBMWCar(this);
  }
}
