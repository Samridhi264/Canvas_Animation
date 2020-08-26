const canvas = document.getElementById('bubble__canvas');
const context = canvas.getContext('2d');
let circles = [];
for(let i=0;i<70;i++){

    let circleData = {};
   circleData.speed = Math.random()*2;
    circleData.radius = Math.random()*30;
    circleData.color = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.75)`;
    
    circleData.x = Math.random()*1300;
    circleData.y = Math.random()*600;

    circleData.xv = Math.random()*5;
    circleData.yv = Math.random()*5;
    circleData.x_flag = 1;
    circleData.y_flag = 1;

    circles.push(circleData);
}
function startAnimation(){
    context.clearRect(0,0,1300,600);
    for(i=0;i<circles.length;i++){
        context.beginPath();
        context.arc(circles[i].x,circles[i].y,circles[i].radius,0,2*Math.PI);
        context.fillStyle = circles[i].color;
        context.fill();
    }
    moveCircles();
    window.requestAnimationFrame(startAnimation);
}
function moveCircles(){
    for(let i=0;i<circles.length;i++){
        if((circles[i].x+circles[i].xv)>=1300)
        {
            circles[i].x_flag = 1 
        }

        if((circles[i].y+circles[i].yv)>=600){
            circles[i].y_flag = 1
        }
        
        if((circles[i].x-circles[i].xv)<=0){
            circles[i].x_flag = 0
        }

        if((circles[i].y-circles[i].yv)<=0){
            circles[i].y_flag = 0
        }
        


        
        if(circles[i].x_flag === 1){
            circles[i].x -= circles[i].xv;
        }
        if(circles[i].y_flag === 1){
               circles[i].y -= circles[i].yv;
        }
        if(circles[i].y_flag === 0){
            circles[i].y += circles[i].yv;
        }
        if(circles[i].x_flag === 0){
            circles[i].x += circles[i].xv;
        }

        
    }

}
startAnimation();
