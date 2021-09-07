export interface Attribute {
  key: string;
  value: string;
}
export class Tag {
  private content = "";
  constructor(
    private name: string,
    private attributes: Array<Attribute> | null = null,
    private children: Array<Tag> | null = null,
  ) {
    if (!this.name) {
      throw new Error(`a Tag should have a name`);
    }
  }

  setContent(content: string): void {
    if (this.children && this.children.length > 0) {
      throw new Error("Content and Children cannot be used together");
    }
    this.content = content;
  }

  toString(): string {
    let attributes = "";
    if (this.attributes && this.attributes.length > 0) {
      attributes = this.attributes
        .map((attr) => {
          return `${attr.key}="${attr.value}"`;
        })
        .join(" ");
    }
    let children = "";
    if (this.children && this.children.length > 0) {
      children = this.children
        .map((tagChildren) => tagChildren.toString())
        .join("");
    }

    return `<${this.name} ${attributes}>${children || this.content}</${
      this.name
    }>`;
  }
}
