import { Intersection } from "./intersection";
import { CycleTrafficLight } from "./cycleTrafficLight";

export class Schedule {
  intersection: Intersection;
  nbIncomingStreets: number;
  CycleTrafficLight: CycleTrafficLight[];
}
