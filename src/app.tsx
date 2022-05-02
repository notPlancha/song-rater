import { SettingsSection } from "spcr-settings"; //settings aren't working for now, implement later
// @ts-ignore
import u from "umbrellajs";
var arrive = require("arrive");
import { Stars } from "./stars"
async function main() {

  while (!Spicetify?.PopupModal || !Spicetify?.Platform) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  const selectorPlaceToPut = ".main-trackInfo-container";
  const selectorToClone = ".main-trackInfo-container > *:first-child"

  const selectorSong = ".main-trackList-trackList > * > * > [role=\"row\"]"; //maybe not the best selector but works for now
  // @ts-ignore
  document.arrive(selectorPlaceToPut, {existing: true, onceOnly: false}, (element : HTMLElement) => {//am not sure if onceOnly is needed
    let placeToPut = u(selectorPlaceToPut);
    let newDiv = u(selectorToClone).clone();
    newDiv.attr("class", "");
    let pInNewDiv = u("span", newDiv.first()).replace("<p></p>");
    let stars = new Stars(pInNewDiv);
    stars.addStars(5);
    placeToPut.append(newDiv);
  })
  Spicetify.Platform.History.listen(async ( {pathname} : {pathname : string}) => {
    console.log(pathname);
  })
  // @ts-ignore
  document.arrive(selectorSong, {existing: true, onceOnly: false}, (element : HTMLElement) => {//change if becomes resource heavy
    //console.log(element);
  })
}

export default main;
