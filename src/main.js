//const { Phaser } = require("../lib/phaser");
//Qihe(Jason)Wang
//Rocket Patrol KING WANG DLC !!!!!
//10 hours , i was trying to do the mouse and click to shot for player one and other player use keyboard only that took me like 5 hours .
//Create a new enemy space ship type thats smaller moves faster and it worth more points 
//implement a new timing scoring mechanism that adds time to the clock for successful hits.
//Use phaser's particle emitter to create a particle explosion when the rocket hits the spaceship
//implement 2 player mode 
//nothing else only from professor nathan's code tbh 
let config = {
    type : Phaser.AUTO,
    input:{
        mouse : true
    },
    width : 640,
    height : 480,
    scene : [ Menu, Play ]  //scene 只有menu 和play
}
let game = new Phaser.Game(config);
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3 ;
let keyF,keyR,keyLEFT,keyRIGHT,keyA,keyD,keyT;

