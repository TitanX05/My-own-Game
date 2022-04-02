const Engine = Matter.Engine;
const World = Matter.world;
const Bodies = Matter.Bodies;
var sheild, magic, obTank, backCastle, laserGun, shopArea;
var sheildImg, magicImg, obTankImg, backCastleImg, magicDoneImg, laserGunImg, laserImg, sheildUpturnedImg;
var coins = 0;
var take = false;
function preload() {
  sheildImg = loadImage("./Assets/Sheild.png");
  sheildUpturnedImg = loadImage("./Assets/SheildUpturned.png");
  magicImg = loadImage("./Assets/Scorch.png");
  magicDoneImg = loadImage("./Assets/Magic circle.png");
  obTankImg = loadImage("./Assets/Tank.png");
  laserGunImg = loadImage("./Assets/Laser gun.png");
  laserImg = loadImage("./Assets/Laser.png")
  backCastleImg = loadImage("./Assets/Back_Castle.png");
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = Engine.world
  take = false;

  sheild = createSprite(700, 150, 50, 50);
  sheild.addImage("wait", sheildImg);
  sheild.addImage("done", sheildUpturnedImg);
  sheild.scale = 0.4;

  magic = createSprite(650, 350, 50, 50);
  magic.addImage("wait", magicImg);
  magic.addImage("done", magicDoneImg);
  magic.scale = 0.3;

  laserGun = createSprite(675, 500, 50, 50);
  laserGun.addImage("wait", laserGunImg);
  laserGun.addImage("done", laserImg);
  laserGun.scale = 0.199;

  obTank = createSprite(100, -100, 50, 50);
  obTank.addImage("tank", obTankImg);
  obTank.scale = 0.4;
  obTank.velocityY = 2;

  shopArea = createSprite(650, 275, 300, 600);
  sheild.depth = shopArea.depth + 1;
  magic.depth = shopArea.depth + 1;
  laserGun.depth = shopArea.depth + 1;

  backCastle = createSprite(400, 650, 400, 150);
  backCastle.addImage("castle", backCastleImg);
  backCastle.scale = 2.0;
}

function draw() {
  background("lightgreen");
  Engine.update(engine);

//  mouseDragged(sheild);
//  mouseDragged(magic);
  drawSprites();
  fill("black");
  text(mouseX + "," + mouseY, mouseX, mouseY);
  textSize(20);
  stroke(10)
  fill("#4285f4");
  text("Shop", 520, 25);
  fill("#fccc3c");
  text("Coins: " + coins, 520, 555);
}

//function mouseDragged(a) {
//  a.x = mouseX;
//  a.y = mouseY;
//}

//function mouseReleased() {
//  sheild.changeImage("done", sheildUpturnedImg)
//}