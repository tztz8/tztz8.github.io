/* Need p5
        quicksettings
        p5.gui
 */

// gui params
var myAnngle = 30;
var myColor = '#eeee00';

var gui;

function setup() {

    createCanvas(windowWidth, windowHeight);

    // Create the GUI
    sliderRange(0, 359, 1);
    gui = createGui('p5.gui');
    gui.addGlobals('myColor', 'myAnngle');

    // Only call draw when then gui is changed
    noLoop();

}


function draw() {

    // this is a piece of cake
    background(0);
    fill(myColor);
    angleMode(DEGREES);
    arc(width/2, height/2, 100, 100, myAnngle/2, 360 - myAnngle/2, PIE);

}


// dynamically adjust the canvas to the window
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
