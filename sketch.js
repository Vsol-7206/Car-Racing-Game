var database;
var gameState=0;
var playerCount;
var form, game, player;
var allPlayers,cars;
var car1, car2, car3, car4;

function setup(){
    database = firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);
    game= new Game();
    game.getState();
    game.start();
}

function draw(){
    if(playerCount===4){
        game.update(1);
    }
    if(gameState===1){
        clear();        //clears the console
        game.play();
    }
   
}
