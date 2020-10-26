var value;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

   value = 0;

  stand = new ground (200,150,70,10);

  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);

  block13 = new box (360,195,30,40);
  block14 = new box (390,195,30,40);
  block15 = new box (420,195,30,40);

  block16 = new box (390,155,30,40);

  slingShot=new slingshot(this.polygon,{x:100,y:200});


}

function draw() {
  background(255,255,255); 

  fill(value);
  rect(25, 25, 50, 50);

  stand.display(); 

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  slingShot.display();


  drawSprites();
}

function mouseDragged() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}

function mousePressed() {
  if (value === 0) {
    value = 255;
  }
   else {
    value = 0;
  }
}
