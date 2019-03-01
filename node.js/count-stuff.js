//three types of module patterns vs7
var counter = function(arr){
    return "There are " + arr.length + " elements in array";
};

var adder = function(a,b){
    return `The sum of the two numbers is ${a+b}`;
    
};

var pi = 3.142;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi,
};




// // step two vs7
// module.exports.counter = function(arr){
//     return "There are " + arr.length + " elements in array";
// };

// module.exports.adder = function(a,b){
//     return `The sum of the two numbers is ${a+b}`;
    
// };

// module.exports.pi = 3.142;


// step one vs7
// var counter = function(arr){
//     return "There are " + arr.length + " elements in array";
// };

// var adder = function(a,b){
//     return `The sum of the two numbers is ${a+b}`;
    
// };

// var pi = 3.142;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;

//module-require in vs6

// console.log(counter(["Paul", "Brete", "Dan", "Christian", "Melissa", "Alejandra", "Josh", "Joe"]));

// require("./module-require");