var message;
var userNumber = prompt("Please enter a number:", "");
if (userNumber === null || userNumber === "") {
    message = "You should fill the field with a number";
}
else if ((parseInt(userNumber)) % 2) {
    message = "Number is odd";
}
else {
    message = "Number is even";
}
alert(message);
