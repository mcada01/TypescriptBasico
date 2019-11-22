var message:string;
var userNumber = prompt("Please enter a number:", "");
var i=1;
 
if (userNumber === null || userNumber === "") {
    message = "You should fill the field with a number";
}else{
    while (i <= parseInt(userNumber)){
        if((i%5) === 0){}
        else{
            console.log(i);
        }
        i++;
    }
}