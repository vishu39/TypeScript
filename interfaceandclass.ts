// interface Point{
//     x:number,
//     y:number,
// }
// let drawPoint=(point:Point)=>{

// }
// drawPoint({x:1,y:2})

// Classes 

class Point{
    // x:number;  //delete for access modifier with const parameter
    // y:number;
    constructor(private x?:number,private y?:number){
// this.x=x;
// this.y=y;
    }
draw(){
console.log('X:'+ this.x + ',Y:' + this.y);
}
getDistance(another:Point){
}
}
//object
// let point=new Point();
// point.x=1;
// point.y=2;
// point.draw();

//constructor
let point=new Point(1,2);
point.draw();
//access modifier contain 3 type public private and protective

//accessModifier with constructor Parameters
//it will use private in the constructor