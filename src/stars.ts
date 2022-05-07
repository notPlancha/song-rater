// @ts-ignore
import u from "umbrellajs";
var arrive = require("arrive");
import { getStorage } from '@sifrr/storage';

export class Stars{
    static storage = getStorage({
        name: 'songRaterDb',
        description: 'Song Rater Database',
        ttl:0
    });
    static emptyStar = "☆";
    static fullStar = "★";
    private uPMain: any;
    private starMax : number;
    private uSpansStars : Array<any>;
    currentRating : number;
    currentSongUri : string | null;
    constructor(uP : any) {
        console.log(Stars.storage.type);//TODO remove
        this.uPMain = uP;
        this.starMax = 0;
        this.uSpansStars = [];
        this.currentRating = 0;
        this.currentSongUri = Spicetify.Queue.track.uri ?? null;
        Spicetify.Player.addEventListener("songchange", (event) => {
            let track = Stars.songUriFromSongChangeEvent(event);
            if (track == null) {
                //if debug
                Spicetify.PopupModal.display({
                    content: "track is null",
                    isLarge: true,
                    title: "Error"
                })
                return
            }else{
                this.currentSongUri = track;
                let rating = Stars.getSongRating(track);
                if (!isNaN(rating)){
                    this.setRating(rating);
                }
            }
        });
    }
    addStar(){
        const thisStarRating = ++this.starMax;// should work to save the starRating to only this instance
        let uSpanStar = u(`<span class='star-${thisStarRating}'>☆</span>`);
        let thisClass = this; //am not sure if umbrellajs instance has a this to refer to the element
        uSpanStar.on("click", (ev : any) => { //ev is an event from umbrellaJs
            thisClass.setRating(thisStarRating);
        })
        this.uPMain.append(uSpanStar);
        this.uSpansStars.push(uSpanStar);
    }
    addStars(times : number){
        for (let i = 0; i < times; i++) {
            this.addStar();
        }
    }
    setRating(rating : number){
        if (this.currentSongUri != null){
            Stars.setSongRating(this.currentSongUri,rating);
        }
        this.currentRating = rating;
        for (let i = 0; i < this.starMax; i++) {
            if (i < rating) {
                this.uSpansStars[i].text(Stars.fullStar);
            } else {
                this.uSpansStars[i].text(Stars.emptyStar);
            }
        }

    }
    static async getSongRating(trackUri : string) : Promise<number>{
        Stars.storage.get(trackUri).then((value) => {
            if (isNaN(Number(value))){
                return 0;
            }else{
                return Number(value);
            }
        }
    }
    static setSongRating(trackUri : string, rating : number) {
        if (isNaN(rating) || rating == 0) {
            Spicetify.LocalStorage.remove(Stars.localStorageid + trackUri);
        } else {
            Spicetify.LocalStorage.set(Stars.localStorageid + trackUri, rating.toString());
        }
    }
    static getCurrentSongUri(){ //TODO check return type
        return Spicetify.Queue.track.contextTrack.uri ?? null;
    }
    static songUriFromSongChangeEvent(event : (Event & {data: Spicetify.PlayerState}) | undefined){
        return event?.data.track?.uri ?? null;
    }
}