import MoveInterface from "./MoveInterface";

export default class WheelChair implements MoveInterface {
  move(): void {
    console.log(`I am using a wheelchair to move!`);
  }
}
