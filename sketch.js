var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;
var b1,b2,b3;
var question, contestant, quiz;

function preload(){
  b1=loadImage("12.jpg");
  b2=loadImage("13.jpeg");
}


function setup(){
  canvas = createCanvas(850,500);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(b1);
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}