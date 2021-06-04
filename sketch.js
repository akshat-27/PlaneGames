var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var players, plane1, plane2, plane3, plane4;

var track, plane1_img, plane2_img, plane3_img, plane4_img;

function preload(){
    track = loadImage("images/race track.jpeg");
    plane1_img = loadImage("images/airplane 1.png");
    plane2_img = loadImage("images/airplane 2.png");
    plane3_img = loadImage("images/airplane 3.png");
    plane4_img = loadImage("images/airplane 4.png");
  }

  function setup(){
    canvas = createCanvas(displayWidth - 20, displayHeight-30);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
  }

  function draw(){
    if(playerCount === 4 && gameState === 0){
      game.update(1);
    }
    if(gameState === 1){
      clear();
      game.play();
    }
    
  }
  