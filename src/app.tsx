import { SettingsSection } from "spcr-settings";
// @ts-ignore
import u from "umbrellajs";
var arrive = require("arrive");
import { Stars } from "./stars"
async function main() {
  while (!Spicetify?.PopupModal) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  //let rowSelector = "[role=\"row\"]"
  let selectorPlaceToPut = ".main-trackInfo-container";
  let selectorToClone = ".main-trackInfo-container > *:first-child"

  // @ts-ignore
  document.arrive(selectorPlaceToPut, {existing: true, onceOnly: true}, (element : HTMLElement) => {
    let placeToPut = u(selectorPlaceToPut);
    let newDiv = u(selectorToClone).clone();
    newDiv.attr("class", "")
    let pInNewDiv = u("span", newDiv.first()).replace("<p></p>")
    let stars = new Stars(pInNewDiv)
    stars.addStars(5)
    placeToPut.append(newDiv)
  })
}

export default main;
