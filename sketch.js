// 마우스X축으로 제자리에서 카메라 이동하며 공간 탐색하기
// 드래그로 월드를 움직이며 360도 돌아보기

let capture;
let vid;
let ttt;
let hehe;
let activatedvideo = 0;

function vidLoad1() {
  activatedvideo++;
}
function vidLoad2() {
  activatedvideo++;
}
function vidLoad3() {
  activatedvideo++;
}
function vidLoad4() {
  activatedvideo++;
}

function preload() {
  capture = createVideo('build_1_1.mp4', vidLoad1);
  capture.hide();
  capture.loop();
  capture.elt.muted = true;
  
  vid = createVideo('build_2_1.mp4', vidLoad2);
  vid.hide();
  vid.loop();
  vid.elt.muted = true;
  
  ttt = createVideo('zoom.mp4', vidLoad3);
  ttt.hide();
  ttt.loop();
  ttt.elt.muted = true;
  
  hehe = createVideo('zoom zoom.mp4', vidLoad4);
  hehe.hide();
  hehe.loop();
  hehe.elt.muted = true;
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  noStroke();
  background(200);
  
  if (activatedvideo>=4) {

    //좌우 움직이는 카메라
    let camX = map(mouseX,0, width,-600, 600);
    camera(camX, 0,(height/2) / tan(PI/6), 0, 0, 0, 0, 1, 0);


    /* 
    // 사라졌다 나타났다
    let fov = PI/3;
    let  cameraZ = (height/2.0) / tan(fov / 2.0);
    perspective(fov, width / height, cameraZ / 10.0, mouseX);
    */


    // 카메라 비율 확대
    let fov = PI/2.5;
    let cameraZ = (height/2.0) / tan(fov / 2.0);
    perspective(fov, width / height, cameraZ / 10.0, cameraZ * 10.0);


    //줌인 줌아웃
    //let fov = map(mouseX, 0, width, 0, PI);
    //let  cameraZ = (height/2.0) / tan(PI / 2.5);
    //perspective(fov, width / height, cameraZ / 10.0, cameraZ * 10.0);



    // +X 오른쪽, -X 왼쪽
    // +Y 아래로 내려감,-Y 위로 올라감
    // +Z 뒤로 감, -Z 앞으로 감

    /*
    push();
    translate(100, 0, 0);
    texture(capture);
    //box(3,500,800);
    beginShape();
    vertex(-100, -100, 110,  150, 150);
    vertex(100, -100, 0,   550, 250);
    vertex(100, 100, 110,    550, 450);
    vertex(-100, 100, 0,   150, 450);
    endShape();
    
    pop();
    */
    

    // 우측면
    push();
    translate(600, 0, 0);
    texture(capture);
    box(2,500,800);
    pop();

    push();
    translate(700, -300, -500);
    texture(hehe);
    box(2,500,1500);
    pop();
    //줌인 줌아웃용
    push();
    translate(200, -300, -800);
    texture(capture);
    box(2,500,1500);
    pop();
    
    push();
    translate(1400, -300, -1500);
    texture(hehe);
    box(2,3000,4500);
    pop();

    push();
    translate(850, 690, -3800);
    texture(hehe);
    box(2,530,1700);
    pop();

    push();
    translate(940, 500, -4500);
    texture(hehe);
    box(2,530,2000);
    pop();

    push();
    translate(550, -500, -800);
    texture(capture);
    box(2,200,700);
    pop();

    push();
    translate(500, -100, 200);
    texture(vid);
    box(2, 200, 600);
    pop();

    push();
    translate(600, 100, -1500);
    texture(capture);
    box(2, 400, 1000);
    pop();

    push();
    translate(900, 150, -1000);
    texture(capture);
    box(2, 200, 900);
    pop();

    push();
    translate(1000, -400, -1900);
    texture(ttt);
    box(2, 500, 2000);
    pop();

    push();
    translate(1100, 350, -1600);
    texture(ttt);
    box(2, 400, 1800);
    pop();

    push();
    translate(1400, -70, -3500);
    texture(hehe);
    box(2, 400, 2500);
    pop();

    push();
    translate(800, -70, 100);
    texture(ttt);
    box(2, 290, 1400);
    pop();

    push();
    translate(650, -70, -3000);
    texture(hehe);
    box(2, 390, 2000);
    pop();

    push();
    translate(900, 500, -2800);
    texture(hehe);
    box(2, 390, 1800);
    pop();

    push();
    translate(650, 900, -3600);
    texture(ttt);
    box(2, 500, 1600);
    pop();

    push();
    translate(860, -500, -3300);
    texture(hehe);
    box(2, 470, 3000);
    pop();

    push();
    translate(940, -1200, -3400);
    texture(hehe);
    box(2, 890, 3000);
    pop();

    push();
    translate(765, 650, -30);
    texture(vid);
    box(2, 290, 900);
    pop();

    push();
    translate(835, 409, -70);
    texture(vid);
    box(2, 140, 1200);
    pop();

    //좌측면
    push();
    translate(-500, 200, 0);
    texture(capture);
    box(2, 200, 400);
    pop();
    
    push();
    translate(-1300, 200, 0);
    texture(hehe);
    box(2, 2500, 4000);
    pop();


    push();
    translate(-680, 500, 250);
    texture(ttt);
    box(2, 400, 1400);
    pop();

    push();
    translate(-100, 400, -2900);
    texture(ttt);
    box(2, 400, 1400);
    pop();

    push();
    translate(-820, -800, -4800);
    texture(hehe);
    box(2, 420, 2500);
    pop();

    push();
    translate(-720, 200, 500);
    texture(hehe);
    box(2, 310, 1500);
    pop();

    push();
    translate(-720, 200, -5600);
    texture(hehe);
    box(2, 420, 1830);
    pop();

    push();
    translate(-300, -200, 500);
    texture(vid);
    box(2, 200, 1100);
    pop();

    push();
    translate(150, -200, -3000);
    texture(capture);
    box(2, 200, 1100);
    pop();

    push();
    translate(-340, -100, 200);
    texture(capture);
    box(2, 150, 400);
    pop();

    push();
    translate(100, -100, -990);
    texture(capture);
    box(2, 300, 600);
    pop();

    push();
    translate(-250, -80, 200);
    texture(capture);
    box(2, 150, 900);
    pop();

    push();
    translate(-300, 200, 200);
    texture(capture);
    box(2, 150, 500);
    pop();

    push();
    translate(-550, 100,-500);
    texture(vid);
    box(2, 700, 700);
    pop();

    push();
    translate(-450, 100, -1500);
    texture(vid);
    box(2, 400, 1000);
    pop();

    push();
    translate(-750, 400, -1900);
    texture(vid);
    box(2, 700, 1700);
    pop();

    push();
    translate(-1000, 400, -1200);
    texture(vid);
    box(2, 400, 1000);
    pop();

    push();
    translate(-760, 900, -4500);
    texture(hehe);
    box(2, 1000, 4000);
    pop();

    push();
    translate(60, 100, -4300);
    texture(hehe);
    box(2, 500, 1400);
    pop();


    push();
    translate(-900, -500, -2500);
    texture(hehe);
    box(2, 800, 2000);
    pop();

    push();
    translate(-900, 200, -200);
    texture(vid);
    box(2, 400, 1000);
    pop();

    push();
    translate(-900, -600, -4000);
    texture(hehe);
    box(2, 400, 1900);
    pop();

    push();
    translate(-750, -80, -300);
    texture(capture);
    box(2, 340, 1300);
    pop();

    push();
    translate(-630, -200, -3900);
    texture(hehe);
    box(2, 530, 2500);
    pop();

    push();
    translate(-780, 30, -4000);
    texture(hehe);
    box(2, 370, 2300);
    pop();

    //바닥 // (X,+Y,Z)
    push();
    translate(-200, 600, -1500);
    texture(vid);
    box(300, 2, 700);
    pop();
    
    push();
    translate(-200, 1300, -1200);
    texture(hehe);
    box(3000, 2, 3500);
    pop();

    push();
    translate(-100, 830, 700);
    texture(vid);
    box(320, 2, 1400);
    pop();

    push();
    translate(200, 830, 640);
    texture(capture);
    box(320, 2, 800);
    pop();

    push();
    translate(4, 700, 400);
    texture(vid);
    box(700, 2, 700);
    pop();

    push();
    translate(300, 450, 10);
    texture(capture);
    box(400, 2, 800);
    pop();

    push();
    translate(-200, 500, 700);
    texture(vid);
    box(300, 2, 1000);
    pop();

    push();
    translate(500, 600, 300);
    texture(vid);
    box(300, 2, 1000);
    pop();

    push();
    translate(-400, 700, -600);
    texture(ttt);
    box(500, 2, 1000);
    pop();

    push();
    translate(500, 400, -700);
    texture(hehe);
    box(500, 2, 1500);
    pop();

    push();
    translate(200, 550, 300);
    texture(hehe);
    box(300, 2, 2000);
    pop();

    push();
    translate(-200, 800,-900);
    texture(hehe);
    box(300, 2, 1500);
    pop();

    push();
    translate(-60, 900,-1700);
    texture(ttt);
    box(300, 2, 1500);
    pop();

    push();
    translate(-40, 1200,-3000);
    texture(ttt);
    box(900, 2, 1500);
    pop();

    push();
    translate(-700, 1400,-3500);
    texture(hehe);
    box(1000, 2, 2000);
    pop();

    push();
    translate(300, 800,-3200);
    texture(ttt);
    box(200, 2, 1200);
    pop();

    push();
    translate(-500, 650, 200);
    texture(ttt);
    box(200, 2, 900);
    pop();

    push();
    translate(600, 1000,-2900);
    texture(hehe);
    box(900, 2, 1800);
    pop();

    push();
    translate(650, 1000, 100);
    texture(hehe);
    box(340, 2, 1200);
    pop();

    push();
    translate(1000, -1400, -3500);
    texture(hehe);
    box(400, 2, 1900);
    pop();

    push();
    translate(-640, 1000, -400);
    texture(vid);
    box(560, 2, 1200);
    pop();


    //윗면 // (X,-Y,Z)
    push();
    translate(550, -1200,-2500);
    texture(vid);
    box(420, 2, 1000);
    pop();
    
    push();
    translate(550, -1900,-1000);
    texture(hehe);
    box(1500, 2, 5500);
    pop();
    
    push();
    translate(-1250, -2500,-1000);
    texture(hehe);
    box(2500, 2, 4500);
    pop();

    push();
    translate(600, -1000,-1000);
    texture(vid);
    box(300, 2, 1200);
    pop();

    push();
    translate(-600, -950,-1300);
    texture(vid);
    box(450, 2, 1100);
    pop();

    push();
    translate(-200, -800,-1300);
    texture(vid);
    box(600, 2, 1100);
    pop();

    push();
    translate(-200, -600,-1100);
    texture(vid);
    box(200, 2, 700);
    pop();

    push();
    translate(400, -500,-500);
    texture(vid);
    box(200, 2, 700);
    pop();

    push();
    translate(300, -650,-200);
    texture(capture);
    box(500, 2, 900);
    pop();

    push();
    translate(300, -800,-1800);
    texture(hehe);
    box(300, 2, 1500);
    pop();

    push();
    translate(400, -900, 500);
    texture(vid);
    box(300, 2, 1100);
    pop();

    push();
    translate(200, -770, 200);
    texture(vid);
    box(400, 2, 970);
    pop();

    push();
    translate(-400, -600, 200);
    texture(hehe);
    box(200, 2, 800);
    pop();

    push();
    translate(-350, -800, 200);
    texture(capture);
    box(500, 2, 500);
    pop();

    push();
    translate(-150, -750, -400);
    texture(capture);
    box(250, 2, 800);
    pop();

    push();
    translate(-20, -890, -3000);
    texture(hehe);
    box(350, 2, 2500);
    pop();

    push();
    translate(-900, -890, -1700);
    texture(capture);
    box(350, 2, 900);
    pop();

    push();
    translate(-700, -1260, -3300);
    texture(hehe);
    box(800, 2, 2000);
    pop();

    push();
    translate(790, -1060, -3900);
    texture(hehe);
    box(400, 2, 2000);
    pop();

    push();
    translate(-230, -990, 250);
    texture(hehe);
    box(380, 2, 1840);
    pop();

    push();
    translate(680, -730, 130);
    texture(hehe);
    box(290, 2, 890);
    pop();


    
    //월드를 움직이도록 드래그
    let radius = width * 1.5;
    orbitControl();

    normalMaterial();
    translate(0, 0, -600);
    for (let i = 0; i <= 12; i++) {
      for (let j = 0; j <= 12; j++) {
        push();
        let a = (j / 12) * PI;
        let b = (i / 12) * PI;
        translate(
          sin(2 * a) * radius * sin(b),
          (cos(b) * radius) / 2,
          cos(2 * a) * radius * sin(b)
        );

        pop();
      }
    }
    
    
  }
}