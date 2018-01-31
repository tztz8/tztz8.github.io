/* Need p5
 */


/*
Think of the canvas as a gread in the 4th quarter. (as 0,0 is in the top left corner)
and also negive(-) numbes are off the screen and nubes past width and height are also
off the screen.
 */

//console.log("draw was ran");

var barWidth = 100;
var trgWidth = 50;
var lastBar = -1;
var ObjectModeXY = 0;

function setup() { //run ones
    var myCanvas = createCanvas(720, 400); // I save this to a variable so i can chage this about it
    myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer
    colorMode(HSB, height, height, height);
    noStroke();
    background('#00F1D3');
}

function draw() { //run eavry frame
    if (!(mouseX <= 0 | mouseX >= width | mouseY <= 0 | mouseY >= height)){
        //background('#00F1D3');
        if (ObjectModeXY == 0){
            XBAR();
        }else if (ObjectModeXY == 1){
            YBAR();
        }else if (ObjectModeXY == 2){
            XTRG();
        }

    }
}

function XBAR(){
    var whichBar = mouseX / barWidth;
    if (whichBar !== lastBar) {
        //var barX = whichBar * barWidth;
        fill(mouseY, height, height);
        rect(mouseX - (barWidth/2), 0, barWidth, height);
        //triangle(barX, 0, barX + trgWidth, height, barX - trgWidth, height);
        triangle(mouseX, 0, 0, height, width, height);
        //lastBar = whichBar;
    }
}

function YBAR(){
    var whichBar = mouseY / barWidth;
    if (whichBar !== lastBar) {
        //var barY = whichBar * barWidth;
        var c1 = map(mouseX, 0, width, 0, height);
        fill(c1, height, height);
        rect(0, mouseY-(barWidth/2), width, barWidth)
        //lastBar = whichBar;
    }
}

function XTRG(){
    var whichBar = mouseX / barWidth;
    if (whichBar !== lastBar) {
        fill(mouseY, height, height);
        triangle(mouseX, 0, mouseX + trgWidth, height, mouseX - trgWidth, height);
        // pint one (x=mouseX,Y=0)
    }
}

function mousePressed(){
    if (!(mouseX <= 0 | mouseX >= width | mouseY <= 0 | mouseY >= height)) {
        if (ObjectModeXY == 0) {
            ObjectModeXY = 1;
        } else if (ObjectModeXY == 1) {
            ObjectModeXY = 2;
        } else if (ObjectModeXY == 2){
            ObjectModeXY = 0;
        } else {
            console.log("Error: ObkextModeXY is out of rang");
        }
    }
}