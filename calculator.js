status = "";
objects = [];

function preload()
{
    books = loadImage("calculator.jpeg");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
}

function gotResults(results)
{
    console.log(results);
    objects = results;
}

function draw()
{
    if(results.length > 0)
    {
        for(i=0; i < results.length; i++)
        {
            percentage = floor(results[0].confidence * 100);
            text(objects[i] + "" + percentage + "%", objects[i] + 15, objects[i] + 15);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}