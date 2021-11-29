class Point{
    constructor(private _x?:number,private _y?:number){
    }
draw(){
console.log('X:'+ this._x + ',Y:' + this._y);
}
get x(){
    return this;
}
set x(value){
    this._x=10;
}
}
let point=new Point(1,2);
let x=point.x;
point.draw();

