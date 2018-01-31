var ListX = [];
var ListY = [];
var ListS = [];
var ListSz = [];

var simle = ["bar", "trg", "ellips"];

var sizeO = 50;

var sizeOMin = 10;
var sizeOMax = 150;

var FR = false;

var gui;

function setup() {
    var myCanvas = createCanvas(720, 400); // I save this to a variable so i can chage this about it
    myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer
    background('#00F1D3');

    gui = createGui('Tool\'s');
    gui.addGlobals('sizeO', 'simle');
}

function draw() {
    background('#00F1D3');
    simble();
    if (!(mouseX <= 0 | mouseX >= width | mouseY <= 0 | mouseY >= height)) {
        drawSimbles(mouseX, mouseY, simle, sizeO);
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
            drawSimbles(ListX[i],ListY[i],ListS[i],ListSz[i]);
        }
    }else{
        if(!(FR)){
            console.log(error);
        }
    }
    FR = true;
}

function drawSimbles(Xc,Yc,Sb,Sz) {
    if (Sb == "bar"){
        rect(Xc - (Sz/2), Yc - (Sz/2), Sz, Sz);
    }else if (Sb == "trg"){
        triangle(Xc, Yc - Sz, Xc - Sz, Yc + Sz, Xc + Sz, Yc + Sz);
    }else if (Sb == "ellips"){
        ellipse(Xc,Yc,Sz,Sz);
    }
}

function mousePressed() {
    if (!(mouseX <= 0 | mouseX >= width | mouseY <= 0 | mouseY >= height)) {
        ListX.push(mouseX);
        ListY.push(mouseY);
        ListS.push(simle);
        ListSz.push(sizeO);
    }
}