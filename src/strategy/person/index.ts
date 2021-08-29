import Cralw from "./move-behaviors/Cralw";
import Walk from "./move-behaviors/Walk";
import { Person } from "./Person";

const jhon = new Person("Jhon", 16);
jhon.setMoveBehavior(new Walk);
jhon.greetings()
jhon.move();
jhon.setMoveBehavior(new Cralw);
jhon.move();
console.log(`======================================================`)
const clair = new Person("clair", 20);
clair.setMoveBehavior(new Walk());
clair.greetings();
clair.move();
clair.setMoveBehavior(new Cralw());
clair.move();
console.log(`======================================================`);