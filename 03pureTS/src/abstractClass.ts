abstract class TakePhoto1{
    constructor (
        public cameraMode :string,
        public burst:number
    ){}
    abstract getSepia(): void
    getReelTime(): number{
        // after some complex calculation
        return 8
    }
}

class Instagram1 extends TakePhoto1{
    constructor (
        public cameraMode :string,
        public burst:number,
        public filter:string
    ){
        super(cameraMode,burst)
    }
    getSepia(): void {
        console.log("Sepia")
    }
    
}
const abhinav1 =  new Instagram1("w",4,"n")
abhinav1.getReelTime()