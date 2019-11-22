var student = {
    firtsname: "John",
    lastname: "Bailey",
    score: 90
};
console.log(student.firtsname);
console.log(student.score);
for (var item in student) {
    console.log(item);
    console.log(student[item]);
}
var firtsname = student.firtsname, lastname = student.lastname;
console.log(firtsname + " " + lastname);
