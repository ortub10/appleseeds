/*
One of the major differences between require() and import() is that require()
can be called from anywhere inside the program whereas import() cannot be called
conditionally, it always runs at the beginning of the file. 

To use the require() statement, a module must be saved with .js 
extension as opposed to .mjs when the import() statement is used.


ES modules can be loaded dynamically via the import() function unlike require().
 */
const funcs = require("./functions.js");
console.log(funcs.add(5, 4));
console.log(funcs.hello());
console.log(funcs.duplicate(5, 4));
