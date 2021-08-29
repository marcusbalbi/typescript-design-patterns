import MoveInterface from "./MoveInterface";

export default class Cralw implements MoveInterface {
  move(): void {
    console.log(`I am crawling!`);
  }
}
