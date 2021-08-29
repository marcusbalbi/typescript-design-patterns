import MoveInterface from "./move-behaviors/MoveInterface";

export class Person {
  private moveBehavior: MoveInterface | null = null;

  constructor(private name: string, private age: number) {}

  greetings(): void {
    console.log(`I am ${this.name} and I have ${this.age} years old`);
  }

  move(): void {
    if (!this.moveBehavior) {
      throw new Error(`No Behavior for moving was set to ${this.name}`);
    }
    this.moveBehavior.move();
  }

  setMoveBehavior(moveBehavior: MoveInterface): void {
    this.moveBehavior = moveBehavior;
  }
}
