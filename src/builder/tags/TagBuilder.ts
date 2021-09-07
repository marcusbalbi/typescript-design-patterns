import { Attribute, Tag } from "./Tag";

interface TagBuilderInterface {
  setName(name: string): TagBuilderInterface;
  setContent(content: string): TagBuilderInterface;
  addAttribute(key: string, value: string): TagBuilderInterface;
  addChildren(child: Tag): TagBuilderInterface;
  build(): Tag;
}

export class TagBuilder implements TagBuilderInterface {
  protected tagName = "";
  protected content = "";
  protected attributes: Array<Attribute> = [];
  protected children: Array<Tag> = [];
  setName(name: string): TagBuilder {
    this.tagName = name;
    return this;
  }
  setContent(content: string): TagBuilder {
    this.content = content;
    return this;
  }
  addAttribute(key: string, value: string): TagBuilder {
    this.attributes.push({ key, value });
    return this;
  }
  addChildren(child: Tag): TagBuilder {
    this.children.push(child);
    return this;
  }
  build(): Tag {
    const tag = new Tag(this.tagName, this.attributes, this.children);

    if (this.content) {
      tag.setContent(this.content);
    }

    return tag;
  }
}

export class TagBuilderA extends TagBuilder {
  constructor() {
    super();
    this.tagName = "a";
  }

  setHref(url: string): TagBuilderA {
    this.addAttribute("href", url);
    return this;
  }
}
