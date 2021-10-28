import { Sanduiche } from "./Sandwich";

export class VegetarianSandwich extends Sanduiche {
  protected addMainIngredient(): Sanduiche {
    console.log("add Soy Meat");

    return this;
  }
}
