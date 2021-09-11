import { BMWCar } from "../cars/BMWCar";
import { BugattiCar } from "../cars/BugattiCar";
import { MercedesCar } from "../cars/MercedesCar";
import { CostsVisitor } from "./CostsVisitor";

export class RepairCostVisitor implements CostsVisitor {
  maxAffordableRepairCost: number;
  constructor(maxCost: number) {
    this.maxAffordableRepairCost = maxCost;
  }

  visitBMWCar(v: BMWCar) {
    const cost = v.getPrice();
    if (cost > this.maxAffordableRepairCost) {
      console.log("Cannot repair BMW");
      return;
    }
    console.log("Repaired BMW");
  }

  visitMercedesCar(v: MercedesCar) {
    const cost = v.getPrice();
    if (cost > this.maxAffordableRepairCost) {
      console.log("Cannot repair Mercedes");
      return;
    }
    console.log("Repaired Mercedes");
  }

  visitBugattiCar(v: BugattiCar) {
    const cost = v.getPrice();
    if (cost > this.maxAffordableRepairCost) {
      console.log("Cannot repair Bugatti");
      return;
    }
    console.log("Repaired Bugatti");
  }
}
