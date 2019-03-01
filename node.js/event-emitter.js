var events = require("events");
var util = require("util");

var Person = function(name){
    this.name = name;
};

util.inherits(Person, events.EventEmitter);

var paul = new Person("paul");
var dan = new Person("dan");
var joe = new Person("joe");

var people = [paul, dan, joe];

people.forEach(function(person){
    person.on("speak" , function(mssg){
        console.log(person.name + " said: " + mssg);
    });
});

paul.emit("speak", "hey dudes");
dan.emit("speak", "what's up");
joe.emit("speak", "see ya monday");


// second example - vs8
// // var myEmitter = new events.EventEmitter();

// // myEmitter.on("someEvent", function(mssg){
// //     console.log(mssg);
// // });

// // myEmitter.emit("someEvent", "the event was emitted");

// // first example - vs8
// // element.on("click" , function()){});  

