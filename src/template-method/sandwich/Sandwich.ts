export abstract class Sanduiche {

  /**
   * @return  Sanduiche
   */
  protected abstract addMainIngredient(): Sanduiche;

  public prepare(): Sanduiche {
    return this.openBread().addLettuce().addMainIngredient().addSauce();
  }

  protected openBread(): Sanduiche {
    console.log("Opening the Bread");

    return this;
  }

  protected addLettuce(): Sanduiche {
    console.log("Add some Alface");

    return this;
  }

  protected addSauce(): Sanduiche {
    console.log("add some Sauce!");

    return this;
  }
}
