"use strict";
//implementation of interface using class
class instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
// OR 
// const photo: takePhoto ={
//     cameraMode: "Portrait",
//     filter: "black and white",
//     burst: 3
// }
class snapchat {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("Story was created");
    }
}
