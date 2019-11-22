/*interface Add{
    (x:number,y:number):void
}*/

interface Add{
    (x:number,y:number)
}

interface Sub{
    (x:number,y:number):number
}

var add:Add;
var sub:Sub;

/*add=function (x:number,y:number):void{
    console.log(x+y);
}*/

add=function (x:number,y:number):number{
    return x+y;
}

sub=function(a:number,b:number):number{
    return a-b;
}