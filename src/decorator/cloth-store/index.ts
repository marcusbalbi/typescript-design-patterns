import { Clothing, ClothingTypes } from "./Clothing";
import { Plus50reaisDIscountDecorator } from "./Plus50reaisDIscountDecorator";
import { TrousersDiscountDecorator } from "./TrousersDiscountDecorator";

const pants = new Clothing({
  name: "Black pants",
  price: 99.99,
  type: ClothingTypes.TROUSERS,
});

const pantsWithDiscount = new TrousersDiscountDecorator(pants);

console.log(new Plus50reaisDIscountDecorator(pantsWithDiscount).getPrice());
