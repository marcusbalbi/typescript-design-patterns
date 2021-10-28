import { Sanduiche } from "./Sandwich";

export class ChickenSandwich extends Sanduiche {
  protected addMainIngredient(): Sanduiche {
    console.log("add chicken fillet");

    return this;
  }
}
