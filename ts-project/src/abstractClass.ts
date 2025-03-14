//abstract class is like a blueprint, we cannot create an object in it but can create an object through inheritance
abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}
    abstract getsepia():  void      //abstract method
    getReelTime(): number{
        return 8    //after some calculations
    }
}


class Instagram extends TakePhoto {     // instagram inherits takephoto
    constructor(
        public cameraMode:string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }
    getsepia(): void {
        console.log("Sepia");
    }
}

const scene = new Instagram("test", "test", 4)  //creating object through inheritance

scene.getReelTime()
