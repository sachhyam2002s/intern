interface takePhoto {
    cameraMode: string
    filter: string
    burst: number
    isSaved?: boolean       //optional property
}
interface Story {
    createStory(): void     //method
}

//implementation of interface using class
class instagram implements takePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){}
}
// OR 
// const photo: takePhoto ={
//     cameraMode: "Portrait",
//     filter: "black and white",
//     burst: 3
// }

class snapchat implements takePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number,
        public short: string
    ){}
    createStory(): void {
        console.log("Story was created");
    }
}