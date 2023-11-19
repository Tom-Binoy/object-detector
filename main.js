input='';

function setup(){
    canvas=createCanvas(500,400)
    canvas.center()

    video=createCapture(VIDEO)
    video.hide()

    object=ml5.objectDetetor('cocossd',modelloaded)
    $('#eg').modal('hide')
}
function modelloaded(){
    console.log('Model Loaded')
}
function draw(){
    video1=video
    Image(video1,0,0,500,400)
}
function start(){
    input=document.getElementById('write').value
    object.detect(video1,gotResult)
}
function gotResult(error,result){
    if(error){
        console.error(error)
    }else{
        (objects.some((obj) => obj.label === input) ? show():modelloaded())
    }

}
function show(){
    document.getElementById('img').src=video1
     $('#yes').modal('show')
}