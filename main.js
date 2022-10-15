noseX=0;
noseY=0;
difference=0;
rightWristX = 0;
leftWristX =0;



function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(600,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    
    background('#360ec7');
    fill("#c1d658");
    stroke("#c1d658");
    square(noseX, noseY, difference);
    document.getElementById("square").innerHTML = "Width & Height of the SQUARE is: " + difference + " px"; 
}

function modelLoaded()
{
    console.log('PoseNet is Initialised!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX + " nose y = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + "rightWristX" + rightWristX);
    }
}
 
