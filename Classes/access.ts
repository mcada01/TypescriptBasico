class Student{
    // public name:string;
    // public readonly name:string = "John";
    private _name:string;

    display(){
        console.log(this._name);
    }

    get getName(){
        return this._name;
    }

    set setName(name:string){
        this._name = name;
    }
}

var student = new Student();
student.setName = "Bob";
console.log(student.getName);

