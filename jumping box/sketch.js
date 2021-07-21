var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
s1 =createSprite(0,580,350,20)
s2 =createSprite(295,580,250,20)
s3 =createSprite(515,580,250,20)
s4 =createSprite(740,580,250,20)
    //create box sprite and give velocity
    s1.shapeColor="blue"
    s2.shapeColor="#ffa700"
    s3.shapeColor="#be1b4c"
    s4.shapeColor="green"
ball=createSprite(random(20,750),100,40,40)
ball.shapeColor="white"
ball.velocityX=-4
ball.velocityY=9
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites()
ball.bounceOff(edges)
/*ball.bounceOff(s2)
ball.bounceOff(s3)
ball.bounceOff(s4)
ball.bounceOff(s1)*/
    //add condition to check if box touching surface and make it box
    if(s1.isTouching(ball)&& ball.bounceOff(s1)){
        ball.shapeColor="blue"
        music.play()
    }
    if(s2.isTouching(ball)&& ball.bounceOff(s2)){
        ball.shapeColor=s2.shapeColor
    }
    if(s3.isTouching(ball)&& ball.bounceOff(s3)){
        ball.shapeColor=s3.shapeColor
    }
    if(s4.isTouching(ball)){
        ball.shapeColor=s4.shapeColor
        ball.velocityX=ball.velocityY=0
        
music.stop()

    }
    drawSprites()
}
