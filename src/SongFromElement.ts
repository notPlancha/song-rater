// @ts-ignore
import u from "umbrellajs";
export class SongFromElement{
    uri: Spicetify.URI;
    songs: string[] | null = null;
    constructor(uri : string) {
        this.uri = Spicetify.URI.fromString(uri);
        switch (this.uri.type) {
            //adapted from shuffle+
            case Spicetify.URI.Type.ALBUM:
                //working
                Spicetify.CosmosAsync.get(`wg://album/v1/album-app/album/${this.uri.getBase62Id()}/desktop`).then(res => {
                    console.log(res);
                });
                return;
            case Spicetify.URI.Type.PLAYLIST:
            case Spicetify.URI.Type.PLAYLIST_V2:
                //not working
                Spicetify.Platform.PlaylistAPI.getContents(this.uri.toString()).then((res: any) => {
                    console.log(res);
                });
                return;
        }
        throw `Unsupported fetching URI type: ${this.uri.type}`
    }
    addToPage(){
        u(".main-trackList-trackList").each((node: any, i: Number) =>{
            node = u(node);
            node.attr("aria-colcount", (Number(node.attr("aria-colcount")) + 1));//idk if toString is needed
            node.
        })
    }
    prepareLeavingPage(){

    }
}