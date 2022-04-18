// Block 1
var b = 1;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;

    return otherFunction;

}

var firstResult = someFunction(9);
var result = firstResult(2);
console.log(result); // print 5 because b Varies to 5 

//Block 2
var a = 1;
function b2() {
    a = 10;
    return;
    function a() { }
}
b2();
console.log(a); // print 1 because the change of a in b2 Refers to function called a

// Block 3
let i;
for (i = 0; i < 3; i++) {
    const log = () => {
    console.log(i);
    }
setTimeout(log, 100);
}/*
print 3 times the number 3 because the code continue to run when the
function setTimeout is waiting and i become 3
*/
