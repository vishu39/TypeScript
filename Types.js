// let count=5;
// count='a';    //it will show error
// let a:number;
// a=1;
// a=true;
// a='a';
var ColorRed = 0;
var ColorBlue = 1;
var ColorGreen = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["purple"] = 3] = "purple";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
