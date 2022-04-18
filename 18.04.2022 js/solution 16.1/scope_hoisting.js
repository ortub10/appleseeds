//Block 1
function funcA() {
    console.log(a);// print undefined because a declared and implemented after console
    console.log(foo());// print 2
    var a = 1;
    console.log(a); // print 1;
    function foo() {
    return 2;
    }
   }
   funcA();

// Block 2
var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',

        getFullName: function () {
            return this.fullName;
        }
     }
};
console.log(obj.prop.getFullName());// print 'Aurelio De Rosa' because the closer name in prop;
var test = obj.prop.getFullName;
console.log(test()); // print 'John Doe' because test value in global

// Block 3
function funcB() {
    let a = b = 0;
    a++;
    return a;
   }
   funcB();
   console.log(typeof a);//undefined ,because a value belongs to funcB and he let 
   console.log(typeof b);//number ,because b value in global

// Block 4
function funcC() {
 console.log("1");
}
funcC();// print 2 ,because last function overide the rest functions with same name
function funcC() {
 console.log("2");
}
funcC();// print 2 

// Block 5
function funcD1() {
    d = 1;
   }
funcD1();
console.log(d); //print 1 ,because d value in global

function funcD2() {
    var e = 1;
   }
funcD2();
// console.log(e); //undefined ,because e value belongs to funcD2 and he var

// Block 6
function funcE() {
    console.log("Value of f in local scope: ", f); // f = 1, because activation of funcE came after the declare of f
   }
   console.log("Value of f in global scope: ", f); // f = undefined, because declared and implemented after consol
   var f = 1;
   funcE();

   