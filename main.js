img = "";

function preload() {
img = loadImage("loki.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();

    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw() {
    image(img, 0, 0, 640, 420);
}

function modelLoaded() {
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(img ,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}