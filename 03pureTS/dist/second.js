"use strict";
class Instagram {
    constructor(cameraMode, filter, burst, reels) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.reels = reels;
    }
    createStory() {
        console.log("Story created");
    }
}
