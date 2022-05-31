noseX = 0;
noseY = 0;

function preload() {
  moustache = loadImage('https://i.postimg.cc/fyTB89bb/beard-and-moustache-adobe-express.png');
}

function setup() {
    canvas = createCanvas(500,400);
    canvas.position(500, 200);
    video = createCapture(VIDEO);
    video.size(500,400);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
  }
}

function draw() {
  image(video, 0, 0, 500, 400);
  image(moustache, noseX-90, noseY-30, 175, 160);
}

function take_snapshot(){
  save('myFilterImage.png');
}