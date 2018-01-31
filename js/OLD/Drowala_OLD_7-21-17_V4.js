var ListX = [];
var ListY = [];
var ListS = [];
var ListSz = [];
var ListR = [];
var ListB = [];
var ListG = [];

var simle = ["bar", "trg", "ellips"];

var sizeO = 50;

var sizeOMin = 10;
var sizeOMax = 150;

var RedC = 255;
var BlueC = 255;
var GreenC = 255;

var RedCMin = 0;
var RedCMax = 255;
var BlueCMin = 0;
var BlueCMax = 255;
var GreenCMin = 0;
var GreenCMax = 255;

var bacONOFF = true;
var bacColer = '#00F1D3';

var FR = false;

var gui;

function setup() {
    var myCanvas = createCanvas(720, 400); // I save this to a variable so i can chage this about it
    myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer
    background(bacColer);

    gui = createGui('Tool\'s');
    gui.addGlobals('sizeO','RedC','GreenC','BlueC','bacColer','bacONOFF', 'simle');
}

function draw() {
    if (bacONOFF) {
        background(bacColer);
    }
    simble();
    if (!(mouseX <= 0 | mouseX >= width | mouseY <= 0 | mouseY >= height)) {
        drawSimbles(mouseX, mouseY, simle, sizeO, RedC, GreenC, BlueC);
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
            drawSimbles(ListX[i],ListY[i],ListS[i],ListSz[i],ListR[i],ListG[i],ListB[i]);
        }
    }else{
        if(!(FR)){
            console.log(error);
        }
    }
    FR = true;
}

function drawSimbles(Xc,Yc,Sb,Sz,rr,gr,br) {
    fill(rr,gr,br);
    if (Sb == "bar"){
        rect(Xc - (Sz/2), Yc - (Sz/2), Sz, Sz);
    }else if (Sb == "trg"){
        Sz = Sz/2;
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
        ListR.push(RedC);
        ListG.push(GreenC);
        ListB.push(BlueC);
    }
}

function save() {
    var nameFile = "Your_Fun";
    var FileType = "jpg";
    saveCanvas(nameFile, [jpg]);
}