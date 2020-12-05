var bullet, wall;
var thickness, speed, wt;
var damage;
var bulletEgde, wallEdge;

function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,50,50);
  bullet.shapeColor = color(255);
  bullet.velocityX = speed;

  wall = createSprite(1000, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
  
}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    damage = (0.5*wt*speed*speed)/(thickness*thickness*thickness)
    if(damage >= 10)
    {
      wall.shapeColor = "red";
    }
    else
    {
      wall.shapeColor = "green";
    }
  }
  drawSprites();
}

//function for collision

function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true;
	}
	return false;
}