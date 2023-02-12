function setup() {
    print('hello world');
    createCanvas(400, 400, WEBGL);
    frameRate(30); 
}
let colorR = 117; //on choisi une valeur de rouge
let sens = 0; //défini si cette valeur augmente ou baisse
let colorLine = 0; //couleur du stroke

function draw() {
    background(50,50,50);
    ambientLight(0);
    if(colorR == 255){
        sens = 1;
    }
    if(colorR == 117){
        sens = 0; 
    }
    if(sens == 0){
        colorR++;
        colorLine = 255-(colorR-117);
    }
    else{
        colorR--;
        colorLine = 117+(255-colorR);
    }
    let locX = mouseX - width / 2;
    let locY = mouseY - height / 2;
    pointLight(colorR,123,200, locX, locY, 100);
    stroke(colorLine,123,200);
    strokeWeight(0.5);
    emissiveMaterial(colorR,123,200);
    shininess(50);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    torus(80,30,6,5);
}
