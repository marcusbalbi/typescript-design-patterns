import { Tag } from "./Tag";
import { TagBuilder, TagBuilderA } from "./TagBuilder";

// const tag = new Tag("a", [
//   { key: "href", value: "http://www.google.com" },
//   { key: "target", value: "_blank" },
// ]);

// tag.setContent("Click here!");

// console.log(tag.toString());

const tagBuilder = new TagBuilderA();

const tag = tagBuilder
  .setHref("http://www.google.com")
  .addAttribute("target", "_blank")
  .setContent("Click here!")
  .build();

console.log(tag.toString());
