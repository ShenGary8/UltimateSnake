snake = {
    x: 250,
    y: 250,
    w: 25,
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
    rect(snake.x-snake.w/2, snake.y-snake.w/2, snake.w, snake.w);
}