enum Gender{
    Male,
    Female
}

console.log(Gender.Male); //return index 0
console.log(Gender[0]); //return value Male

enum WeekEnds{
    Saturday=6,
    Sunday=7
}

console.log(WeekEnds[6]); //return value Saturday
console.log(WeekEnds.Sunday); //return value 7
