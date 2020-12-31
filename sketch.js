//Create variables here
var dog ,happyDog,dogImg
var database 
var foodS , foodStock
//var count=0

function preload()
{
  //load images here
  happyDog=loadImage("happydog.png")
  dogImag=loadImage("Dog.png")

}

function setup() {
  createCanvas(800, 700);
  
  
  dog =createSprite(400,350,20,20)
  dog.addImage(dogImag)
  dog.scale=0.2

  database=firebase.database()

  foodStock=database.ref('food');
  foodStock.on("value",readStock);

  
}


function draw() {  
  background(46,139,87)
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);

    dog.addImage(happyDog);

   }
  fill ("white")
  textSize(16)
  drawSprites();
  //add styles here
text ("Note: Press UP ARROW KEY TO FEED Sandy Milk ",250,30)
text("Food Remaning  : "+ foodS ,200,500)
}



function readStock(data){
  foodS=data.val();

}
function writeStock(num){
  if(num<=0){
   num=0
  }else{
    num=num-1
  }
  database.ref('/').update({
    food:num
  })

  
}