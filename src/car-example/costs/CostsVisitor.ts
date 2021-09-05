import { BMWCar } from "../cars/BMWCar";
import { BugattiCar } from "../cars/BugattiCar";
import { MercedesCar } from "../cars/MercedesCar";

export interface CostsVisitor {
  visitBMWCar(v: BMWCar): void;
  visitBugattiCar(v: BugattiCar): void;
  visitMercedesCar(v: MercedesCar): void;
}
