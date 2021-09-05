import { BMWCar } from "../cars/BMWCar";
import { BugattiCar } from "../cars/BugattiCar";
import { MercedesCar } from "../cars/MercedesCar";
import { CostsVisitor } from "./CostsVisitor";

export class RepairCostVisitor implements CostsVisitor {
  visitBMWCar(v: BMWCar) {
    console.log(v.getPrice());
  }

  visitBugattiCar(v: BugattiCar) {
    console.log(v.getPrice());
  }

  visitMercedesCar(v: MercedesCar) {
    console.log(v.getPrice());
  }
}
