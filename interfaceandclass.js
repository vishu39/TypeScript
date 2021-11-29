// interface Point{
//     x:number,
//     y:number,
// }
// let drawPoint=(point:Point)=>{
// }
// drawPoint({x:1,y:2})
// Classes 
var Point = /** @class */ (function () {
    // x:number;  //delete for access modifier with const parameter
    // y:number;
    function Point(x, y) {
        this.x = x;
        this.y = y;
        // this.x=x;
        // this.y=y;
    }
    Point.prototype.draw = function () {
        console.log('X:' + this.x + ',Y:' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
//object
// let point=new Point();
// point.x=1;
// point.y=2;
// point.draw();
//constructor
var point = new Point(1, 2);
point.draw();
//access modifier contain 3 type public private and protective
//accessModifier with constructor Parameters
//it will use private in the constructor
