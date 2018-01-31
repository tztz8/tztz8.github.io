//This program is meant to perform the following functions for the user
/*
	 This program uses the basic of the p5 libary
	to have place for the user draw something with 
	squares, triangles, and circle and to have 
	fun with some weird effect I found while making
	this program
	
	-Each time the user clicks on the window
	  it will add the cordinet of the mouse, 
	  and add a shape with the color, size, and type at the time to a
	  list
	
	-Each frame draws each object in the list 
	 made previous.
	
	-Each frame draws an object at where the mouse 
	 is at so the user have the idea of what it 
	 look like.
	 
	-Each frame clears the screen.
*/


// List of the objects placed down
var ListX = [];
var ListY = [];
var ListS = [];
var ListSz = [];
var ListOC = [];

// List of the type of objects
var simle = ["bar", "trg", "ellips"];
var simle_LS = ["bar", "trg", "ellips"];

// size of object
var sizeO = 50; // Default size
var sizeOMin = 10; // Min size
var sizeOMax = 150; // Max size

// Color of object
var ObjectColer = '#FFFFFF'; //Hexadecimal Colors

// background tool variable
var bacONOFF = true; // This is for saying if the background is on or not (drow the background on/off)
var bacColer = '#00F1D3'; // The color of the background
var bacImg = null; // This not done but what I am trying to do is set a img as a background

// for the draw (this is a maker to say if it has run one)
var FR = false; // this is use to stop saming error mesiges to the console

// size of the canvas
var screensizeW = 720;
var screensizeH = 400;

// This not done but what I am trying to do is set a img as a background
var filePPP;
var filePP;

// This a flag for seting thing to random for a trype efect
var Randmoe_Simle = false;

// This is for the gui tool bar libary
var gui;

// This is to change thing about the canvas
var myCanvas;

// This run ones as the JS start up
function setup() {
    myCanvas = createCanvas(screensizeW, screensizeH); // I save this to a variable so i can chage this about it
    myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer
    background(bacColer); // draw the background with the bacColer
	
	//This is seting up the GUI tool bar libary
    gui = createGui('Tool\'s');
    gui.addGlobals('sizeO','ObjectColer','Randmoe_Simle','bacColer','bacONOFF', 'simle');
}

// This run ever frame
function draw() {
	
	// Draw the background before every thing else
	// This not done but what I am trying to do is set a img as a background
    if (bacONOFF) {
        if(!(bacImg == null))
            setBacIMG();
        else {
            background(bacColer);
        }
    }
	
	// Draw ever object that was in the list (click)
    simble();
	
    if (!(mouseX <= 0 | mouseX >= width | mouseY <= 0 | mouseY >= height)) {// see if the mouse is in the canvas
        drawSimbles(mouseX, mouseY, simle, sizeO, ObjectColer);// draw the idea of how it will look if click
    }
}

function simble() {
    var pass;// Stop a error from hapening with this flag
    var error;// To save a error at
    var ListLangth;

    try {
        ListLangth = ListX.length; // geting how many object to be draw
        //OLD//console.log(ListLangth);
        pass = true;// say that work
    } catch (err) {
        pass = false;// say that it did't work
        error = err;// save the error mesege
    }

    if (pass){
		// going throw each object and draw it
        for (var i = 0; i < ListLangth; i++){
            drawSimbles(ListX[i],ListY[i],ListS[i],ListSz[i],ListOC[i]);
        }
    }else{// if not pass
        if(!(FR)){// stop spaming of the console window
            console.log(error);// send the error to the console window for debugging
        }
    }
    FR = true; // Set the First time run to true
}

// this is to draw the objects
function drawSimbles(Xc,Yc,Sb,Sz,rr) {
    fill(rr);// set the color of the object by recwest
    
	//set the object type and color to a random 
	if (Randmoe_Simle){
        Sb = random(simle_LS); //set the a radnom obkect
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