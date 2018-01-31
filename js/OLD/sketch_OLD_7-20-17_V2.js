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
var NumberOfModes = 3;

var barWidthMin = 10;
var barWidthMax = 400;

var trgWidthMin = 10;
var trgWidthMax = 1000;

var gui;

function setup() { //run ones
    var myCanvas = createCanvas(720, 400); // I save this to a variable so i can chage this about it
    myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer
    colorMode(HSB, height, height, height);
    noStroke();
    background('#00F1D3');

    // Create the GUI
    //sliderRange(10, 500, 5);
    gui = createGui('Size Changer');
    gui.addGlobals('barWidth', 'trgWidth');
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
        lastBar = whichBar;
    }
}

function YBAR(){
    var whichBar = mouseY / barWidth;
    if (whichBar !== lastBar) {
        //var barY = whichBar * barWidth;
        var c1 = map(mouseX, 0, width, 0, height);
        fill(c1, height, height);
        rect(0, mouseY-(barWidth/2), width, barWidth)
        lastBar = whichBar;
    }
}

function XTRG(){
    var whichBar = mouseX / barWidth;
    if (whichBar !== lastBar) {
        fill(mouseY, height, height);
        triangle(mouseX, 0, mouseX + trgWidth, height, mouseX - trgWidth, height);
        // Point one (mouseX,0) Point two (mouseX + trgWith,height) Point 3 (mouseX - trgWith,height)
        /*
         +Point 3                +Point 2
         |                       |
        +-------------------------+
        ||           X<--------------+Point 1
        ||          X^X          ||
        ||         X | X         ||
        ||        X  |  X        ||
        ||       X   |   X       ||
        ||      X    |    X      ||
        ||     X     +<--------------+MouseX
        ||    X      |      X    ||
        ||   X       |       X   ||
        ||  X        |        X  ||
        +| X         |         X |+
        |VX          +          XV|
        |XXXXXXXXXXXXXXXXXXXXXXXXX|
        +-------------------------+
         */
        lastBar = whichBar;
    }
}

function mousePressed(){
    if (!(mouseX <= 0 | mouseX >= width | mouseY <= 0 | mouseY >= height)) {
        ObjectModeXY++;
        if (ObjectModeXY == NumberOfModes) {
            ObjectModeXY = 0;
        } else if (ObjectModeXY > NumberOfModes){
            console.log("Error: ObjectModeXY is grader then NumberOfModes");
            console.log("Auto Try to fix by seting ObjectModeXY to 0");
            ObjectModeXY = 0;
        }
    }
}