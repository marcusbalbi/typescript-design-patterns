import { ClothingTypes } from "./Clothing";
import { ClothingPriceDecorator } from "./ClothingPriceDecorator";

export class TrousersDiscountDecorator extends ClothingPriceDecorator {
  getPrice(): number {
    if (this.clothing.getType() === ClothingTypes.TROUSERS) {
      return this.clothing.getPrice() - this.clothing.getPrice() * 0.1;
    }
    return this.clothing.getPrice();
  }
}
