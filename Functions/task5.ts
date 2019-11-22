var mathsMark = prompt("Please enter the Maths mark between 0 and 5:", "");
var physicsMark = prompt("Please enter the Physics mark between 0 and 5:", "");
var chemistryMark = prompt("Please enter the Chemistry mark between 0 and 5:", "");

var total = function(...nums:number[]){
    var result = 0;
    for(var i=0;i<nums.length;i++){
        console.log(nums[i]);
        result += nums[i];
    }
    return ((result/nums.length)*100)/5;
}

if ((mathsMark === null || mathsMark === "") || (physicsMark === null || physicsMark === "") || (chemistryMark === null || chemistryMark === "")) {
    alert("You should enter all marks");
}else if((parseFloat(mathsMark) < 0 || parseFloat(mathsMark) > 5) || (parseFloat(physicsMark) < 0 || parseFloat(physicsMark) > 5) || (parseFloat(chemistryMark) < 0 || parseFloat(chemistryMark) > 5)){
    alert("The marks should be numbers between 0 and 5");
}else{
    if (total(parseFloat(mathsMark),parseFloat(physicsMark),parseFloat(chemistryMark)) < 70){
        console.log("The student is C Grade and your average is " + total(parseFloat(mathsMark),parseFloat(physicsMark),parseFloat(chemistryMark)));
    }else if (total(parseFloat(mathsMark),parseFloat(physicsMark),parseFloat(chemistryMark)) > 90){
        console.log("The student is A Grade and your average is " + total(parseFloat(mathsMark),parseFloat(physicsMark),parseFloat(chemistryMark)));
    }else{
        console.log("The student is B Grade and your average is " + total(parseFloat(mathsMark),parseFloat(physicsMark),parseFloat(chemistryMark)));
    }
}
