const avg = (point1, point2, point3) => (point1 + point2 + point3)/3
let scoreJhon = avg(89,120,103);
let scoreMike = avg(116,94,123);
// console.log(scoreMike);
if(scoreJhon > scoreMike){
    console.log(`The winner are Jhon with ${scoreJhon} points`);
}
else if(scoreJhon < scoreMike){
    console.log(`The winner are Mike with ${scoreMike} points`);
}
else {console.log("It's a draw");}

//extra 
console.log('****************extra**********************');
let scoreMary = avg(120,135,98);
    if(scoreJhon > scoreMike && scoreJhon> scoreMary){
        console.log(`The winner are Jhon with ${scoreJhon} points`);
    } else if(scoreMike> scoreJhon && scoreMike>scoreMary) {
        console.log(`The winner are Mike with ${scoreMike} points`);
    } else if(scoreMary> scoreJhon && scoreMary>scoreMike) {
        console.log(`The winner are Mary with ${scoreMary} points`);
    } else {console.log('draw'); }
