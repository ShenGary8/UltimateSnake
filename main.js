
snake = {
    x: 250,
    y: 250,
    w: 20,
    speed: 3,
    direction: "d",
    update: function () {
        
        
        if (snake.direction == "l") {
            snake.x-=snake.speed;
        }
        if (snake.direction == "r") {
            snake.x+=snake.speed;
        }
        if (snake.direction == "u") {
            snake.y-=snake.speed; 
        }
        if (snake.direction == "d") {
            snake.y+=snake.speed; 
        }
        snake.x = constrain(snake.x, 0, width-10);
        snake.y = constrain(snake.y, 0, height-10);
    }
}





function controls() {
    if (keyIsDown(LEFT_ARROW)) {
        snake.direction = "l"
    }
    if (keyIsDown(RIGHT_ARROW)){
        snake.direction = "r"
    }
    if(keyIsDown(UP_ARROW)){
        snake.direction = "u"
    }
    if(keyIsDown(DOWN_ARROW)){
        snake.direction = "d"
    }
 
}




function setup() {
    createCanvas(500, 500);
    // document.write("<p>Hello World!</p>")
}

function draw() {
    background("limegreen");
    controls();
    snake.update();
    var c = color(255, 204, 0);
    fill(c);
    noStroke();
    rect(snake.x-snake.w/2, snake.y-snake.w/2, snake.w, snake.w);
  
} 
