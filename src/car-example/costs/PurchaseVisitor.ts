import { BMWCar } from "../cars/BMWCar";
import { BugattiCar } from "../cars/BugattiCar";
import { MercedesCar } from "../cars/MercedesCar";
import { CostsVisitor } from "./CostsVisitor";

export class PurchaseVisitor implements CostsVisitor {
  maxAffordablePrice: number;
  constructor(maxPrice: number) {
    this.maxAffordablePrice = maxPrice;
  }

  visitBMWCar(v: BMWCar) {
    const cost = v.getPrice();
    if (cost > this.maxAffordablePrice) {
      console.log("Cannot buy BMW Car");
      return;
    }
    console.log("Purchased BMW");
  }

  visitMercedesCar(v: MercedesCar) {
    const cost = v.getPrice();
    if (cost > this.maxAffordablePrice) {
      console.log("Cannot buy Mercedes Car");
      return;
    }
    console.log("Purchased Mercedes");
  }

  visitBugattiCar(v: BugattiCar) {
    const cost = v.getPrice();
    if (cost > this.maxAffordablePrice) {
      console.log("Cannot buy Bugatti Car");
      return;
    }
    console.log("Purchased Bugatti");
  }
}
