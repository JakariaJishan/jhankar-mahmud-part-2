let person = {
    name : "jack",
    location: "dhaka",
    job: "developer",
    salary : 15000,
    totalAmount: function (amount, tips){
        console.log(this);
        this.salary = this.salary - amount - tips;
        return this.salary;
    }
}
// person.totalAmount(150);
// console.log(person.salary);

let anotherPerson ={
    name: 'joe',
    job: 'designer',
    salary: 20000,
}
//....bind....method ta ke baire niye eshe value set kore pathaite hoy..
// let finalResult = person.totalAmount.bind(anotherPerson);
// console.log(finalResult(2000));
// console.log(anotherPerson);
// console.log(person.salary);

//....call....comma diye argument set korte hoy..
// person.totalAmount.call(anotherPerson, 300, 20);
// console.log(anotherPerson.salary);

//....Apply...arguments gula akta array te rakhte hoy..
// person.totalAmount.apply(anotherPerson, [300, 20]);
// console.log(anotherPerson.salary);