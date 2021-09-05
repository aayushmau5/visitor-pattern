import { BMWCar } from "./cars/BMWCar";
import { BugattiCar } from "./cars/BugattiCar";
import { MercedesCar } from "./cars/MercedesCar";
import { RepairCostVisitor } from "./costs/RepairCostVisitor";
import { PurchaseVisitor } from "./costs/PurchaseVisitor";

const purchaseVisitor = new PurchaseVisitor(2);
const repairCostVisitor = new RepairCostVisitor();

const bmwCar = new BMWCar();
const bugattiCar = new BugattiCar();
const mercedesCar = new MercedesCar();

// when purchasing a car
bmwCar.accept(purchaseVisitor);
bugattiCar.accept(purchaseVisitor);
mercedesCar.accept(purchaseVisitor);

// when repairing a car
bmwCar.accept(repairCostVisitor);
bugattiCar.accept(repairCostVisitor);
mercedesCar.accept(repairCostVisitor);
