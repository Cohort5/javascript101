//node fs-module - create, remove directory vs10

//step two - aSync, mkdir, rmdir, unlink

var fs = require("fs");
fs.unlink("./Test/writeMe.txt", function(){
fs.rmdir("Test");
});

// fs.mkdir("Test", function(){
//     fs.readFile("readMe.txt", "utf8", function(err, data){
//         fs.writeFile("./Test/writeMe.txt", data);
//  });
// });


//step one - Sync, mkdir, rmdir

// var fs = require("fs");

// fs.mkdirSync("Test"); to make directory
// fs.rmdirSync("Test"); to remove directory
