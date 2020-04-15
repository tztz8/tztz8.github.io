var ListX = [];
var ListY = [];
var ListS = [];
var ListSz = [];
var ListOC = [];

var simle = ["bar", "trg", "ellips"];
var simle_LS = simle;

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

var filePPP;
var filePP;

var Randmoe_Simle = false;

var gui;

var myCanvas;

function setup() {
    myCanvas = createCanvas(screensizeW, screensizeH); // I save this to a variable so i can chage this about it
    myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer
    background(bacColer);

    gui = createGui('Tool\'s');
    gui.addGlobals('sizeO','ObjectColer','Randmoe_Simle','bacColer','bacONOFF', 'simle');
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

function numberofobjects() {
    var pass;
    var error;
    var ListLangth = 0;

    try {
        ListLangth = ListX.length;
        //console.log(ListLangth);
        pass = true;
    } catch (err) {
        pass = false;
        error = err;
    }

    if (!pass){
        if(!(FR)){
            console.log(error);
        }
    }
    return ListLangth;
}

function simble() {
    var ListLangth = numberofobjects();
    if (!(ListLangth == 0)){
        for (var i = 0; i < ListLangth; i++){
            drawSimbles(ListX[i],ListY[i],ListS[i],ListSz[i],ListOC[i]);
        }
    }
    FR = true;
}

function drawSimbles(Xc,Yc,Sb,Sz,rr) {
    fill(rr);
    if (Randmoe_Simle){
        Sb = random(simle_LS);
        fill(random(0,255),random(0,255),random(0,255));
    }

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
    filePPP = document.getElementById("filepc");
    filePP = filePPP.files[0];
    bacImg = loadImage(filePP);
}

function removeLastObject() {
    var numberoo = numberofobjects();
    if (!(numberoo == 0)){
        ListX.pop();
        ListY.pop();
        ListS.pop();
        ListSz.pop();
        ListOC.pop();
        //console.log("Run");
    }
    //console.log("not run");
}

function keyTyped() {

}