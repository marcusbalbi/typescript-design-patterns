import { Acai400ml } from "./Acai400ml";
import { ComAmendoin } from "./ComAmendoin";
import { ComLeiteCondensado } from "./ComLeiteCondensado";

const acaiBalbi = new Acai400ml();


if (process.argv[1] === "amendoin") {
  new ComAmendoin(acaiBalbi);
}
new ComLeiteCondensado().make();
