var pet,petimg,petimg2;
var database,foodS,foodstockref;

function preload()
{
  petimg = loadImage("images/Dog.png");
  petimg2 = loadImage("images/Dog2.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500, 500);
  pet = createSprite(250,350,150,150);
  pet.addImage(petimg);
  pet.scale =0.25;
var foodstockref = database.ref("food");
 foodstockref.on("value",readStock);
}


function draw() {  
background("green");
  

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  pet.addImage(petimg2)
}

text("note:Press UP_ARROW key to feed Drago Milk",150,50);
text("food remaining:"+foodS,150,100);
drawSprites();
}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0
  }else{
    x=x-1
  }
  database.ref("/").update({
    food:x
  })
 
}


