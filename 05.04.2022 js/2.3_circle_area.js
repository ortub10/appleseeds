const circleArea = function(an){
    const PI = Math.PI;
    let areaCircle = PI*an**2
    console.log(areaCircle);
    console.log(Math.round(areaCircle * 100) / 100); 
};
circleArea(2);