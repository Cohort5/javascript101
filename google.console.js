var myname = "Paul";
undefined
myname
"Paul"
alert(myname);
undefined
//alert(Hello myname); only works on a web browser
VM1188:1 Uncaught SyntaxError: missing ) after argument list
alert("Hello" myname);
VM1195:1 Uncaught SyntaxError: missing ) after argument list
alert("Hello " + myname);
undefined
console.log("Hello " + myname);
VM1213:1 Hello Paul
undefined
//google console