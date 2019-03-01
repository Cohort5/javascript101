var time = 0;

var timer = setInterval(function(){
    time += 2;
    console.log(time + " seconds have passed");
    if (time > 5){
        clearInterval(timer);
    }
    
}, 2000);

// https://nodejs.org/api/globals.html

//node globalobject.js/ - to run file
// control and c - to end running a file in node

// console.log(__dirname);   - to print directory path in node
// console.log(__filename);  - to print filename path in node

//require, exports