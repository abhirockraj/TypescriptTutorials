"use strict";
class TakePhoto1 {
    constructor(cameraMode, burst) {
        this.cameraMode = cameraMode;
        this.burst = burst;
    }
    getReelTime() {
        // after some complex calculation
        return 8;
    }
}
class Instagram1 extends TakePhoto1 {
    constructor(cameraMode, burst, filter) {
        super(cameraMode, burst);
        this.cameraMode = cameraMode;
        this.burst = burst;
        this.filter = filter;
    }
    getSepia() {
        console.log("Sepia");
    }
}
const abhinav1 = new Instagram1("w", 4, "n");
abhinav1.getReelTime();
