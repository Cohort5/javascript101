//node fs-module - readMe & writeMe files vs9 

//third step - aSynchronis, continues to read code vs9 - non blocking code
var fs = require("fs");

fs.readFile("readMe.txt", "utf8", function(err, data){
    fs.writeFile("writeMe.txt", data);
    
// });

// console.log(data);
// console.log("test");

// fs.writeFile("writeMe.txt", readMe);


// //second step - writeMe vs9
// var fs = require("fs");

// var readMe = fs.readFileSync("readMe.txt", "utf8");
// fs.writeFileSync("writeMe.txt", readMe);


// fist step - readMe vs9
// var fs = require("fs");

// var readMe = fs.readFileSync("readMe.txt", "utf8");
// console.log(readMe);


