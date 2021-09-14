import { Clothing } from "./Clothing";

export abstract class ClothingPriceDecorator extends Clothing {
  protected clothing: Clothing;
  constructor(clothing: Clothing) {
    super({
      name: clothing.getName(),
      price: clothing.getPrice(),
      type: clothing.getType(),
    });
    this.clothing = clothing;
  }
}
