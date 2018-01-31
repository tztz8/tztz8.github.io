var ListX = [];
var ListY = [];
var ListS = [];
var ListSz = [];
var ListOC = [];

var simle = ["bar", "trg", "ellips"];

var sizeO = 50;

var sizeOMin = 10;
var sizeOMax = 150;

var ObjectColer = '#FFFFFF';

var bacONOFF = true;
var bacColer = '#00F1D3';
var bacImg = null;

var FR = false;

var screensizeW = 720;
var screensizeH = 400;

var gui;

var myCanvas;

function setup() {
    myCanvas = createCanvas(screensizeW, screensizeH); // I save this to a variable so i can chage this about it
    myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer
    background(bacColer);

    gui = createGui('Tool\'s');
    gui.addGlobals('sizeO','ObjectColer','bacColer','bacONOFF', 'simle');
}

function draw() {
    if (bacONOFF) {
        if(!(bacImg == null))
            setBacIMG();
        else {
            background(bacColer);
        }
    }
    simble();
    if (!(mouseX <= 0 | mouseX >= width | mouseY <= 0 | mouseY >= height)) {
        drawSimbles(mouseX, mouseY, simle, sizeO, ObjectColer);
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
            drawSimbles(ListX[i],ListY[i],ListS[i],ListSz[i],ListOC[i]);
        }
    }else{
        if(!(FR)){
            console.log(error);
        }
    }
    FR = true;
}

function drawSimbles(Xc,Yc,Sb,Sz,rr) {
    fill(rr);
    if (Sb == "bar"){
        rect(Xc - (Sz/2), Yc - (Sz/2), Sz, Sz);
    }else if (Sb == "trg"){
        Sz = Sz/2;
        triangle(Xc, Yc - Sz, Xc - Sz, Yc + Sz, Xc + Sz, Yc + Sz);
    }else if (Sb == "ellips"){
        ellipse(Xc,Yc,Sz,Sz);
    }
}

function setBacIMG() {
    try {
        background(bacImg);
    }catch(err) {
        background(bacColer);
        if (!(FR)){
            console.log(err);
        }
    }
}

function mousePressed() {
    if (!(mouseX <= 0 | mouseX >= width | mouseY <= 0 | mouseY >= height)) {
        ListX.push(mouseX);
        ListY.push(mouseY);
        ListS.push(simle);
        ListSz.push(sizeO);
        ListOC.push(ObjectColer);
    }
}

function saveDDD() {
    saveCanvas();
}


function setIMG() {
    bacImg = loadImage("../img/image.jpg");
}