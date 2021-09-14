import { ClothingPriceDecorator } from "./ClothingPriceDecorator";

export class Plus50reaisDIscountDecorator extends ClothingPriceDecorator {
  getPrice(): number {
    if (this.clothing.getPrice() > 50) {
      return this.clothing.getPrice() - 2;
    }
    return this.clothing.getPrice();
  }
}
