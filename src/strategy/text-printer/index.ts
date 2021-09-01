import faker from "faker";
import { LineBreakerCountWordsStrategy } from "./line-break/LineBreakerCountWordsStrategy";
import { LineBreakerWordFoundStrategy } from "./line-break/LineBreakerWordFoundStrategy";
import { Printer } from "./Printer";

const text = faker.lorem.sentence(60);
const printer = new Printer(text);
console.clear();
console.log("Original Text: ", text);
console.log("\n\n========================================================\n\n");
printer.setLineBreaker(new LineBreakerCountWordsStrategy(10));
console.log("LineBreakerCountWordsStrategy Text:\n");
printer.print();
console.log("\n\n========================================================\n\n");
printer.setLineBreaker(new LineBreakerWordFoundStrategy("et"));
console.log("LineBreakerWordFoundStrategy Text:\n");
printer.print();
