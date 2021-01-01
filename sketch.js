var player,playerimg;

var enemy1,enemy2,enemy3,enemy4,enemy5,enemy6,enemy7,enemy8,enemy9,enemy10,enemy11,enemy12,enemy13,enemyimg

var bulletimg;

function preload(){

    playerimg=loadImage("images/player.png");
    enemyimg=loadImage("images/enemy.png");
    bulletimg=loadImage("images/bullet.png");


}

function setup(){
    canvas = createCanvas(displayWidth-200, displayHeight-125);

    player = createSprite(450,675,20,20);
    player.addImage(playerimg);
    player.scale=0.075

    enemy1 = createSprite(100,50,20,20)
    enemy1.addImage(enemyimg)
    enemy1.scale=0.15
    enemy2 = createSprite(100,50,20,20)
    enemy2.addImage(enemyimg)
    enemy2.scale=0.15

    enemy3 = createSprite(200,50,20,20)
    enemy3.addImage(enemyimg)
    enemy3.scale=0.15

    enemy4 = createSprite(300,50,20,20)
    enemy4.addImage(enemyimg)
    enemy4.scale=0.15

    enemy5 = createSprite(400,50,20,20)
    enemy5.addImage(enemyimg)
    enemy5.scale=0.15

    enemy6 = createSprite(500,50,20,20)
    enemy6.addImage(enemyimg)
    enemy6.scale=0.15

    enemy7 = createSprite(600,50,20,20)
    enemy7.addImage(enemyimg)
    enemy7.scale=0.15

    enemy8 = createSprite(700,50,20,20)
    enemy8.addImage(enemyimg)
    enemy8.scale=0.15

    enemy9 = createSprite(800,50,20,20)
    enemy9.addImage(enemyimg)
    enemy9.scale=0.15

    enemy10 = createSprite(900,50,20,20)
    enemy10.addImage(enemyimg)
    enemy10.scale=0.15

    enemy11 = createSprite(1000,50,20,20)
    enemy11.addImage(enemyimg)
    enemy11.scale=0.15
    
    enemy12 = createSprite(1100,50,20,20)
    enemy12.addImage(enemyimg)
    enemy12.scale=0.15

    enemy13 = createSprite(1200,50,20,20) 
    enemy13.addImage(enemyimg)
    enemy13.scale=0.15
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-5,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(5,0);
    }
    
    drawSprites();
    createBullet()
}

function changePosition(x,y){
    player.x = player.x + x;
    player.y = player.y + y;
}

function createBullet(){

    if(World.frameCount % 80 === 0){
        var num=Math.round(random(1,13))
        var bullet = createSprite(105,100,10,20) 
        bullet.velocityY=3
        bullet.addImage(bulletimg)
        bullet.scale=0.05



    }


}