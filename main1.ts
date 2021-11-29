function doSomething(){
for(var i=0;i<5;i++){
console.log(i)
}
console.log('finally'+i);
}
doSomething();
//if you use let it will show error bcoz let is a block variable