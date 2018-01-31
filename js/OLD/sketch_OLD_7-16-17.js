/* Need p5
 */

var barWidth = 100;
var trgWidth = 50;
var lastBar = -1;
var barXY = true;

function setup() { //run ones
    var myCanvas = createCanvas(720, 400); // I save this to a variable so i can chage this about it
    myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer
    colorMode(HSB, height, height, height);
    noStroke();
    background('#00F1D3');
}

function draw() { //run eavry frame
    if (!(mouseX <= 10 | mouseX >= 690 | mouseY <= 10 | mouseY >= 390)){
        background('#00F1D3');
        if (barXY){
            XBAR();
        }else {
            YBAR();
        }
    }
}

function XBAR(){
    var whichBar = mouseX / barWidth;
    if (whichBar !== lastBar) {
        //var barX = whichBar * barWidth;
        fill(mouseY, height, height);
        rect(mouseX - (barWidth/2), 10, barWidth, height-10);
        //triangle(barX, 0, barX + trgWidth, height, barX - trgWidth, height);
        triangle(mouseX, 0, 0, height, width, height);
        //lastBar = whichBar;
    }
}

function YBAR(){
    var whichBar = mouseY / barWidth;
    if (whichBar !== lastBar) {
        //var barY = whichBar * barWidth;
        fill(mouseX, height, height);
        rect(10, mouseY, width-35, barWidth)
        //lastBar = whichBar;
    }
}

function mousePressed(){
    if (!(mouseX <= 10 | mouseX >= 690 | mouseY <= 10 | mouseY >= 390)) {
        if (barXY) {
            barXY = false;
        } else {
            barXY = true;
        }
    }
}