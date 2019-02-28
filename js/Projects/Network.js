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

var socket;
var Tusers = 0;
var uusers;
var TusersFR = true;
var bsX;
var bsY;
var bsS;
var bsSz;
var bsOC;
var OUListX = [];
var OUListY = [];
var OUListS = [];
var OUListSz = [];
var OUListOC = [];

var gui;

var myCanvas;

function setup() {
    myCanvas = createCanvas(screensizeW, screensizeH); // I save this to a variable so i can chage this about it
    myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer
    background(bacColer);

    socket = io.connect('https://dcnhost.tftinker.tech:8192');
    socket.on('mouse', updatDrawingFS);
    socket.on('users', updateOtherUser);
    socket.on('Tusersb', function (data) {
        Tusers = data;
        OUListX = [];
        OUListY = [];
        OUListS = [];
        OUListSz = [];
        OUListOC = [];
        for(var i = 0; i < Tusers; i++){
            OUListX.push(0);
            OUListY.push(0);
            OUListS.push("null");
            OUListSz.push(0);
            OUListOC.push('#FFFFFF');
        }
        if (TusersFR){
            TusersFR = false;
            uusers = Tusers;
        }
    });
    setTimeout(CheckConnect, 500);

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
    simblev2(ListX, ListY, ListS, ListSz, ListOC);
    simblev2(OUListX, OUListY, OUListS, OUListSz, OUListOC);
    if (!(mouseX <= 0 | mouseX >= width | mouseY <= 0 | mouseY >= height)) {
        drawSimbles(mouseX, mouseY, simle, sizeO, ObjectColer);
        if (!(mouseX == bsX | mouseY == bsY | simle == bsS | sizeO == bsSz | ObjectColer == bsOC)) {
            updateServerMouse(mouseX, mouseY, simle, sizeO, ObjectColer);
            bsX = mouseX;
            bsY = mouseY;
            bsS = simle;
            bsSz = sizeO;
            bsOC = ObjectColer;
        }
    }
}

function numberofobjects(list) {
    var pass;
    var error;
    var ListLangth = 0;

    try {
        ListLangth = list.length;
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

function simblev2(lx,ly,ls,lsz,loc) {
    var ListLangth = numberofobjects(lx);
    if (!(ListLangth == 0)){
        for (var i = 0; i < ListLangth; i++){
            drawSimbles(lx[i],ly[i],ls[i],lsz[i],loc[i]);
        }
    }
    FR = true;
}

/*
function simble() {
    var ListLangth = numberofobjects(ListX);
    if (!(ListLangth == 0)){
        for (var i = 0; i < ListLangth; i++){
            drawSimbles(ListX[i],ListY[i],ListS[i],ListSz[i],ListOC[i]);
        }
    }
    FR = true;
}

function othereUsres() {
    //var ListLangth = numberofobjects(ListX);
    var Ousers = Tusers - 1;
    if (!(Ousers == 0)){
        if(true) {
            for (var i = 0; i < Tusers; i++) {
                drawSimbles(OUListX[i], OUListY[i], OUListS[i], OUListSz[i], OUListOC[i]);
            }
        }
    }
    FR = true;
}
*/
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
        updateServer()
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
        updateServer()
        //console.log("Run");
    }
    //console.log("not run");
}

//networking
function updatDrawingFS(data) {
    ListX = data.SListX;
    ListY = data.SListY;
    ListS = data.SListS;
    ListSz = data.SListSz;
    ListOC = data.SListOC;
    simblev2(ListX, ListY, ListS, ListSz, ListOC);
}

function CheckConnect () {
    //console.log('check 1', socket.connected);
    if (!socket.connected){
        alert("The server is not working at this time");
    }else{
        socket.emit('update', "resave");
    }
}

function updateServer() {
    var data = {
        SListX: ListX,
        SListY: ListY,
        SListS: ListS,
        SListSz: ListSz,
        SListOC: ListOC
    }
    socket.emit('mouse', data);
}

//networking see users
function updateServerMouse(mouseXR, mouseYR, smileD, sizeOR, undersoldD){
    var data2 = {
        userNumber: uusers,
        SmouseX: mouseXR,
        SmouseY: mouseYR,
        Ssimle: smileD,
        SsizeOR: sizeOR,
        SusersColer: undersoldD
    }
    socket.emit('user', data2);
    console.log("sent mouse data");
}

function updateOtherUser(data2){
    console.log("receive mouse data");
    //drawSimbles(mouseX, mouseY, simle, sizeO, ObjectColer);
    //drawSimbles(data2.SmouseX, data2.SmouseY, data2.Ssimle, data2.SsizeOR, data2.SusersColer);
    OUListX[data2.userNumber] = data2.SmouseX;
    OUListY[data2.userNumber] = data2.SmouseY;
    OUListS[data2.userNumber] = data2.Ssimle;
    OUListSz[data2.userNumber] = data2.SsizeOR;
    OUListOC[data2.userNumber] = data2.SusersColer;
}

function keyTyped() {

}
