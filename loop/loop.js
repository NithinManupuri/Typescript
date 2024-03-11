var index = 1;
var i = 1;
for (var index = 1; index < 3; index++) {
    console.log("index :" + index);
}
console.log(index);
//we get index is 3 this is the loophole of this var to overcome this let keyword is used to declare the variable is the block scope
for (var i_1 = 1; i_1 < 3; i_1++) {
    console.log("index :" + i_1);
}
console.log(i);
