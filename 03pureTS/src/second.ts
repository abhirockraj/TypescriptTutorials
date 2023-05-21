interface TakePhoto{
    cameraMode :string,
    filter : string,
    burst : number
}
interface Story {
    createStory():void
}
class Instagram implements TakePhoto,Story{
    constructor(
        public cameraMode :string,
        public filter : string,
        public burst : number,
        public reels :number
    ){}
    createStory(): void {
        console.log("Story created")
    }
}