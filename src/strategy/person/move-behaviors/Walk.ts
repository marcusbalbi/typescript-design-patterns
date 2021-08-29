import MoveInterface from "./MoveInterface";

export default class Walk implements MoveInterface {
  move(): void {
    console.log(`I am walking!`);
  }
}
