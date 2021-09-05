import { BMWCar } from "../cars/BMWCar";
import { BugattiCar } from "../cars/BugattiCar";
import { MercedesCar } from "../cars/MercedesCar";
import { CostsVisitor } from "./CostsVisitor";

export class PurchaseVisitor implements CostsVisitor {
  maxPrice: number;
  constructor(maxPrice: number) {
    this.maxPrice = maxPrice;
  }

  visitBMWCar(v: BMWCar) {
    const cost = v.getPrice();
    if (cost > this.maxPrice) {
      console.log("Cannot afford BMW Car.");
      return;
    }
    console.log("Purchased BMW");
  }

  visitBugattiCar(v: BugattiCar) {
    const cost = v.getPrice();
    if (cost > this.maxPrice) {
      console.log("Cannot afford Bugatti Car.");
      return;
    }
    console.log("Purchased Bugatti");
  }

  visitMercedesCar(v: MercedesCar) {
    const cost = v.getPrice();
    if (cost > this.maxPrice) {
      console.log("Cannot afford Mercedes Car.");
      return;
    }
    console.log("Purchased Mercedes");
  }
}
