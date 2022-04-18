// @ts-ignore
import u from "umbrellajs";
var arrive = require("arrive");

export class Stars{
    static emptyStar = "☆";
    static fullStar = "★";
    private uPMain: any;
    private starMax : number;
    private uSpansStars : Array<any>;
    currentRating : number;
    currentSongUri : string | null;
    constructor(uP : any) {
        this.uPMain = uP;
        this.starMax = 0;
        this.uSpansStars = [];
        this.currentRating = 0;
        this.currentSongUri = Spicetify.Queue.track.uri ?? null;
        Spicetify.Player.addEventListener("songchange", (event) => {
            let track = Stars.songUriFromSongChangeEvent(event);
            //here is the stars changing auto
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
    static getSongRating(song : string){
        return Number(Spicetify.LocalStorage.get("song-rater_" + song));
    }
    static setSongRating(song : string, rating : number){
        Spicetify.LocalStorage.set("song-rater_" + song, rating.toString());
    }
    static getCurrentSongUri(){
        return Spicetify.Queue.track.contextTrack.uri ?? null;
    }
    static songUriFromSongChangeEvent(event : (Event & {data: Spicetify.PlayerState}) | undefined){
        return event?.data.track?.uri ?? null;
    }
}