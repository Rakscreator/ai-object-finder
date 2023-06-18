status = "";
input = "";

function setup(){
    canvas = createCanvas(650,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function start(){
    objectDectector = ml5.objectDectector("cocossd",modelloaded);
    document.getElementById("Mstats").innerHTML = "Model Status : Detecting Objects"
    input = document.getElementById("input").value;
    console.log("Provided input :"+input)
}
function modelloaded(){
    status = true;
    console.log("model loaded");
}
function draw(){
    image(video,0,0,650,500)
}