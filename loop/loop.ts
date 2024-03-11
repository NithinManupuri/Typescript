var index:number =1;
let i:number=1;
for(var index=1;index<3;index++){
    console.log("index :"+index);
}
console.log(index);
//we get index is 3 this is the loophole of this var to overcome this let keyword is used to declare the variable is the block scope
for(let i=1;i<3;i++){
    console.log("index :"+i);
}
console.log(i);