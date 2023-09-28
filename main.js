leftWristX = 0;
rightWristX = 0;
difference = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(500,500);

    canvas = createCanvas(700,600);
    canvas.position(600,150);

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded()
{
    console.log("Posenet is intialized");
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x ;
         rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw()
{
    background('grey');

    textSize(difference);
    fill('black');
    text('Jiya',50,400);
}