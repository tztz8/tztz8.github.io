var ListX = [];
var ListY = [];
var ListS = [];

var simle = ["bar", "trg"];

var bar = 50;

var barMin = 10;
var barMax = 150;

var trg = 30;

var trgMin = 10;
var trgMax = 150;

var FR = false;

var gui;

function setup() {
    var myCanvas = createCanvas(720, 400); // I save this to a variable so i can chage this about it
    myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer
    background('#00F1D3');

    gui = createGui('Tool\'s');
    gui.addGlobals('bar', 'trg', 'simle');
}

function draw() {
    background('#00F1D3');
    simble();
    if (!(mouseX <= 0 | mouseX >= width | mouseY <= 0 | mouseY >= height)) {
        drawSimbles(mouseX, mouseY, simle);
    }
}

function simble() {
    var pass;
    var error;
    var ListLangth;

    try {
        ListLangth = ListX.length;
        //console.log(ListLangth);
        pass = true;
    } catch (err) {
        pass = false;
        error = err;
    }

    if (pass){
        for (var i = 0; i < ListLangth; i++){
            drawSimbles(ListX[i],ListY[i],ListS[i]);
        }
    }else{
        if(!(FR)){
            console.log(error);
        }
    }
    FR = true;
}

function drawSimbles(Xc,Yc,Sb) {
    if (Sb == "bar"){
        rect(Xc - (bar/2), Yc - (bar/2), bar, bar);
    }else if (Sb == "trg"){
        triangle(Xc, Yc - trg, Xc - trg, Yc + trg, Xc + trg, Yc + trg);
    }
}

function mousePressed() {
    if (!(mouseX <= 0 | mouseX >= width | mouseY <= 0 | mouseY >= height)) {
        ListX.push(mouseX);
        ListY.push(mouseY);
        ListS.push(simle);
    }
}