
var car, wall
var speed, weight


var deformation  




   



function setup() {
  createCanvas(800,400);

  speed = random(55,90);
   weight = random(400,1500);


   car = createSprite(100, 200, 50, 50);
   wall = createSprite(700,200,60,height/2);
   car.velocityX = speed
car.shapeColor = "black"


   
}

function draw() {
  background(255,255,255);  
  drawSprites();

  if( wall.x - car.x < wall.width/2 + car.width/2){
    car.velocityX = 0
    deformation = (0.5* weight * speed * speed) / 22500;
  
    if(deformation < 100){
      
      car.shapeColor = color(0,225,0)
      
    }
    if(deformation>100 && deformation<180){

      car.shapeColor = color(230,230,0);

    }
    if(deformation > 180){

      car.shapeColor = color(225,0,0)

    }
      
console.log(speed)
console.log(weight)
console.log(deformation)
  }

  
}