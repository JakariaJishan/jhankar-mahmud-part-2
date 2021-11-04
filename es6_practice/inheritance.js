class Parent{
    constructor(){
        this.fatherName = 'schemvergger';

    }
}


class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    movieName(){
        return `${this.name} ${this.fatherName}`;
    }
}
const child1 = new Child('jack');
const child2 = new Child('mack');
console.log(child1.movieName());