let randNum = Math.floor(Math.random()*100) +1
console.log(randNum);

let answer = Number(prompt("write a number"));
console.log("User => Answer: " +answer);

let found = false;
let chance = 5;

while (found == false) {
if (answer < randNum && chance>0) {
    chance --;
    console.log(answer + " is smaller and you have " + chance +" life left" );
    answer = Number(prompt("write a number"));

}
else if (answer > randNum&&chance>0) {
    chance --;
    console.log(answer + " is bigger " + chance +"life left" );
    answer = Number(prompt("write a number"));
}
else if (chance<=0){
    console.log("You don t have anymore life and you loose");
    found=true;
}
else {
    console.log("You found it");
    found = true;
}
}