var Lis1 = [];
var Lis2 = [];

var langthnn = 150;

var End = [];

function setup() {
    var myCanvas = createCanvas(100, langthnn*10); // I save this to a variable so i can chage this about it
    myCanvas.parent('myContainer'); // I am tell the p5 scrip to put the canvas where i have the id of myContainer
    background('#00F1D3');

    Lis1 = MakeMultableList(3, langthnn);
    Lis2 = MakeMultableList(5, langthnn);

    for (var i = 1; i < langthnn+1; i++){
        var ch = false;
        var add = "";
        for (var i2 = 0; i2 < Lis1.length; i2++){
            if (i == Lis1[i2]){
                add = "Fizz";
                ch = true;
                break;
            }
        }
        for (var i2 = 0; i2 < Lis2.length; i2++){
            if (i == Lis2[i2]){
                add = add + "buzz";
                ch = true;
                break;
            }
        }
        if (!ch){
            add = i;
        }
        End.push(add);
    }

    console.log(End);

    for (var i = 0; i < End.length; i++){
        text(End[i], (width/2)-15, (i+1)*10);
    }
}

function draw() {

}

function MakeMultableList(Num, Lang) {
    var lis =[];
    var be = 0;
    var rund = true;
    while (rund){
        be = be + Num;
        //lis.push(be);
        if (be > Lang){
            rund = false;
        }else {
            lis.push(be);
        }
    }
    return lis;
}