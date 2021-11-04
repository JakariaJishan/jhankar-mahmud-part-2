class students{
    constructor(name, id){
        this.name = name;
        this.id = id;
        this.school = "adamjee"
    }
}
const stu1 = new students('jack', 33);
const stu2 = new students('mack', 55);
console.log(stu1.name, stu2.id);