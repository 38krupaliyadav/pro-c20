var mr, fr;

function setup() {
 createCanvas(800,400);

  fr = createSprite(100, 200, 50, 50);
  fr.shapeColor = "green";
  fr.debug = true;

  mr = createSprite(400, 200, 50, 50);
  mr.shapeColor = "green";
  mr.debug = true;

  o1 = createSprite(100, 100, 50, 50);
  o1.shapeColor = "green";
  o1.velocityX = 2
  o1.debug = true;

  o2 = createSprite(700, 100, 50, 50);
  o2.shapeColor = "green";
  o2.debug = true;
  o2.velocityX = -2
}

function draw() {
  background(0);  

  bounceOff(o1, o2)
  
  mr.x = mouseX;
  mr.y = mouseY;
 if(isTouching(mr,o2))      //argument are the input which we send to the function as a input
  {
    mr.shapeColor = "red";
    o2.shapeColor = "red";
  }
  else{
    mr.shapeColor = "green";
    o2.shapeColor = "green";  
  }
  if (isTouching(mr, fr)){
    mr.shapeColor = "red";
    fr.shapeColor = "red";
  }
  else{
    mr.shapeColor = "green";
    fr.shapeColor = "green";  
  }

  drawSprites();
}

/*  Types of function :
1. no argument no return
2.  argument but no return
3.  with argument and  with return 
4. no argument but return


***true or false values are called BOOLEAN variable


*/





