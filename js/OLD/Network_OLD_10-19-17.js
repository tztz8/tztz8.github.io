var socket;

function setup() {
    myCanvas = createCanvas(720, 400); // I save this to a variable so i can chage this about it
    myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer

    background(51);

    socket = io.connect('http://10.0.0.50:8192');
    socket.on('mouse', updatDrawing);
    setTimeout(CheckConnect, 500);
}

function draw() {
    //Sellipse(mouseX, mouseY, 60, 60);
}

function mousePressed() {
    fill(255,255,255);
    ellipse(mouseX, mouseY, 60, 60);

    var data = {
        x: mouseX,
        y: mouseY
    }

    socket.emit('mouse', data);

}

function updatDrawing(data) {
    fill(255,0,100);
    ellipse(data.x, data.y, 36,36);
}

function CheckConnect () {
    //console.log('check 1', socket.connected);
    if (!socket.connected){
        alert("The server is not working at this time");
    }
}