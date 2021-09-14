export enum ClothingTypes {
  TROUSERS = "TROUSERS",
  T_SHORT = "T_SHORT",
}

export interface ClothingData {
  name: string;
  type: ClothingTypes;
  price: number;
}

export class Clothing {
  protected name = "";
  protected price = 0;
  protected type: ClothingTypes;

  constructor(data: ClothingData) {
    this.price = data.price;
    this.type = data.type;
    this.name = data.name;
  }

  getPrice(): number {
    return this.price;
  }
  getType(): ClothingTypes {
    return this.type;
  }
  getName(): string {
    return this.name;
  }

  tostring(): string {
    return ``;
  }
}
