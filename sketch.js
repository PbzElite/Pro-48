var database;
var menu,player, game;
var team1Count, team2Count;
var gameState=0;
var measure1,measure2;
var mapimg;
//var bg;

function preload(){
  mapimg = loadImage("map.png");
}

function setup(){
  createCanvas(1280,720);
  database = firebase.database();

  menu = new Menu();

  game = new Game();

  //bg = loadImage("images/title.png");
  //measure1 = createSprite(640,360);

}

function draw() {

  background("black");

  if(gameState===0){
    menu.display(); 
    player = new Player();
    player.getTeam1Count();
    player.getTeam2Count();
}

  if(team1Count === 2 && team2Count === 2){
    game.update(1);
    gameState = 1;
    
  }

  if(gameState === 1){
    menu.gameHide();
    background(mapimg);
  }

  //console.log("team1 "+team1Count);
  //console.log('team2 '+ team2Count);
  //drawSprites();     
}