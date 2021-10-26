import { PreferenceSingleton } from "./PreferenceSingleton";

const prefSingleton = PreferenceSingleton.getInstance();
const prefSingleton2 = PreferenceSingleton.getInstance();


prefSingleton.defineBgColor("#CCC");
console.log(`prefSingleton change bgColor to #CCC`);


console.log(`Bg Color on prefSingleton2 ${prefSingleton2.getConfig().bgColor}`);
prefSingleton2.defineBgColor("#FF0000");
console.log(`prefSingleton2 change bgColor to #FF0000`);

console.log(`Bg Color on prefSingleton ${prefSingleton.getConfig().bgColor}`);

console.log(
  "prefSingleton === prefSingleton2",
  prefSingleton === prefSingleton2,
  "Identical objects",
);
