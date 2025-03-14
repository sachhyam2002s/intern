"use strict";
//abstract class is like a blueprint, we cannot create an object in it but can create an object through inheritance
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        return 8; //after some calculations
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getsepia() {
        console.log("Sepia");
    }
}
const scene = new Instagram("test", "test", 4); //creating object through inheritance
scene.getReelTime();
