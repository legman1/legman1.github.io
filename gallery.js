var imageNum1 = 0;
var imageArray1 = new Array ("proj1_1.png", "proj1_2.png", "proj1_3.png", "proj1_4.png", "proj1_5.png");
function next1() {
    imageNum1+=1; //add one onto imageNum1 each time next() is called
    if (imageNum1>4) {
        imageNum1=0;
    }
    console.log(imageArray1[imageNum1]);
    document.getElementById("proj1").src = "images/"+imageArray1[imageNum1];


}
function previous1(){
    console.log("previous");
    imageNum1--;
    if (imageNum1 <0) {
        imageNum1 = 4;
    }
    console.log(imageArray1[imageNum1]);
    document.getElementById("proj1").src = "images/"+ imageArray1[imageNum1];

}

var imageNum2 = 0;
var imageArray2 = new Array ("proj2_1.png", "proj2_2.png", "proj2_3.png", "proj2_4.png", "proj2_5.png");
function next2() {
    imageNum2+=1; //add one onto imageNum1 each time next() is called
    if (imageNum2>4) {
        imageNum2=0;
    }
    console.log(imageArray2[imageNum2]);
    document.getElementById("proj2").src = "images/"+imageArray2[imageNum2];


}
function previous2(){
    console.log("previous");
    imageNum2--;
    if (imageNum2 <0) {
        imageNum2 = 4;
    }
    console.log(imageArray2[imageNum2]);
    document.getElementById("proj2").src = "images/"+ imageArray2[imageNum2];

}
