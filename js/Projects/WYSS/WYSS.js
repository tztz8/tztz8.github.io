// The URL where the data is at
var DataURLs = [
    'http://date.jsontest.com/',
    ''];
// the var where I am going to save the data at
var Data = null;

function setup() {// run ones

    Data = getData(DataURLs);

}

function draw() {// run every frame

}

function getData(URLr) {// get the data and sort the data
    // the lists
    var List1 = null;
    var List2 = null;

    // geting the data
    /*// (OLD)
    var request = new XMLHttpRequest();
    request.open('GET', URLr[1]);
    console.log(request);
    request.open('GET', URLr[2]);
    console.log(request);
    */
    for (var i = 0; i < 2; i++){
        var xhttp;
        if (window.XMLHttpRequest) {
            // code for modern browsers
            xhttp = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            xhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        xhttp.open("GET", URLr[i], true);
        xhttp.send();
        var wait_to_get = null;
        while(wait_to_get == null){
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    //document.getElementById("demo").innerHTML = this.responseText;
                    if (i == 0 ) List1 = this.responseText;
                    else if (i == 1) List2 = this.responseText;
                }
            };
            if (i == 0) wait_to_get = List1;
            if (i == 1) wait_to_get = List2;
        }
    }
    
    return [List1,List2];
}