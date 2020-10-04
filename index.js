// const backgroundColor = [230,220,190];
const myCanvas = { width: 600, height: 600};
const backgroundColor = [0,0,0];
const lineColor =  [0,220,20];
const activeLineColor = [220,220,220];
const lineWidth = 3;
const activelineWidth = 3;
const sounds = Array.from({ length: 4 });

const ball1 = {
    x: 300,
    y: 500,
    size: 50,
    speed: 3,
    fillColor: [0,0,0],
    strokeColor: [0,220,20],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[1],
    soundLength: 2000,
    outlineWidth: 6,
} 

const ball2 = {
    x: 300,
    y: 400,
    size: 50,
    speed: 4,
    fillColor: [0,0,0],
    strokeColor: [0,220,20],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[3],
    soundLength: 1000,
    outlineWidth: 6,
} 

const ball3 = {
    x: 300,
    y: 300,
    size: 50,
    speed: 5,
    fillColor: [0,0,0],
    strokeColor: [0,220,20],
    ballStrokeWeight: 2,
    rightSound: sounds[4],
    leftSound: sounds[5],
    soundLength: 500,
    outlineWidth: 6,
} 

const ball4 = {
    x: 300,
    y: 150,
    size: 50,
    speed: 6,
    fillColor: [0,0,0],
    strokeColor: [0,220,20],
    ballStrokeWeight: 2,
    rightSound: sounds[0],
    leftSound: sounds[2],
    soundLength: 500,
    outlineWidth: 6,
} 

const item1 = {
    x: 150,
    y: 350,
    size: 50,
    speed: 6,
    fillColor: [0,0,0],
    strokeColor: [0,220,20],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[3],
    soundLength: 1000,
} 

const item2 = {
    x: 300,
    y: 150,
    size: 50,
    speed: 5,
    fillColor: [0,0,0],
    strokeColor: [0,220,20],
    ballStrokeWeight: 2,
    rightSound: sounds[2],
    leftSound: sounds[3],
    soundLength: 1000,
} 

const item3 = {
    x: 420,
    y: 500,
    size: 50,
    speed: 3,
    fillColor: [0,0,0],
    strokeColor: [0,220,20],
    ballStrokeWeight: 2,
    rightSound: sounds[4],
    leftSound: sounds[5],
    soundLength: 500,
} 


const bottomEdge = {
    x1: 100,
    y1: 550,
    x2: 468,
    y2: 550,
    color: lineColor,
    width: lineWidth,

}

const topEdge = {
    x1: 100,
    y1: 50,
    x2: 468,
    y2: 50,
    color: lineColor,
    width: lineWidth,

}

const leftEdge = {
    x1: 100,
    y1: 50,
    x2: 100,
    y2: 550,
    color: lineColor,
    width: lineWidth,

}

const rightEdge = {
    x1: 470,
    y1: 50,
    x2: 470,
    y2: 550,
    color: lineColor,
    width: lineWidth,
}


const balls = [ball1, ball2, ball3, ball4];
const items = [item1, item2, item3];



function preload(){

    sounds.forEach((sound, i) => {
        sounds[i] = loadSound(`sounds/${i}.mp3`)
    })

    console.log(sounds);

    ball1.rightSound = sounds[0];
    ball1.leftSound = sounds[1];
    ball2.rightSound = sounds[2];
    ball2.leftSound = sounds[3];
    ball3.rightSound = sounds[4];
    ball3.leftSound = sounds[5];
    ball4.rightSound = sounds[4];
    ball4.leftSound = sounds[5];

    // for(let i = 0; i < sounds.length; i++){
    //     sounds[i] = loadSound(`sounds/${i}.mp3`)
    // }
}

function setup(){
    createCanvas(myCanvas.width, myCanvas.height);
    background(backgroundColor);
}



function draw(){
    
    background(backgroundColor);

    balls.forEach((ball) => {
        updateBall(ball);
        displayBall(ball);
    })
    items.forEach((item) => {
        updateItem(item);
        displayItem(item);
    })
    drawLine(topEdge);
    drawLine(leftEdge);
    drawLine(rightEdge);
    drawLine(bottomEdge);
}


function updateBall(ball){
    console.log(ball.x);
    if(ball.x + ball.size/2 > rightEdge.x1 ){
        ball.speed *= -1;
        //ball.rightSound.play();
        activateLine(rightEdge);
    } else if(ball.x - ball.size/2 < leftEdge.x1 ){
        ball.speed *= -1;
        //ball.leftSound.play();
        activateLine(leftEdge);
    }
    ball.x+= ball.speed;
}
//Could not figure out how to 
function updateItem(item){
    if(item.x + item.size/2 > rightEdge.y1 ){
        item.speed *= -1;
        //item.rightSound.play();
        //activateLine(rightEdge);
    } else if(item.x - item.size/2 < leftEdge.y1 ){
        item.speed *= -1;
        //item.leftSound.play();
        //activateLine(leftEdge);
    }
    item.x += item.speed;
}

const displayBall = ({x, y, size, strokeColor, fillColor, ballStrokeWeight}) => {
        stroke(strokeColor);
        fill(fillColor);
        strokeWeight(ballStrokeWeight);
        ellipse(x, y, size);
}

const displayItem = ({x, y, size, strokeColor, fillColor, ballStrokeWeight}) => {
    stroke(strokeColor);
    fill(fillColor);
    strokeWeight(ballStrokeWeight);
    ellipse(x, y, size);
}

function drawLine({x1, y1, x2, y2, color, width}){
    stroke(color);
    strokeWeight(width);
    line(x1, y1, x2, y2);
}



function activateLine(line){

    line.color = activeLineColor;
    line.width = activelineWidth;

    setTimeout(() => resetLines(line), 500);
}


function resetLines(line){
    line.color = lineColor;
    line.width = lineWidth;
}