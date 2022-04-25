var xImg;
var oImg;
var gamestate = "1x";
var x1, x2, x3, x4, x5, x6, x7, x8, x9;
var o1, o2, o3, o4, o5, o6, o7, o8, o9;
var line1, line2, line3, line4;
var bline1, bline2, bline3, bline4;


function preload(){
    xImg = loadImage("x.png");
    oImg = loadImage("o.png");
    
}

function setup() {
    createCanvas(720,720);

    line1 = createSprite(240,360,10,720);
    line2 = createSprite(480,360,10,720);
    line3 = createSprite(360,240,720,10);
    line4 = createSprite(360,480,720,10);
    bline1 = createSprite(5,360,10,720);
    bline2 = createSprite(360,5,720,10);
    bline3 = createSprite(360,715,720,10);
    bline4 = createSprite(715,360,10,720);

    x1 = createSprite(120,120);
    x1.addImage("lol",xImg);

    o1 = createSprite(120,120);
    o1.addImage("lol",oImg);

    x2 = createSprite(360,120);
    x2.addImage("lol",xImg);

    o2 = createSprite(360,120);
    o2.addImage("lol",oImg);

    x3 = createSprite(600,120);
    x3.addImage("lol",xImg);

    o3 = createSprite(600,120);
    o3.addImage("lol",oImg);

    x4 = createSprite(120,360);
    x4.addImage("lol",xImg);

    o4 = createSprite(120,360);
    o4.addImage("lol",oImg);

    x5 = createSprite(360,360);
    x5.addImage("lol",xImg);

    o5 = createSprite(360,360);
    o5.addImage("lol",oImg);

    x6 = createSprite(600,360);
    x6.addImage("lol",xImg);

    o6 = createSprite(600,360);
    o6.addImage("lol",oImg);

    x7 = createSprite(120,600);
    x7.addImage("lol",xImg);

    o7 = createSprite(120,600);
    o7.addImage("lol",oImg);

    x8 = createSprite(360,600);
    x8.addImage("lol",xImg);

    o8 = createSprite(360,600);
    o8.addImage("lol",oImg);

    x9 = createSprite(600,600);
    x9.addImage("lol",xImg);

    o9 = createSprite(600,600);
    o9.addImage("lol",oImg);

    x1.visible = false;
    x2.visible = false;
    x3.visible = false;
    x4.visible = false;
    x5.visible = false;
    x6.visible = false;
    x7.visible = false;
    x8.visible = false;
    x9.visible = false;
    o1.visible = false;
    o2.visible = false;
    o3.visible = false;
    o4.visible = false;
    o5.visible = false;
    o6.visible = false;
    o7.visible = false;
    o8.visible = false;
    o9.visible = false;




}

function draw() {
    drawSprites();
    
    if(gamestate === "1x"){
        if(mousePressedOver(x1) && x1.visible === false){
            x1.visible = true;
            gamestate = "2o";
        }

        if(mousePressedOver(x2) && x2.visible === false){
            x2.visible = true;
            gamestate = "2o";
        }

        if(mousePressedOver(x3) && x3.visible === false){
            x3.visible = true;
            gamestate = "2o";
        }

        if(mousePressedOver(x4) && x4.visible === false){
            x4.visible = true;
            gamestate = "2o";
        }

        if(mousePressedOver(x5) && x5.visible === false){
            x5.visible = true;
            gamestate = "2o";
        }

        if(mousePressedOver(x6) && x6.visible === false){
            x6.visible = true;
            gamestate = "2o";
        }

        if(mousePressedOver(x7) && x7.visible === false){
            x7.visible = true;
            gamestate = "2o";
        }

        if(mousePressedOver(x8) && x8.visible === false){
            x8.visible = true;
            gamestate = "2o";
        }

        if(mousePressedOver(x9) && x9.visible === false){
            x9.visible = true;
            gamestate = "2o";
        }
        
    }

    if(gamestate === "2o"){
        if(mousePressedOver(o1) && o1.visible === false){
            o1.visible = true;
            gamestate = "3x";
        }

        if(mousePressedOver(o2) && o2.visible === false){
            x2.visible = true;
            gamestate = "3x";
        }

        if(mousePressedOver(o3) && o3.visible === false){
            x3.visible = true;
            gamestate = "3x";
        }

        if(mousePressedOver(o4) && o4.visible === false){
            x4.visible = true;
            gamestate = "3x";
        }

        if(mousePressedOver(o5) && o5.visible === false){
            x5.visible = true;
            gamestate = "3x";
        }

        if(mousePressedOver(o6) && o6.visible === false){
            x6.visible = true;
            gamestate = "3x";
        }

        if(mousePressedOver(o7) && o7.visible === false){
            x7.visible = true;
            gamestate = "3x";
        }

        if(mousePressedOver(o8) && o8.visible === false){
            x8.visible = true;
            gamestate = "3x";
        }

        if(mousePressedOver(o9) && o9.visible === false){
            x9.visible = true;
            gamestate = "3x";
        }


        
    }
    
   
}